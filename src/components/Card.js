import React from "react";

import "./style/Card.css";

const Card = ({ question, answers, handleToggleQuestions }) => {
  return (
    <div className="card">
      <h1 className="card__question">{question}</h1>
      <div className="card__answer">
        {answers.map((answer, index) => (
          <div key={index} onClick={(ev) => handleToggleQuestions(ev)}>
            {index + 1}). {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
