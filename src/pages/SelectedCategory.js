import React, { useEffect, useState, Fragment, useContext } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import RandomQuestions from "../helpers/RandomQuestions";
import Countdown from "../helpers/Countdown";
import useQuestionsAnswered from "../hooks/useQuestionsAnswered";
import "./style/SelectedCategory.css";
import { db } from "../firebase";

const SelectedCategory = () => {
  const contextUsername = useContext(UserNameContext);
  const [questions, setQuestions] = useState(null);
  const [countdown, setCountdown] = useState("30");
  const [modal, setModal] = useState(false);
  const { category } = useParams();
  const location = useLocation();
  const history = useHistory();
  const answered = useQuestionsAnswered();
  const query = new URLSearchParams(location.search);
  let timerUpdate;

  const fetchData = async () => {
    try {
      const data = await fetch(`http://localhost:4040/${category}`);
      const res = await data.json();
      return res;
    } catch (error) {
      return error;
    }
  };

  const getQuestions = async () => {
    const querySnapshot = await db.collection(category).get();
    let arrayQuestions = [];
    querySnapshot.forEach((doc) => {
      arrayQuestions.push(doc.data());
    });
    setQuestions(arrayQuestions);
  };

  const handleTimerUpdate = () => {
    let now = new Date();
    now.setSeconds(now.getSeconds() + 30);
    timerUpdate = setInterval(() => {
      setCountdown(Countdown(now));
    }, 1000);
  };

  const toggleAnswered = (answerParamns) => {
    answered.setQuestionsAnswered([
      ...answered.questionsAnswered,
      {
        question: questions[query.get("q")].question,
        answer: answerParamns,
        correct_answer: questions[query.get("q")].correct_answer,
      },
    ]);
    if (questions.length !== 1) {
      setQuestions(
        questions.filter(
          (q) => q.question !== questions[query.get("q")].question
        )
      );
      query.set("q", RandomQuestions(questions.length - 2, 0));
      history.push({ search: query.toString() });
    } else {
      history.push({ pathname: "/Congratulations" });
    }
  };

  const addQuestions = async (question) => {
    await db.collection(category).doc().set(question);
  };

  useEffect(() => {
    // fetchData().then((res) => {
    //   res.forEach((q) => addQuestions(q));
    // });
    getQuestions();
  }, []);

  useEffect(() => {
    if (parseInt(countdown) <= 0) {
      setModal(true);
      toggleAnswered("");
      setTimeout(() => {
        setModal(false);
      }, 1000);
    }
  }, [countdown]);

  useEffect(() => {
    handleTimerUpdate();
    return () => {
      clearInterval(timerUpdate);
    };
  }, [questions]);

  const onCloseModal = () => {
    setModal(false);
  };

  const handleToggleQuestions = (ev) => {
    toggleAnswered(ev.target.innerText.split(".")[1]);
  };

  return (
    <div className="selected-category">
      {!questions ? (
        <Loader />
      ) : (
        <Fragment>
          <header className="selected-category__header">
            <div className="header__username">
              {contextUsername.userName} estas respondiendo preguntas de la
              categoria: <b>{category}</b>
            </div>
            <div className="header__info">
              Pregunta numero: <b>{questions.length}</b>
            </div>
            <div className="header__info">
              Tiempo restante: <b>{countdown}s</b>
            </div>
          </header>
          <Card
            question={questions[query.get("q")].question}
            answers={questions[query.get("q")].answers}
            correct_answer={questions[query.get("q")].correct_answer}
            handleToggleQuestions={handleToggleQuestions}
          />
          {modal && (
            <Modal onClose={onCloseModal}>
              <p className="paragraph-danger-questions">
                ¡UPS! se acabo el tiempo
              </p>
            </Modal>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default SelectedCategory;
