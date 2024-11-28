import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.REACT_APP_WEB_API_KEY;
    const emailRef = useRef();
    const passwordRef = useRef();
    const {setLoggedIn, findUser} = useContext(AuthContext);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function register() {
        const user = {
            "email": emailRef.current.value,
            "password": passwordRef.current.value,
            "returnSecureToken": true
        }

        fetch(url, {method: "POST", body: JSON.stringify(user), headers: {"Content-Type": "application/json"}})
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    setMessage(json.error.message);
                } else {
                    setLoggedIn(true);
                    sessionStorage.setItem("token", json.idToken);
                    navigate("/admin");
                    findUser();
                }
            });
    }

    return (
        <div>
            <div>{message}</div>
            <label>Email</label> <br />
            <input ref={emailRef} type="text" /> <br />
            <label>Password</label> <br />
            <input ref={passwordRef} type="password" /> <br />
            <button onClick={register}>Sign Up</button>
        </div>

)
    ;
}

export default Signup;