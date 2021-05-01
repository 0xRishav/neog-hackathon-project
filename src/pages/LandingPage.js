import { useAuth } from "../context/authContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { signInWithGoogle } from "../services/auth";

const LandingPage = () => {
  const { signInClickHandler} = useAuth();

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-xl">Hey, Welcome to SocialHouse 🎉</h1>
      <button className="px-4 py-1 bg-blue-500 rounded-md my-6" onClick={signInClickHandler}>Sign In</button>
    </div>
  );
};

export default LandingPage;
