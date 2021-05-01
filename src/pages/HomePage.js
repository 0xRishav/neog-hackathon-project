import { useState } from "react";
import { RoomCard } from "../components";
import { CreateRoomForm, EndRoom } from "../components";

const HomePage = () => {
  const [formDisplay, setFormDisplay] = useState("none");
  const [endDisplay, setEndDisplay] = useState("none");

  const dummyRoom = {
    roomName: "Test Room",
    host: "Rishav",
    speakers: [
      {
        name: "Danish",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      },
      {
        name: "Ritika",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      },
      {
        name: "Rishav",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      }
    ],
    participants: 8
  };

  const dummyRooms = [dummyRoom, dummyRoom, dummyRoom];

  const TotalSpeakers = dummyRoom.speakers.length;
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
          alt="profile-image"
          className="h-12 w-12 object-cover rounded-lg"
        />
        <button
          onClick={() => setFormDisplay("block")}
          className="px-4 py-1 bg-blue-500 rounded-md my-6"
        >
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
        {dummyRooms.map((dummyRoom, index) => (
          <RoomCard
            dummyRoom={dummyRoom}
            key={index}
            TotalSpeakers={TotalSpeakers}
          />
        ))}
        <h1 className="font-bold my-6 mt-12">Saved Rooms</h1>
        {dummyRooms.map((dummyRoom, index) => (
          <RoomCard
            dummyRoom={dummyRoom}
            key={index}
            TotalSpeakers={TotalSpeakers}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
