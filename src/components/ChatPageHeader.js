import { IoIosArrowBack } from "react-icons/io";
import { EndRoom } from "./EndRoom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {useAuth} from "../context/authContext";

const ChatPageHeader = () => {
  const [endDisplay, setEndDisplay] = useState("none");
  const [room, setRoom] = useState({});
  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const result = await db.collection("chatRooms").doc(roomId).get();
        setRoom(result.data());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const { uid } = auth.currentUser;
  const chatRoomRef = db.collection("chatRooms");
  const query = chatRoomRef.orderBy("startTime");
  const [chatRooms] = useCollectionData(query, { idField: "id" });
  console.log("chatrooms are...", chatRooms);
  let result;
  async function getRooms() {
    result = await chatRooms?.find((item) => uid === item.host.id);
  }
  getRooms();

  const leaveRoom = async () => {
    try {
      console.log("line 12", room, roomId);
      const userId = auth.currentUser.uid;
      console.log("leaving user's id is...", userId);
      const result = room.participants;
      const filteredParticipants = result.filter((user) => user.id !== userId);
      let newHost;
      if (room.host.id === userId) {
        newHost = filteredParticipants.filter(
          (user) => user.isOnStage !== true
        )[0];
      }
      console.log(newHost);
      await db
        .collection("chatRooms")
        .doc(roomId)
        .update({ participants: filteredParticipants, host: newHost });
      console.log("left bbye");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="flex justify-between items-center">
    <EndRoom endDisplay={endDisplay} setEndDisplay={setEndDisplay} /> 
      <Link to="/">
        <IoIosArrowBack size="30" />
      </Link>
      <button
        className="px-4 py-1 bg-red-500 rounded-2xl my-6 text-white flex justify-between items-center"
        onClick={leaveRoom}
      >
        Leave
        <IoIosArrowRoundForward style={{ marginLeft: "5px" }} />
      </button>
      {result && (
        <button
          onClick={() => setEndDisplay("block")}
          className="px-4 py-1 bg-blue-500 rounded-md my-6"
        >
          End Chat
        </button>
      )}
    </div>
  );
};

export default ChatPageHeader;
