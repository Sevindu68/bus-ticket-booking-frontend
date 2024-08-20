import { Route, Redirect } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { userRole } = useUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        allowedRoles.includes(userRole) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
