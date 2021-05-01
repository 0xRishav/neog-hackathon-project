import "./App.css";
import { LandingPage, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
