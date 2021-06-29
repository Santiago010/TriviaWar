import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";
import RandomQuestions from "../helpers/RandomQuestions";
import "./style/Categories.css";

const Categories = () => {
  const { userName } = useContext(UserNameContext);

  return (
    <div className="categories">
      <div className="categories__container">
        <h1>{userName} escoge una categoria para tu trivia...</h1>
        <nav className="container__list-categories">
          <NavLink to={`/categorySelected/music?q=${RandomQuestions(0, 0)}`}>
            Musica
          </NavLink>
          <NavLink
            to={`/categorySelected/programming?q=${RandomQuestions(0, 0)}`}
          >
            Programacion
          </NavLink>
          <NavLink to={`/categorySelected/movies?q=${RandomQuestions(0, 0)}`}>
            Películas
          </NavLink>
          <NavLink to={`/categorySelected/history?q=${RandomQuestions(0, 0)}`}>
            Historia
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Categories;
