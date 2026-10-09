import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenCheck, Search, Vote } from 'lucide-react'

const steps = [
  { icon: BookOpenCheck, title: 'Les recommandations du Shift', text: 'Le Shift Project publie le Plan de transformation de l’économie française (PTEF), secteur par secteur.' },
  { icon: Vote, title: 'Les programmes 2027', text: 'Nous extrayons, page par page, ce que chaque candidat propose réellement sur chaque sujet.' },
  { icon: Search, title: 'Le comparatif sourcé', text: 'Compatible, contraire ou absent : chaque position cite sa page, ou un lien web si elle vient d’ailleurs.' },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-600 px-6 py-16 text-center text-white sm:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">Présidentielle 2027</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Les candidats sont-ils à la hauteur du climat&nbsp;?</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50">
          Explorez les recommandations du Shift Project par secteur et comparez, preuves à l’appui, les positions des candidats.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/thematiques" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-50">
            Explorer les thématiques <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/analyse" className="rounded-lg border border-white/60 px-5 py-3 font-semibold hover:bg-white/10">
            Voir le comparatif
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Icon className="h-5 w-5" /></span>
              <span className="text-sm font-bold text-slate-400">0{i + 1}</span>
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
