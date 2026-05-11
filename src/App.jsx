import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Nav from './components/Nav'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Hero from './pages/Hero'
import Work from './pages/Work'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'
import Somra from './pages/Somra'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/somra" element={<Somra />} />
      </Routes>
    </AnimatePresence>
  )
}

function ChromeNav() {
  const location = useLocation()
  if (location.pathname === '/somra') return null
  return <Nav />
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <ChromeNav />
        <AnimatedRoutes />
      </div>
    </HashRouter>
  )
}
