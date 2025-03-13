import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import Navbar from "./components/Navbar";


// Used for testing
// import Test from "./test/Test";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* route to /community */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/navbar" element={<Navbar />} /> 
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          {/* route to /test */}
          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
