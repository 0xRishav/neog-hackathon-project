import { RoomCard } from "../components";

const HomePage = () => {
  const dummyRoom = {
    roomName: "Test Room",
    host: "Rishav",
    speakers: [
      {
        name: "Danish",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        name: "Ritika",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        name: "Rishav",
        img:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
    ],
    participants: 8,
    chats: [
      {
        userId: 1,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
      {
        userId: 2,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
      {
        userId: 3,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
      {
        userId: 4,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
      {
        userId: 5,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
      {
        userId: 6,
        text: "Lorem Ipsum is",
        userProfileImg:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        userName: "Chhota Bheem",
      },
    ],
  };

  const dummyRooms = [dummyRoom, dummyRoom, dummyRoom];

  const TotalSpeakers = dummyRoom.speakers.length;
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="profile-image"
          className="h-12 w-12 object-cover rounded-2xl"
        />
        <button className="px-4 py-1 bg-blue-500 rounded-2xl my-6 text-white">
          Create Room
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
