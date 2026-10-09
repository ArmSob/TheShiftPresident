import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Themes from './pages/Themes'
import CandidateAnalysis from './pages/CandidateAnalysis'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="thematiques" element={<Themes />} />
        <Route path="analyse" element={<CandidateAnalysis />} />
        <Route path="analyse/:themeId" element={<CandidateAnalysis />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
