import { useState } from "react";
import { RoomCard } from "../components";
import { CreateRoomForm, EndRoom } from "../components";
import { db, auth } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const HomePage = () => {
  const [formDisplay, setFormDisplay] = useState("none");

  const chatRoomRef = db.collection("chatRooms");
  const query = chatRoomRef.orderBy("startTime");
  const [chatRooms] = useCollectionData(query, { idField: "id" });

  console.log("what is the error", auth.currentUser);
  const { photoURL } = auth.currentUser;
  return (
    <div className="">
      <CreateRoomForm
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
      />
      <div className="flex justify-between items-center">
        <img
          src={photoURL}
          alt="host"
          className="h-12 w-12 object-cover rounded-2xl"
        />
        <button
          onClick={() => setFormDisplay("block")}
          className="px-4 py-1 bg-blue-500 rounded-2xl my-6 text-white"
        >
          Create Room
        </button>
      </div>
      <div className="mt-4">
        <h1 className="font-bold my-6">Active Rooms</h1>
        {chatRooms && chatRooms.filter(item => item.endTime === "").reverse().map((item, index) => (
          <RoomCard
            room={item}
            key={index}            
          />
        ))}
      </div>
      <div className="mt-4">
        <h1 className="font-bold my-6">Saved Rooms</h1>
        {chatRooms && chatRooms.filter(item => item.endTime !== "" && item.save ).reverse().map((item, index) => (
          <RoomCard
            room={item}
            key={index}            
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
