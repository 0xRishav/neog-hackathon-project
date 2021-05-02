import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { EndRoom } from "./EndRoom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ChatPageHeader = () => {
  const [endDisplay, setEndDisplay] = useState("none");
  return (
    <div className="flex justify-between items-center">
      <EndRoom endDisplay={endDisplay} setEndDisplay={setEndDisplay} />
      <Link to="/">
        <IoIosArrowBack size="30" />
      </Link>
      <button className="px-4 py-1 bg-red-500 rounded-2xl my-6 text-white flex justify-between items-center">
        Leave
        <IoIosArrowRoundForward style={{ marginLeft: "5px" }} />
      </button>
    </div>
  );
};

export default ChatPageHeader;
