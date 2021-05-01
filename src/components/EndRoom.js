

export const EndRoom =({endDisplay,setEndDisplay})=>{
  return(
    <div className="end-room-wrapper" style={{height:"auto",display:endDisplay}}>
      <p>End this conversation?</p>
      <label><input type="checkbox" />Save this chat</label>
      <button onClick={()=>setEndDisplay("none")}>End</button>
    </div>
  )
}