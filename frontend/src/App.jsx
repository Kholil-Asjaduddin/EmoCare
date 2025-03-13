import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Used for testing
import Test from "./test/Test";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* route to /test */}
          <Route path="/" element={<Test />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
