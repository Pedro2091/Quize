import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import "./App.css";

function App() {
  const [quizState] = useContext(QuizContext);
  // const [audio, setAudio] = useState(new Audio('src/assets/music.mp3'))

  // var audio = new Audio('src/assets/music.mp3');

  // useEffect(()=>{
    // audio.play();
  // })

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
