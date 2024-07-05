import { Route, Switch } from "react-router-dom";

import KitchenHomePage from "./components/KitchenHomePage";
import KitchenLoginPage from "./components/KitchenLoginPage";
import KitchenSignUp from "./components/KitchenSignUp";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/kitchenlogin" component={KitchenLoginPage} />
    <ProtectedRoute exact path="/" component={KitchenHomePage} />
    <Route exact path="/kitchensignup" component={KitchenSignUp} />
  </Switch>
);

export default App;
