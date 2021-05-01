import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export const CreateRoomForm = ({ formDisplay, setFormDisplay }) => {
  const [userName, setUserName] = useState("");
  const [topic, setTopic] = useState("");
  const { usersDb } = useUser();
  const navigate = useNavigate();

  function addUser(e) {
    e.preventDefault();
    console.log("adding user....");
    usersDb.push({ name: userName, userName: `@${userName}`, topic: topic });
  }

  return (
    <div
      className="form-wrapper"
      style={{ height: "auto", display: formDisplay }}
    >
      <form onSubmit={addUser} className="form-wrapper">
        <div>
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="spaced"
            type="text"
            placeholder="Your Name"
          />
          <br />
          <input
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            className="spaced"
            type="text"
            placeholder="Topic "
          />
        </div>
        <button onClick={() => setFormDisplay("none")}>Create Now !</button>
      </form>
    </div>
  );
};
