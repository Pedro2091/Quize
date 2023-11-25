import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Credits.css";

const Credits = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="pai">
      <div>
        <div id="question" 
          style={{
            display: "flex", 
            flexDirection: "column",
            justifyContent:"center", 
            alignItems: "center",
            gap: "2em"
          }}
        >
          <h1>Quize</h1>
          {/* <h6>Leia a questão e clique na resposta correta.</h6> */}
          <div>
            <div id="pergunta">
              <div id="number">
                <img width="30px" src="https://images.emojiterra.com/twitter/v13.1/512px/1f43a.png"/>
              </div>
              <h3>Cassio Araujo</h3>
            </div>
            <div id="pergunta">
              <div id="number">
                <img width="30px" src="https://cdn-icons-png.flaticon.com/512/235/235359.png"/>
              </div>
              <h3>Paulo Werneck</h3>
            </div>
            <div id="pergunta">
              <div id="number">
                <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Emoji_u1f989.svg/2048px-Emoji_u1f989.svg.png"/>
              </div>
              <h3>Pedro Oliveira</h3>
            </div>
            <div id="pergunta">
              <div id="number">
                <img width="30px" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Rabbit_Face_Emoji_large.png?v=1571606065"/>
              </div>
              <h3>Yara Silvestre</h3>
            </div>
          </div>
        </div>
        <div id="quantidade-pergunta">
          <p style={{fontWeight: "550"}}>
            8° Período CPU - Unincor
          </p>
        </div>
        
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Voltar</button>
      </div>
    </div>
  );
};

export default Credits;
