import { BsChatQuoteFill } from "react-icons/bs";
import { IoMdHand } from "react-icons/io";
import { IoHandRightSharp } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useParams } from "react-router";

const RoomParticipantsScreen = ({setIsOnChatScreen }) => {
  const [room, setRoom] = useState({});
  const {roomId} = useParams();

  useEffect(() => {
    (async () => {
      try{
        const result = await db.collection('chatRooms').doc(roomId).get();
        setRoom(result.data());
      }
      catch(err){
        console.log(err);
      }
    })();
  }, [])

  console.log(room);

  return (
    <div>
      <h1 className="font-bold text-lg mb-4">Stage</h1>
      <div className="flex flex-wrap">
        {room?.participants?.filter(item => item.isOnStage === true).map((item, index) => (
          <div className="m-2" key={index}>
            <img
              className="h-10 w-10 object-cover rounded-2xl "
              src={item.photoUrl}
              alt="Speakerpic"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="w-screen h-0.5 bg-gray-100" />

      <h1 className="font-bold text-lg my-4">Participants</h1>
      <div className="flex flex-wrap">
        {room?.participants?.filter(item => item.isOnStage === false).map((item, index) => (
          <div className="m-2" key={index}>
            <img
              className="h-10 w-10 object-cover rounded-2xl "
              src={item.photoUrl}
              alt="Participantpic"
            />
            <p>{item.name.split(" ", 1)}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center fixed bottom-12">
        <button className="flex items-center px-4 py-1 bg-blue-500 rounded-2xl my-6">
          Raise Hand <IoMdHand size="40" />
        </button>
        <IoIosChatbubbles
          onClick={() => setIsOnChatScreen(true)}
          size="40"
          className="ml-8"
        />
      </div>
    </div>
  );
};

export default RoomParticipantsScreen;
