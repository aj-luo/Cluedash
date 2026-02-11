import Mainbody from './Mainbody.jsx'
import MainbodyFrench from './MainBodyFrench/MainBodyFrench.jsx'
import Easy from './Easy/Easy.jsx'
import Medium from './Medium/Medium.jsx'
import Hard from './Hard/Hard.jsx'
import Instruction from './Instruction/Instruction.jsx'
import Asset from './Asset/Asset.jsx'
import Privacy from './Privacy/Privacy.jsx'
import TOS from './TOS/TOS.jsx'
import Easygame from './Easygame/Easygame.jsx'
import Mediumgame from './Mediumgame/Mediumgame.jsx'
import Hardgame from './Hardgame/Hardgame.jsx'
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TOS />} />
          <Route path="/instructions" element={<Instruction />} />
          <Route path="/assets" element={<Asset />} />
          <Route path="/easygame" element={<Easygame />}></Route>
          <Route path="/mediumgame" element={<Mediumgame />}></Route>
          <Route path="/hardgame" element={<Hardgame />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App