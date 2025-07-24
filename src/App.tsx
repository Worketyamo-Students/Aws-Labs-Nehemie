import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./Inscription/Inscription";
import Verification from "./Verification/Verification";
import Bienvenue from "./Bienvenue/Bienvenue";
import Finalisation from "./Finalisation/Finalisation";
import { StepSidebar } from "./StepSidebar/StepSidebar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inscription/>}></Route>
        <Route path="/verification" element={<Verification/>}></Route>
        <Route path="/finalisation" element={<Finalisation/>}></Route>
        <Route path="/bienvenue" element={<Bienvenue/>}></Route>
        <Route path="/stepsidebar" element={<StepSidebar/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;