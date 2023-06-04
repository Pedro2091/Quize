import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Logo from "../img/logo.svg";
import Kids from "../img/kids.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="welcome">
      <div id="inicio">
        <img src={Logo} width={"50%"}/>
        <button onClick={() => chooseCategoryAndReorderQuestions("HTML")}>
          Começar
        </button>
        <button>
          Créditos
        </button>
      </div>
      {/* <div id="dialog">
        <img src={Kids}/>
      </div> */}
    </div>
  );
};

export default Welcome;
