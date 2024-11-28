import React, { useRef, useState } from 'react'
import tootedJSON from "../data/tooted.json";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const nimiRef = useRef();

  const lisa = () => {
    setSonum("Toode lisatud: " + nimiRef.current.value);
    tootedJSON.push(nimiRef.current.value);
  }

  const kontrolli = () => {
    if (nimiRef.current.value === "") {
      setSonum("Pead midagi sisestama!");
      setButtonDisabled(true);
      return;
    }
    if (nimiRef.current.value[0] === nimiRef.current.value[0].toLowerCase()) {
      setSonum("Esimene täht peab olema suur!");
      setButtonDisabled(true);
      return;
    }
    setButtonDisabled(false);
  }
  
  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input data-testid="input" onChange={kontrolli} ref={nimiRef} type="text" /> <br />
      <button disabled={buttonDisabled} onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode