import React, { createContext, useCallback, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const url = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + process.env.REACT_APP_WEB_API_KEY;

  // useCallback(
  //   () => {
      
  //   },
  //   [],
  // )
  
  const findUser = useCallback(() => {
    if (sessionStorage.getItem("token") === null) {
      return;
    }

    const payload = {
      "idToken": sessionStorage.getItem("token")
    }

    fetch(url, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}})
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                setLoggedIn(false);
            } else {
                setLoggedIn(true);
                setUser(json.users[0]);
                console.log(json.users[0]);
            }
        });
  }, [url])

  useEffect(() => {
    findUser();
  }, [findUser]);

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, user, setUser, findUser}}>
      {children}
    </AuthContext.Provider>
  )
}