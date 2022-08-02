// components
import AuthComponent from "components/AuthComponent";
// datas
import { LOGIN_INPUTS } from "datas";

function login() {
  return (
    <AuthComponent
      type="login"
      headerText="ورود"
      inputsArray={LOGIN_INPUTS}
      buttonText="ورود"
    />
  );
}

export default login;
