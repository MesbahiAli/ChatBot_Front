import { useDispatch } from "react-redux";
//import LoginForm from "./LoginForm";
import LoginForm from "../components/loginForm";
//import { loginRequest } from "../redux/actions/auth";
import { loginRequest } from "../actions/auth";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginRequest(values));
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginContainer;
