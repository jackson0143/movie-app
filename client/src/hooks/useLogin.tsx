import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5050/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok){
        //save user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        //update auth context
        dispatch({type:'LOGIN', payload: json})
        setIsLoading(false)
    }
  };


  return {login, isLoading, error}
};
