import { useState } from "react";
import { auth, db } from "../firebase";


export const CreateRoomForm = ({ formDisplay, setFormDisplay }) => {
  const [topic, setTopic] = useState("");

  const chatRoomRef = db.collection('chatRooms');

  const createRoom = async(e) => {
    e.preventDefault();
    const {uid, displayName, email, photoURL} = auth.currentUser;
    await chatRoomRef.add({
      endTime: "",
      host: {
        id: uid,
        chatRoom: true,
        email: email,
        isHandRaised: false,
        isOnStage: true,
        name: displayName,
        photoUrl: photoURL},
      messages: [],
      participants: [],
      topic: topic,
      startTime: new Date()
    })
    .then(() => {
      setTopic("")
      console.log("ChatRoom successfully written in Firestore!");
    })
    .catch((error) => {
        console.error("Error writing chatRooms document: ", error);
    });
  }

  return (
    <div
      className="form-wrapper"
      style={{ height: "auto", display: formDisplay }}
    >
      <form className="form-wrapper" onSubmit={createRoom}>
          <input
            value={topic}
            onChange={(e) => 
              setTopic(e.target.value)
            }
            className="spaced"
            type="text"
            placeholder="Topic "
          />
          <button type="submit">Create Now !</button>
      </form>
    </div>
  );
};
