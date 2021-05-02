import { BsChatQuoteFill } from "react-icons/bs";
import { IoMdHand } from "react-icons/io";
import { IoHandRightSharp } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";

const RoomParticipantsScreen = ({ dummyRoom, setIsOnChatScreen }) => {
  console.log(dummyRoom.participants);
  return (
    <div>
      <h1 className="font-bold text-lg mb-4">Stage</h1>
      <div className="flex flex-wrap">
        {dummyRoom.speakers.map((speaker, index) => (
          <div className="m-2" key={index}>
            <img
              className="h-10 w-10 object-cover rounded-2xl "
              src={speaker.img}
              alt="speakerpic"
            />
            <p>{speaker.name}</p>
          </div>
        ))}
      </div>

      <div className="w-screen h-0.5 bg-gray-100" />

      <h1 className="font-bold text-lg my-4">Participants</h1>
      <div className="flex flex-wrap">
        {dummyRoom.attendees.map((participant, index) => (
          <div className="m-2" key={index}>
            <img
              className="h-10 w-10 object-cover rounded-2xl "
              src={participant.img}
              alt="participant-image"
            />
            <p>{participant.name}</p>
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
