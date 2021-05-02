const RoomCard = ({ dummyRoom, TotalSpeakers }) => {
  return (
    <div className="bg-white p-6 cursor-pointer rounded-2xl my-6">
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
                className="h-8 w-8 object-cover rounded-2xl mx-1"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center mt-2">
          {dummyRoom.speakers.map((speaker, index) => (
            <div className="">
              <span
                key={index}
                className="h-8 w-8 object-cover rounded-2xl mx-1"
              >
                {`${speaker.name}`}
                {index < TotalSpeakers - 1 ? "," : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
