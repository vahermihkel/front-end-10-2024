import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
  const [aadress, setAadress] = useState(localStorage.getItem("aadress"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [telefon, setTelefon] = useState(localStorage.getItem("telefon"));
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  // const aadressOtseLS = useMemo(() => {
  //   console.log(email);
  //   return localStorage.getItem("aadress");
  // }, [email]);

  const sisestaAadress = () => {
    if (aadressRef.current.value === "") {
      toast.error("Pead aadressi sisestama!");
      return;
    }

    if (aadressRef.current.value[0] === aadressRef.current.value[0].toLowerCase()) {
      toast.error("Pead aadressi suure tähega panema!");
      return;
    }

    setAadress(aadressRef.current.value);
    toast.success("Aadress sisestatud!");
    localStorage.setItem("aadress", aadressRef.current.value);
  }

  const sisestaEmail = () => {
    if (!emailRef.current.value.includes("@")) {
      toast.error("Emailil jäi @ märk puudu!");
      return;
    }
    setEmail(emailRef.current.value);
    toast.success("Email sisestatud!");
    localStorage.setItem("email", emailRef.current.value);
  }

  const sisestaTelefon = () => {
    if (!telefonRef.current.value.startsWith("+372")) {
      toast.error("Telefonil jäi suunakood algusest puudu!");
      return;
    }
    setTelefon(telefonRef.current.value);
    toast.success("Telefon sisestatud!");
    localStorage.setItem("telefon", telefonRef.current.value);
  }

  return (
    <div>
      {/* <div>OTSE: {aadressOtseLS}</div> */}
      <div>{aadress}</div>
      <div>{email}</div>
      <div>{telefon}</div>

      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={sisestaAadress}>Sisesta</button> <br />
      <br /><br />

      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisestaEmail}>Sisesta</button> <br />
      <br /><br />

      <label>Telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <button onClick={sisestaTelefon}>Sisesta</button> <br />
      <br /><br />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Seaded