import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext()
  const base_url = import.meta.env.VITE_BASE_URL
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(base_url+"/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log(json)

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
