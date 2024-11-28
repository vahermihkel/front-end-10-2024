import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedJSON from "../data/tooted.json";

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedJSON[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const navigate = useNavigate();

  // React Hook --> reacti erikood
  // 1. alati imporditud
  // 2. alati "use" eesliides
  // 3. funktsionaalsed -> nad on sulgudega välja kutsutud
  // 4. ei tohi olla funktsiooni sees loodud
  // 5. ei tohi olla tingimuslikult loodud
  // 6. hooke uuesti ei tehta renderdusega, aga kõike muud tehakse

  const muuda = () => {
    const muudetudToode = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }
    tootedJSON[index] = muudetudToode;
    navigate("/halda");
  }  

  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <label>Nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      <label>Hind</label> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind} /> <br />
      <label>Pilt</label> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt} /> <br />
      <label>Aktiivne</label> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode