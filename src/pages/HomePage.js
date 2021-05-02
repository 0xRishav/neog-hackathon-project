import { useState } from "react";
import { RoomCard } from "../components";
import { CreateRoomForm, EndRoom } from "../components";
import { db, auth } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';



const HomePage = () => {
  const [formDisplay, setFormDisplay] = useState("none");
  const [endDisplay, setEndDisplay] = useState("none");

  const chatRoomRef = db.collection('chatRooms');
  const query = chatRoomRef.orderBy('startTime');
  const [chatRooms] = useCollectionData(query, { idField: 'id' })

  return (
    <div className="">
      <CreateRoomForm
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
      />
      <EndRoom endDisplay={endDisplay} setEndDisplay={setEndDisplay} />
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="host"
          className="h-12 w-12 object-cover rounded-2xl"
        />
        <button onClick={() => setFormDisplay("block")} className="px-4 py-1 bg-blue-500 rounded-2xl my-6 text-white">
          Create Room
        </button>
        <button
          onClick={() => setEndDisplay("block")}
          className="px-4 py-1 bg-blue-500 rounded-md my-6"
        >
          End Chat
        </button>
      </div>
      <div className="mt-4">
        <h1 className="font-bold my-6">Active Rooms</h1>
        {chatRooms && chatRooms.map((item, index) => (
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
