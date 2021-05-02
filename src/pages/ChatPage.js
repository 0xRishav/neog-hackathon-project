import {
  ChatPageHeader,
  ChatText,
  RoomChatScreen,
  RoomParticipantsScreen,
} from "../components";
import { useState } from "react";

const ChatPage = () => {
  const [isOnChatScreen, setIsOnChatScreen] = useState(true);

  return (
    <div>
      <ChatPageHeader />
      {(isOnChatScreen) ? ( 
        <RoomChatScreen
          setIsOnChatScreen={setIsOnChatScreen}
        />
      ) : (
        <RoomParticipantsScreen
          setIsOnChatScreen={setIsOnChatScreen}
        />
      )}
    </div>
  );
};

export default ChatPage;
