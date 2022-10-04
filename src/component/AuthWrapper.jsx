import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AuthWrapper({ children }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      const authData = JSON.parse(localStorage.getItem("auth"));
      if (!authData?.access_token) {
        navigate("/");
      }
    }
  }, [pathname]);

  return <div>{children}</div>;
}

export default AuthWrapper;
