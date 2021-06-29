import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userName } = useContext(UserNameContext);
  return (
    <Route {...rest}>{userName ? <Component /> : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
