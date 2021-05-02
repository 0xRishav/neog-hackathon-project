import { ChatText } from "../components";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const RoomChatScreen = ({ setIsOnChatScreen, room }) => {
  return (
    <div>
      {room.chats.map((chat, index) => (
        <ChatText {...chat} key={index} />
      ))}
      <div className="flex items-center fixed bottom-6">
        <div className="">
          <input type="text" placeholder="Type here..." className="w-3/6" />
          <button>
            <IoMdSend />
          </button>
        </div>
        <FaUserFriends size="30" onClick={() => setIsOnChatScreen(false)} />
      </div>
    </div>
  );
};

export default RoomChatScreen;
