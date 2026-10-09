import { useNavigate, useParams } from 'react-router-dom'
import PositionCell from '../components/PositionCell'
import { candidatesData, getPosition, getTheme, shiftData, themeScore } from '../utils/data'

export default function CandidateAnalysis() {
  const { themeId } = useParams()
  const navigate = useNavigate()
  const theme = getTheme(themeId ?? '') ?? shiftData.themes[0]
  const { candidates } = candidatesData

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analyse : {theme.label}</h1>
          <p className="mt-1 text-slate-600">{theme.description}</p>
        </div>
        <select
          value={theme.id}
          onChange={(e) => navigate(`/analyse/${e.target.value}`)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          aria-label="Thématique"
        >
          {shiftData.themes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {candidates.map((c) => {
          const score = themeScore(c, theme)
          return (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: c.color }} />
                <span className="font-semibold">{c.name}</span>
              </div>
              <p className="text-xs text-slate-500">{c.party}</p>
              <div className="mt-3 h-2 rounded-full bg-slate-100">
                <div className="h-2 rounded-full" style={{ width: `${score}%`, background: c.color }} />
              </div>
              <p className="mt-1 text-xs text-slate-600">{score}% de recommandations compatibles</p>
            </div>
          )
        })}
      </div>

      <div className="space-y-6">
        {theme.recommendations.map((r) => (
          <article key={r.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-emerald-50 p-5">
              <h2 className="font-semibold text-emerald-900">{r.title}</h2>
              <p className="mt-1 text-sm text-slate-700">{r.explanation}</p>
              <p className="mt-2 text-xs text-slate-500">Source : {theme.report}, page {r.page}</p>
            </div>
            <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              {candidates.map((c) => (
                <div key={c.id} className="p-5">
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} /> {c.name}
                  </p>
                  <PositionCell position={getPosition(c, r.id)} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
