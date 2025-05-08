import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import ChatbotPage from "./components/ChatbotPage/ChatbotPage";
//import Navbar from "./components/Navbar";

// Used for testing
// import Test from "./test/Test";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main>
        <Routes>
          {/* route to /landing */}
          <Route path="/landing" element={<LandingPage />} />
          {/* route to /signup */}
          <Route path="/signup" element={<SignupPage />} />
          {/* route to /login */}
          <Route path="/login" element={<LoginPage />} />
          {/* route to /community */}
          <Route path="/community" element={<CommunityPage />} />
          {/* route to /chatbot */}
          <Route path="/chatbot" element={<ChatbotPage />} />

          {/* route to /test */}
          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
