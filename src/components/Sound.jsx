import { useEffect, useRef } from "react";

const Sound = props => {
  // const audio = useRef(null);

  // useEffect(() => {
  //   // The DOM element is accessible here.
  //   audio.current.play()
  //   console.log(audio.current);
  // }, []);

  return (
    // <audio src='src/assets/music.mp3'></audio>
    // <audio controls autoplay>
    //   <source src="src/assets/music.mp3" type="audio/mpeg"/>
    // </audio>

    // <audio src='src/assets/music.mp3' controls autoPlay/>
    // <>
      {/* <iframe src="src/assets/silence.mp3" allow="autoplay" id="audio"></iframe>
      <audio src='src/assets/music.mp3' controls loop autoPlay/> */}
      {/* <audio autoPlay loop  id="playAudio">
          <source src="src/assets/music.mp3"/>
      </audio> */}
    

    {/* <audio controls autoPlay ref={audio}>
      <source src="src/assets/music.mp3" type="audio/ogg"/>
      <source src="src/assets/music.mp3" type="audio/mpeg"/>
    </audio>
    </> */}
  );
}
export default Sound;