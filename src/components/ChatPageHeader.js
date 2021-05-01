import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const ChatPageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <IoIosArrowBack size="30" />
      <button className="px-4 py-1 bg-red-500 rounded-2xl my-6 text-white flex justify-between items-center">
        Leave
        <IoIosArrowRoundForward style={{ marginLeft: "5px" }} />
      </button>
    </div>
  );
};

export default ChatPageHeader;
