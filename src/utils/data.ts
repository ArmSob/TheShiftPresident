import shiftJson from '../data/shift_data.json'
import candidatesJson from '../data/candidates_data.json'
import type { CandidatesData, Candidate, Position, ShiftData, Status, Theme } from '../types'

export const shiftData = shiftJson as ShiftData
export const candidatesData = candidatesJson as CandidatesData

export const getTheme = (id: string): Theme | undefined =>
  shiftData.themes.find((t) => t.id === id)

export const getPosition = (c: Candidate, recoId: string): Position =>
  c.positions[recoId] ?? { status: 'absent', summary: 'Aucune donnée.' }

export const STATUS_META: Record<Status, { label: string; classes: string }> = {
  compatible: { label: 'Compatible', classes: 'bg-emerald-100 text-emerald-800 ring-emerald-600/20' },
  contraire: { label: 'Contraire', classes: 'bg-rose-100 text-rose-800 ring-rose-600/20' },
  absent: { label: 'Absent', classes: 'bg-slate-100 text-slate-600 ring-slate-500/20' },
}

/** Score de compatibilité d'un candidat sur une thématique (0-100). */
export function themeScore(c: Candidate, theme: Theme): number {
  if (!theme.recommendations.length) return 0
  const pts = theme.recommendations.reduce((s, r) => {
    const st = getPosition(c, r.id).status
    return s + (st === 'compatible' ? 1 : 0)
  }, 0)
  return Math.round((pts / theme.recommendations.length) * 100)
}
