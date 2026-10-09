import type { Status } from '../types'
import { STATUS_META } from '../utils/data'

export default function StatusBadge({ status }: { status: Status }) {
  const m = STATUS_META[status]
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${m.classes}`}>
      {m.label}
    </span>
  )
}
