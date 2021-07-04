import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useQuestionsAnswered from "../hooks/useQuestionsAnswered";
import { NoBackButton } from "../helpers/NoBackButton";

import "./style/Congratulations.css";

const Congratulations = () => {
  const answered = useQuestionsAnswered();
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  useEffect(() => {
    NoBackButton();
    setQuestionsCorrect(
      answered.questionsAnswered.filter(
        (q) => q.answer.replace(/ /g, "") === q.correct_answer.replace(/ /g, "")
      ).length
    );
  }, []);

  return (
    <div className="congratulations">
      <header className="congratulations__header">
        <div className="header__questions-correct">
          <b>Preguntas acertadas: </b>
          {questionsCorrect} de {answered.questionsAnswered.length}
        </div>
        <div className="header__markers">
          <div className="markers__containers">
            Las preguntas acertadas se marcaran de color:
            <div className="markers markers__correct"></div>
          </div>
          <div className="markers__containers">
            Las preguntas fallidas se marcaran de color:
            <div className="markers markers__incorrect"></div>
          </div>
        </div>
      </header>
      <main className="congratulations__main">
        <h1>Preguntas:</h1>
        {answered.questionsAnswered.map((q, index) => {
          if (
            q.answer.replace(/ /g, "") === q.correct_answer.replace(/ /g, "")
          ) {
            return (
              <div
                key={index}
                className="main__container-questions main__container-questions--correct"
              >
                <div className="question__question">
                  <b> Pregunta:</b> {q.question}
                </div>
                <div>
                  <b>Respuesta escogida: </b> {q.answer}
                </div>
                <div>
                  <b>Respuesta correcta: </b> {q.correct_answer}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="main__container-questions main__container-questions--incorrect"
              >
                <div className="question__question">
                  <b> Pregunta:</b> {q.question}
                </div>
                <div>
                  <b>Respuesta escogida: </b> {q.answer}
                </div>
                <div>
                  <b>Respuesta correcta: </b> {q.correct_answer}
                </div>
              </div>
            );
          }
        })}
        <Link to="/categories">Categorias</Link>
      </main>
    </div>
  );
};

export default Congratulations;
