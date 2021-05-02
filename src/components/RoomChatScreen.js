import { ChatText } from "../components";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { auth, db } from "../firebase";
import { useState } from "react";

const RoomChatScreen = ({ setIsOnChatScreen, room }) => {
  const [text, setText] = useState("")

  const sendMessageClickHandler =  async (e, room) => {
    e.preventDefault();
    const {uid, displayName, photoURL} = auth.currentUser;

    const chatRoomRef = db.collection('chatRooms');

    const messages = room.messages.concat({
      text: text,
      chatRoom: room.id,
      userId: uid,
      name: displayName,
      photoUrl: photoURL,
      createdAt: new Date(),
    })
    console.log("updating messaged..", messages)
    await chatRoomRef.doc(room.id).update({messages: messages})

    console.log("updated messages")
  }

  console.log("room data is",room);
  return (
    <div className="mb-20">
    {room?.messages?.map((msg, index) => (
      <ChatText {...msg} key={index} />
    ))}
      <div className="flex items-center fixed mx-auto w-5/6 bottom-0 fade--bottom">
        <div className="w-5/6 mx-auto flex items-center">
          <div className="bg-2 rounded-2xl relative">
            <form 
            onSubmit={sendMessageClickHandler}
            >
              <input
                type="text"
                value={text}
                placeholder="Type here..."
                className="py-2 px-4 w-5/6 outline-none bg-transparent"
                onChange={(e) => setText(e.target.value)}
              />
              <button className="absolute send-btn" type="submit">
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
