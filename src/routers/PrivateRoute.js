import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";
import { QuestionsAnsweredProvider } from "../context/QuestionsAnswered";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userName } = useContext(UserNameContext);
  return (
    <Route {...rest}>
      {userName ? (
        <QuestionsAnsweredProvider>
          <Component />
        </QuestionsAnsweredProvider>
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default PrivateRoute;
