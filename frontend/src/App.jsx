import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import CommunityPage from "./components/CommunityPage/CommunityPage";

// Used for testing
// import Test from "./test/Test";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* route to /community */}
          <Route path="/community" element={<CommunityPage />} />

          {/* route to /test */}
          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
