import { ChatPageHeader, ChatText } from "../components";
// import { BiSend } from "react-icon/bi";

const ChatPage = () => {
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
  return (
    <div>
      <ChatPageHeader />
      {dummyRoom.chats.map((chat, index) => (
        <ChatText {...chat} key={index} />
      ))}
      <div className="fixed bottom-6">
        <input type="text" placeholder="Type here..." className="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;