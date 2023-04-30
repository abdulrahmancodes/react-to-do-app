import React from "react";
import ReactFacebookLogin from "react-facebook-login";

const SignIn = () => {
  const responseFacebook = (response) => {
    console.log({ response });
  };

  return (
    <div className="sign-in-container">
      <ReactFacebookLogin
        appId="628144709171934"
        // autoLoad={true}
        fields="name,email,picture"
        cssClass="facebook-login"
        callback={responseFacebook}
        textButton="Login with Facebook"
      />
    </div>
  );
};

export default SignIn;
