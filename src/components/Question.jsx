import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  console.log(quizState.optionToHide);
  
  return (
    <div id="pai">
      <div>
        <div id="question">
          <h1>Quize</h1>
          <h6>Leia a questão e clique na resposta correta.</h6>
          <div id="pergunta">
            <div id="number">{quizState.currentQuestion + 1}</div>
            <h3>{currentQuestion.question}</h3>
          </div>
          <div id="imagem-pergunta">
            { currentQuestion.image &&
              <img src={currentQuestion.image} alt="" width="200" height="auto"/>
            }
          </div>

          <div id="options-container">
            {currentQuestion.options.map((option) => (
              <Option
                option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                hide={quizState.optionToHide === option ? "hide" : null}
              />
            ))}
          </div>
          {quizState.answerSelected && (
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
              Continuar
            </button>
          )}
        </div>
        <div id="quantidade-pergunta">
          <p style={{fontWeight: "550"}}>
            Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
