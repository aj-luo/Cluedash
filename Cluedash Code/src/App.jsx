import Mainbody from './Mainbody.jsx'
import MainbodyFrench from './MainBodyFrench/MainBodyFrench.jsx'
import Easy from './Easy/Easy.jsx'
import Medium from './Medium/Medium.jsx'
import Hard from './Hard/Hard.jsx'
import Instruction from './Instruction/Instruction.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/en" element={<Mainbody />} />
          <Route path="/fr" element={<MainbodyFrench />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
          <Route path="/instructions" element={<Instruction />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App