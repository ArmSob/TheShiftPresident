import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Theme } from '../types'
import { ThemeIcon } from '../utils/icons'

export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      to={`/analyse/${theme.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md"
    >
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
        <ThemeIcon name={theme.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold">{theme.label}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{theme.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-emerald-700">
        <span>{theme.recommendations.length} recommandations</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
