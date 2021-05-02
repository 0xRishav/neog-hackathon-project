import "./App.css";
import { ChatPage, HomePage, LandingPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/authContext";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <div className="w-5/6 mx-auto my-0.5">
        <Routes>
          <Route
            path="/"
            element={user === null ? <LandingPage /> : <HomePage />}
          />
          <Route path="/room" element={<ChatPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
