import { ChatText } from "../components";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useRef } from "react";

const RoomChatScreen = ({ setIsOnChatScreen }) => {
  const [text, setText] = useState("");
  const [room, setRoom] = useState({});
  const { roomId } = useParams();

  const scrollDiv = useRef();

  useEffect(() => {
    (async () => {
      try {
        const result = await db.collection("chatRooms").doc(roomId).get();
        setRoom(result.data());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [room.messages]);

  const sendMessageClickHandler = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;

    const chatRoomRef = db.collection("chatRooms");

    console.log("chatroom ref is...", chatRoomRef);

    try {
      console.log("line32: ", room.messages);
      const msg = room.messages.concat([
        {
          text: text,
          chatRoom: roomId,
          userId: uid,
          name: displayName,
          photoUrl: photoURL,
          createdAt: new Date(),
        },
      ]);

      setText("");
      console.log("updating message..", msg);
      await chatRoomRef.doc(roomId).update({ messages: msg });

      console.log("updated messages");
    } catch (err) {
      console.log(err);
    }
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mb-20">
      {room?.messages?.map((msg, index) => (
        <ChatText {...msg} key={index} />
      ))}
      <div ref={scrollDiv} className="scrollDiv"></div>
      <div className="flex items-center fixed w-5/6 sm:w-4/6  xl:w-2/6 2xl:w-1/6 mx-auto bottom-2 fade--bottom">
        <div className="mx-auto flex items-center">
          <div className="bg-2 rounded-2xl relative">
            <form onSubmit={(e) => sendMessageClickHandler(e)}>
              <input
                type="text"
                value={text}
                placeholder="Type here..."
                className="py-2 px-4 w-5/6 outline-none bg-transparent"
                onChange={(e) => setText(e.target.value)}
                // disabled={room.participants[room.host.id].isOnStage ? "true" : "false"}
              />
              <button className="absolute send-btn" type="submit">
                <IoMdSend size="25" />
              </button>
            </form>
          </div>
        </div>

        <FaUserFriends
          size="30"
          onClick={() => setIsOnChatScreen(false)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RoomChatScreen;
