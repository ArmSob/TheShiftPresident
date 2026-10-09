import { ExternalLink, FileText } from 'lucide-react'
import type { Position } from '../types'
import StatusBadge from './StatusBadge'

export default function PositionCell({ position }: { position: Position }) {
  const s = position.source
  return (
    <div className="space-y-2 text-sm">
      <StatusBadge status={position.status} />
      <p className="text-slate-700">{position.summary}</p>
      {position.quote && <p className="border-l-2 border-slate-300 pl-2 italic text-slate-500">{position.quote}</p>}
      {s?.type === 'programme' && (
        <p className="flex items-center gap-1 text-xs text-slate-500">
          <FileText className="h-3.5 w-3.5" /> Source : programme, page {s.page}
        </p>
      )}
      {s?.type === 'web' && (
        <a
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-xs text-blue-700 hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" /> {s.label} ({s.date})
        </a>
      )}
    </div>
  )
}
