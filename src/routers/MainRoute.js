import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Categories from "../pages/Categories";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import SelectedCategory from "../pages/SelectedCategory";
import { QuestionsAnsweredProvider } from "../context/QuestionsAnswered";
import Congratulations from "../pages/Congratulations";

const MainRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
      <PrivateRoute exact path="/categories" component={Categories} />
      <QuestionsAnsweredProvider>
        <PrivateRoute
          exact
          path="/categorySelected/:category"
          component={SelectedCategory}
        />
        <PrivateRoute
          exact
          path="/Congratulations"
          component={Congratulations}
        />
      </QuestionsAnsweredProvider>
      <Route path="/404" component={NotFound} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  </Router>
);

export default MainRoute;
