import { ChatPage, HomePage, LandingPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/authContext";

function App() {
  const { currentUser } = useAuth();
  return (
    <div className="App">
      <div className="w-5/6 sm:w-4/6 lg:w-3/6 mx-auto my-0.5 relative">
        <Routes>
          <Route
            path="/"
            element={currentUser === null ? <LandingPage /> : <HomePage />}
          />
          <Route path="/room/:roomId" element={<ChatPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
