const ChatText = ({ userId, userProfileImg, text, userName }) => {
  const currentUserId = 3;
  return (
    <div>
      <div
        class={
          userId === currentUserId
            ? "talk-bubble tri-right round btm-right"
            : "talk-bubble tri-right round btm-left"
        }
      >
        <div class="talktext">
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
          src={userProfileImg}
          alt="profile-image"
          className="h-10 w-10 object-cover rounded-2xl"
        />
        <p className="mx-2 text-black opacity-80">{userName}</p>
      </div>
    </div>
  );
};

export default ChatText;
