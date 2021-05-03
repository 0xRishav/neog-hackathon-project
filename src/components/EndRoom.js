import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { db } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';


export const EndRoom = ({ endDisplay, setEndDisplay }) => {
  const [room, setRoom] = useState({});
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [save, setSave] = useState(false);

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

  const chatRoomRef = db.collection('chatRooms'); 

  const saveChatRoomHandler = async () => {
    setEndDisplay("none");
    const updatedRoom = {...room, save: save, endTime: new Date(), messages: (save ? room.messages : []) }
    console.log("updating..", updatedRoom);
    await chatRoomRef.doc(roomId).update(updatedRoom);
    console.log("updated");
    setSave(false);
  }

  return (
    <div
      className="end-room-wrapper"
      style={{ height: "auto", display: endDisplay }}
    >
      <p>End this conversation?</p>
      <label>
        <input type="checkbox" onChange={() => setSave(state => !state)}/>
        Save this chat
      </label>
      <button onClick={saveChatRoomHandler}>End</button>
    </div>
  );
};
