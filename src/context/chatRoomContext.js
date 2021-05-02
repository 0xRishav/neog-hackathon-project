import { createContext,useState ,useContext,useEffect} from "react";
import {  db } from "../firebase";
import { useParams } from "react-router-dom";

const RoomContext = createContext();

export function RoomProvider({children}){

  const [room, setRoom] = useState({});
  const {roomId} = useParams();

  (async()=>{
    try{
      const result = await db.collection("chatRooms").doc(roomId).get();
      setRoom(result.data());
    }
    catch(err){
      console.log(err.message);
    }

  })();
  
  return <RoomContext.Provider value={{room,setRoom,roomId}}>
    {children}
    </RoomContext.Provider>
}
export function useRoom(){
  return useContext(RoomContext)
}