import React, { createContext, useState } from "react";

export const QuestionsAnsweredContext = createContext([]);

export const QuestionsAnsweredProvider = ({ children }) => {
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  return (
    <QuestionsAnsweredContext.Provider
      value={{ questionsAnswered, setQuestionsAnswered }}
    >
      {children}
    </QuestionsAnsweredContext.Provider>
  );
};

export default QuestionsAnsweredProvider;
