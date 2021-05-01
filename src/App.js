import "./App.css";
import { LandingPage, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/authContext";
function App() {
  const {user} = useAuth();
  return (
    <div className="App bg-gray-100">
      <Routes>
        <Route path="/" element={user === null ? <LandingPage /> : <HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
