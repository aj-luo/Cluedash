import Mainbody from './Mainbody.jsx'
import MainbodyFrench from './MainBodyFrench/MainBodyFrench.jsx'
import Easy from './Easy/Easy.jsx'
import Medium from './Medium/Medium.jsx'
import Hard from './Hard/Hard.jsx'
import Instruction from './Instruction/Instruction.jsx'
import Asset from './Asset/Asset.jsx'
import Privacy from './Privacy/Privacy.jsx'
import TOS from './TOS/TOS.jsx'
import Gamescreen from './Gamescreen/Gamescreen.jsx'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();

  return (
  <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/en" element={<PageWrapper><Mainbody /></PageWrapper>} />
      <Route path="/fr" element={<PageWrapper><MainbodyFrench /></PageWrapper>} />
      <Route path="/easy" element={<PageWrapper><Easy /></PageWrapper>} />
      <Route path="/medium" element={<PageWrapper><Medium /></PageWrapper>} />
      <Route path="/hard" element={<PageWrapper><Hard /></PageWrapper>} />
      <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
      <Route path="/terms-of-service" element={<PageWrapper><TOS /></PageWrapper>} />
      <Route path="/instructions" element={<PageWrapper><Instruction /></PageWrapper>} />
      <Route path="/assets" element={<PageWrapper><Asset /></PageWrapper>} />
      <Route path="/game/:difficulty/:gameId" element={<PageWrapper><Gamescreen /></PageWrapper>}></Route>
    </Routes>
  </AnimatePresence>
  )
}

function PageWrapper({children}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
        {children}
    </motion.div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App