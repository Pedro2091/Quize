import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./GameOver.css";

import Finish from "../img/fim.png";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <div id="overgame">
        <img src={Finish} width={"30%"}/>
        <p>Sua pontuação: {quizState.score}</p>
        <p>
          Você acertou {quizState.score} de {quizState.questions.length}{" "}
          perguntas.
        </p>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      </div>
    </div>
  );
};

export default GameOver;
