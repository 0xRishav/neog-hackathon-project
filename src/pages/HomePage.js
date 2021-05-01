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
  };

  const dummyRooms = [dummyRoom, dummyRoom, dummyRoom];

  const TotalSpeakers = dummyRoom.speakers.length;
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="profile-image"
          className="h-12 w-12 object-cover rounded-lg"
        />
        <button className="px-4 py-1 bg-blue-500 rounded-md my-6">
          Create Room
        </button>
      </div>
      <div className="mt-4">
        <h1 className="font-bold my-6">Active Rooms</h1>
        {dummyRooms.map((dummyRoom, index) => (
          <div
            key={index}
            className="bg-white p-6 cursor-pointer rounded-xl my-6"
          >
            <div className="flex justify-between items-center w-full mb-4">
              {dummyRoom.roomName}
              <p>{dummyRoom.participants}</p>
            </div>
            <div className="flex flex-wrap items-start flex-col">
              <div className="flex items-center">
                {dummyRoom.speakers.map((speaker, index) => (
                  <div className="">
                    <img
                      src={speaker.img}
                      alt="speaker-image"
                      key={index}
                      className="h-8 w-8 object-cover rounded-md mx-1"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-2">
                {dummyRoom.speakers.map((speaker, index) => (
                  <div className="">
                    <span
                      key={index}
                      className="h-8 w-8 object-cover rounded-md mx-1"
                    >
                      {`${speaker.name}`}
                      {index < TotalSpeakers - 1 ? "," : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <h1 className="font-bold my-6 mt-12">Saved Rooms</h1>
        {dummyRooms.map((dummyRoom, index) => (
          <div
            key={index}
            className="bg-white p-6 cursor-pointer rounded-xl my-6"
          >
            <div className="flex justify-between items-center w-full mb-4">
              {dummyRoom.roomName}
              <p>{dummyRoom.participants}</p>
            </div>
            <div className="flex flex-wrap items-start flex-col">
              <div className="flex items-center">
                {dummyRoom.speakers.map((speaker, index) => (
                  <div className="">
                    <img
                      src={speaker.img}
                      alt="speaker-image"
                      key={index}
                      className="h-8 w-8 object-cover rounded-md mx-1"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-2">
                {dummyRoom.speakers.map((speaker, index) => (
                  <div className="">
                    <span
                      key={index}
                      className="h-8 w-8 object-cover rounded-md mx-1"
                    >
                      {`${speaker.name}`}
                      {index < TotalSpeakers - 1 ? "," : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
