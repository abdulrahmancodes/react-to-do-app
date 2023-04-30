import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactFacebookLogin from "react-facebook-login";

const SignIn = () => {
  const navigate = useNavigate();

  const responseFacebook = useCallback((response) => {
    localStorage.setItem("userDetails", JSON.stringify(response));
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("userDetails");

    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="sign-in-container">
      <ReactFacebookLogin
        appId="628144709171934"
        autoLoad={true}
        fields="name,email,picture"
        cssClass="facebook-login"
        callback={responseFacebook}
        textButton="Login with Facebook"
      />
    </div>
  );
};

export default SignIn;
