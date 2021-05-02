import { ChatText } from "../components";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const RoomChatScreen = ({ setIsOnChatScreen, dummyRoom }) => {
  return (
    <div className="mb-20">
      {dummyRoom.chats.map((chat, index) => (
        <ChatText {...chat} key={index} />
      ))}
      <div className="flex items-center fixed mx-auto w-5/6 bottom-0 fade--bottom">
        <div className="w-5/6 mx-auto flex items-center">
          <div className="bg-2 rounded-2xl relative">
            <form action="">
              <input
                type="text"
                placeholder="Type here..."
                className="py-2 px-4 w-5/6 outline-none bg-transparent"
              />
              <button className="absolute send-btn">
                <IoMdSend size="25" />
              </button>
            </form>
          </div>
        </div>

        <FaUserFriends size="30" onClick={() => setIsOnChatScreen(false)} />
      </div>
    </div>
  );
};

export default RoomChatScreen;
