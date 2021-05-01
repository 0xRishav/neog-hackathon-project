import "./App.css";
import { ChatPage, HomePage, LandingPage } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="w-5/6 mx-auto my-0.5">
        <ChatPage />
        {/* <HomePage /> */}
        {/* <LandingPage /> */}
      </div>
    </div>
  );
}

export default App;
