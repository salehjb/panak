// components
import AuthComponent from "components/AuthComponent";
import Meta from "components/Meta";
// datas
import { SIGNUP_INPUTS } from "datas";

function signup() {
  return (
    <>
      <Meta title="پاناک | ثبت نام" />
      <AuthComponent
        type="signup"
        headerText="ثبت نام"
        inputsArray={SIGNUP_INPUTS}
        buttonText="ثبت نام"
      />
    </>
  );
}

export default signup;
