import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactFacebookLogin from "react-facebook-login";

const SignIn = () => {
  const navigate = useNavigate();

  const responseFacebook = useCallback(
    (response) => {
      if (response.status !== "unknown") {
        localStorage.setItem("userDetails", JSON.stringify(response));
        navigate("/");
      }
    },
    [navigate]
  );

  useEffect(() => {
    const user = localStorage.getItem("userDetails");

    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="sign-in-container">
      <ReactFacebookLogin
        appId="628144709171934"
        fields="name,email,picture"
        cssClass="facebook-login"
        scope="pages_manage_posts, pages_read_engagement"
        callback={responseFacebook}
        textButton="Login with Facebook"
        isMobile={false}
      />
    </div>
  );
};

export default SignIn;
