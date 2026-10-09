import ThemeCard from '../components/ThemeCard'
import { shiftData } from '../utils/data'

export default function Themes() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Thématiques</h1>
      <p className="mt-2 text-slate-600">Choisissez un secteur pour comparer le Shift Project et les candidats.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shiftData.themes.map((t) => <ThemeCard key={t.id} theme={t} />)}
      </div>
    </div>
  )
}
