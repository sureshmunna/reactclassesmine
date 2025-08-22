import React, { useRef, useState } from "react";
import koikoi from "../assets/vedio/Runningmantelepothygame.mp4";
const Song = () => {
  let videoref = useRef();
  let [play, setPlay] = useState(false);
  let playPause = () => {
    setPlay(!play);
    if (play) {
      videoref.current.pause();

    }
    else{
        videoref.current.play();
    }
  }
  return(
    <>
    <video src={koikoi} ref={videoref} style={{height:"400px",width:"400px"}}></video>
    <button onClick={playPause}>{play?"pause":"play"}</button>
    </>
  )
};
export default Song;
