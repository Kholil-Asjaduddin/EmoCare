import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import PsychologistPage from "./components/ConsultationPage/PsychologistPage";
import Navbar from "./components/Navbar";

// Used for testing
// import Test from "./test/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-5">
        <Routes>
          {/* route to /landing */}
          <Route path="/landing" element={<LandingPage />} />
          {/* route to /signup */}
          <Route path="/signup" element={<SignupPage />} />
          {/* route to /login */}
          <Route path="/login" element={<LoginPage />} />
          {/* route to /community */}
          <Route path="/community" element={<CommunityPage />} />
          {/* route to /consultation */}
          <Route path="/consultation" element={<PsychologistPage />} />

          {/* route to /test */}
          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
