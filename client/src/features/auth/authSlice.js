import { useState, useEffect } from "react";
import { checkUser, createUser, loginUser } from "./authAPI";

const useAuth = () => {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [status, setStatus] = useState("idle");

  // Function to create a new user
  const createUserAsync = async (user) => {
    setStatus("loading");
    try {
      const response = await createUser(user);
      setLoggedinUser(response.data);
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setLoginError(err);
      setStatus("idle");
    }
  };

  // Function to log in an existing user
  const loginUserAsync = async (user) => {
    setStatus("loading");
    try {
      const response = await loginUser(user);
      setLoggedinUser(response.data);
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setLoginError(err);
      setStatus("idle");
    }
  };

  // Function to check if a user is logged in
  const checkUserAsync = async () => {
    setStatus("loading");
    try {
      const response = await checkUser();
      setLoggedinUser(response.data);
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setLoginError(err);
      setStatus("idle");
    }
  };

  // UseEffect to check if the user is logged in when the component mounts
  useEffect(() => {
    checkUserAsync();
  }, []);

  return {
    loggedinUser,
    loginError,
    status,
    createUserAsync,
    loginUserAsync,
    checkUserAsync,
  };
};

export default useAuth;
