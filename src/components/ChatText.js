import {auth} from '../firebase';

const ChatText = ({ userId, photoUrl, text, name }) => {
  const currentUserId = auth.currentUser.uid;
  return (
    <div>
      <div
        className={
          userId === currentUserId
            ? "talk-bubble tri-right round btm-right"
            : "talk-bubble tri-right round btm-left"
        }
      >
        <div className="talktext">
          <p>{text}</p>
        </div>
      </div>
      <div
        className={
          userId === currentUserId
            ? "flex items-center flex-row-reverse"
            : "flex items-center"
        }
      >
        <img
          src={photoUrl}
          alt="profilepic"
          className="h-10 w-10 object-cover rounded-2xl"
        />
        <p className="mx-2 text-black opacity-80">{name.split(" ", 1)}</p>
      </div>
    </div>
  );
};

export default ChatText;
