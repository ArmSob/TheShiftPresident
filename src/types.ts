export type Status = 'compatible' | 'contraire' | 'absent'

export interface Recommendation {
  id: string
  title: string
  explanation: string
  /** Page du rapport du Shift Project */
  page: number
}

export interface Theme {
  id: string
  label: string
  icon: string
  description: string
  report: string
  recommendations: Recommendation[]
}

export interface ShiftData {
  generated_at: string
  mock: boolean
  themes: Theme[]
}

export type Source =
  | { type: 'programme'; page: number }
  | { type: 'web'; url: string; label: string; date: string }

export interface Position {
  status: Status
  summary: string
  quote?: string
  source?: Source
}

export interface Candidate {
  id: string
  name: string
  party: string
  color: string
  /** clé = id de recommandation */
  positions: Record<string, Position>
}

export interface CandidatesData {
  generated_at: string
  mock: boolean
  candidates: Candidate[]
}
