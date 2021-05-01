import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-xl">Hey, Welcome to SocialHouse 🎉</h1>
      <Link to="/homepage">
        <button className="px-4 py-1 bg-blue-500 rounded-md my-6">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
