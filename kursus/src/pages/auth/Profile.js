import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext'

function Profile() {
  const {user, setUser} = useContext(AuthContext);
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" + process.env.REACT_APP_WEB_API_KEY;
  const nameRef = useRef();
  const photoRef = useRef();

  function update() {
    const payload = {
      idToken: sessionStorage.getItem("token"),
      displayName: nameRef.current.value,
      photoUrl: photoRef.current.value,
      deleteAttribute: [],
      returnSecureToken: false
    }

    fetch(url, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}})
            .then(res => res.json())
            .then(json => {
                setUser(json);
            });
  }

  return (
    <div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" defaultValue={user.displayName} /> <br />
      <label>Photo URL</label> <br />
      <input ref={photoRef} type="text" defaultValue={user.photoUrl} /> <br />
      <button onClick={update}>Update your profile</button>
    </div>
  )
}

export default Profile