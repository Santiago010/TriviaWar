import React, { useContext } from "react";
import { UserNameContext } from "../context/UserNameContext";
import { useHistory, useLocation } from "react-router-dom";
import iconQuestions from "../images/iconQuestions.svg";
import "./style/Home.css";

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  const { userName, setUserName } = useContext(UserNameContext);

  const toggleUsername = () => {
    setUserName(userName);
    history.push({
      pathname: "/categories",
      state: location.pathname,
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="container__image">
          <img src={iconQuestions} alt="" />
        </div>
        <h1>
          ¡Bienvenido a TriviaWar¡ <br />
          el juego de trivia mas desafiante del mundo <br /> escribe tu nombre
          para continuar...
        </h1>
        <div className="home__container-input">
          <input
            autoComplete="off"
            type="text"
            name="username"
            maxLength="20"
            value={userName}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                toggleUsername();
              }
            }}
            onChange={(ev) => {
              setUserName(ev.target.value);
            }}
            id=""
          />
          {userName && (
            <button onClick={() => toggleUsername()}>
              ¡a darle {userName}¡
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
