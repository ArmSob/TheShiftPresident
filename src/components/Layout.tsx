import { Link, NavLink, Outlet } from 'react-router-dom'
import { Scale } from 'lucide-react'
import { candidatesData, shiftData } from '../utils/data'

const link = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-emerald-700 text-white' : 'text-slate-700 hover:bg-slate-200'
  }`

export default function Layout() {
  const mock = shiftData.mock || candidatesData.mock
  return (
    <div className="flex min-h-screen flex-col">
      {mock && (
        <div className="bg-amber-100 px-4 py-1.5 text-center text-xs font-medium text-amber-900">
          Données factices de démonstration — les analyses IA ne sont pas encore branchées.
        </div>
      )}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-emerald-800">
            <Scale className="h-5 w-5" /> Shift × Présidentielle 2027
          </Link>
          <nav className="flex gap-1">
            <NavLink to="/" end className={link}>Accueil</NavLink>
            <NavLink to="/thematiques" className={link}>Thématiques</NavLink>
            <NavLink to="/analyse" className={link}>Analyse</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        Projet citoyen indépendant, non affilié au Shift Project. Sources : rapports PTEF et programmes des candidats.
      </footer>
    </div>
  )
}
