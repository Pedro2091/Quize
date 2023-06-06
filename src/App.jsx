import { useContext,  useEffect,  useState } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import Credits from "./components/Credits";


import "./App.css";
import Sound from "./components/Sound";

function App() {
  const [quizState] = useContext(QuizContext);
  const [audio, setAudio] = useState(new Audio('src/assets/music.mp3'))

  // var audio = new Audio('src/assets/music.mp3');

  // useEffect(()=>{
  //   console.log("oi")
  //   audio.play();
  //   audio.volume = 0.4
  //   audio.loop = true;
  // })

  console.log(quizState.gameStage)


  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      {quizState.gameStage === "Credits" && <Credits />}
      <Sound/>
    </div>
  );
}

export default App;
