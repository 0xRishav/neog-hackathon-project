import { Link, useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { checkIfExists } from "../Utils";
import { useEffect, useState } from "react";

const RoomCard = ({ room, TotalSpeakers }) => {
  const chatRoomRef = db.collection("chatRooms");

  const addParticipantClickHandler = async (room) => {
    try {
      const { uid, email, displayName, photoURL } = auth.currentUser;

      if (!checkIfExists(room.participants, uid)) {
        const participants = room.participants.concat({
          id: uid,
          chatRoom: room.id,
          email: email,
          isHandRaised: false,
          isOnStage: false,
          name: displayName,
          photoUrl: photoURL
        });
        console.log("updating..", participants);
        await chatRoomRef.doc(room.id).update({ participants: participants });
        console.log("updated");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Link to={`/room/${room.id}`}>
      <div
        className="bg-white p-6 cursor-pointer rounded-2xl my-6"
        onClick={() => addParticipantClickHandler(room)}
      >
        <div className="flex justify-between items-center w-full mb-4">
          <h1>{room.topic}</h1>
          <p>{room.participants.length}</p>
        </div>
        <div className="flex flex-wrap items-start flex-col">
          <div className="flex items-center">
            {room.participants.map((item, index) => (
              <div className="" key={index}>
                <img
                  src={item.photoUrl}
                  alt="speaker"
                  className="h-8 w-8 object-cover rounded-2xl mx-1"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center mt-2">
            {room.participants.map((item, index) => (
              <div className="" key={index}>
                <span className="h-8 w-8 object-cover rounded-2xl mx-1">
                  {`${item.name}`}
                  {index < room.participants.length - 1 ? "," : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
