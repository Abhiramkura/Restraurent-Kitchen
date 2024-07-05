import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    return <Redirect to="/kitchenlogin" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
