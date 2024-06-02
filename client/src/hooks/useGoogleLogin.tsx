import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios'


export const useGoogleLoginFunction = () => {
const [ user, setUser ] = useState();

const {dispatch} = useAuthContext()


  const loginUsingGoogle =  useGoogleLogin({
    onSuccess: async (tokenResponse) => {

      const userInfo = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`,
        { headers: { Authorization: 'Bearer <tokenResponse.access_token>' } },
      );
    const userInfoData = userInfo.data
        userInfoData['token'] = tokenResponse.access_token
      setUser(userInfoData);
      console.log(userInfoData.picture)


    },
    onError: errorResponse => console.log(errorResponse),
  });

    


  if (user){
      //add token to user

      //save user to local storage
      localStorage.setItem('user', JSON.stringify(user))

      //update auth context
      dispatch({type:'LOGIN', payload: user})
   
  }
  

  return {loginUsingGoogle};
};



