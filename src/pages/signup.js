// components
import AuthComponent from "components/AuthComponent";
// datas
import { SIGNUP_INPUTS } from "datas";

function signup() {
  return (
    <AuthComponent
      type="signup"
      headerText="ثبت نام"
      inputsArray={SIGNUP_INPUTS}
      buttonText="ثبت نام"
    />
  );
}

export default signup;
