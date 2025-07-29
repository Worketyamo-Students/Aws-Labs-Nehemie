import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./Inscription/Inscription";
import Verification from "./Verification/Verification";
import Bienvenue from "./Bienvenue/Bienvenue";
import Finalisation from "./Finalisation/Finalisation";
import AuthLayout from "./AuthLayout/Authlayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
            path="/" 
            element={
              <AuthLayout>
                <Inscription />
              </AuthLayout>
            }
          />

        <Route 
            path="/Verification" 
            element={
              <AuthLayout>
                <Verification />
              </AuthLayout>
            }
          />

        <Route 
            path="/Finalisation" 
            element={
              <AuthLayout>
                <Finalisation />
              </AuthLayout>
            }
          />

        <Route 
            path="/Bienvenue" 
            element={
              <AuthLayout>
                <Bienvenue />
              </AuthLayout>
            }
          />
      </Routes>
    </Router>
  )
};

export default App;