import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Categories from "../pages/Categories";
import Home from "../pages/Home";
import PrivateRouteUsers from "./PrivateRoute";
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

      <PrivateRouteUsers exact path="/categories" component={Categories} />
      <QuestionsAnsweredProvider>
        <PrivateRouteUsers
          exact
          path="/categorySelected/:category"
          component={SelectedCategory}
        />
        <PrivateRouteUsers
          exact
          path="/congratulations"
          component={Congratulations}
        />
        <Route path="*" component={NotFound} />
      </QuestionsAnsweredProvider>
    </Switch>
  </Router>
);

export default MainRoute;
