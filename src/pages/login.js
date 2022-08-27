// components
import AuthComponent from "components/auth-page/AuthComponent";
import Meta from "components/Meta";
// datas
import { LOGIN_INPUTS } from "datas";

function login() {
  return (
    <>
      <Meta title="پاناک | ورود" />
      <AuthComponent
        type="login"
        headerText="ورود"
        inputsArray={LOGIN_INPUTS}
        buttonText="ورود"
      />
    </>
  );
}

export default login;
