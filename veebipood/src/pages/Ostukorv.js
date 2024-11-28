import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvJSON from "../data/ostukorv.json";

// Hiljem: Andmebaasi
// Hiljem: LocalStorage-sse array'na

function Ostukorv() {
  const [ostukorv, setOstukorv] = useState(ostukorvJSON.slice());

  const tyhjenda = () => {
    ostukorvJSON.splice(0);
    setOstukorv(ostukorvJSON.slice());
  }

  const kustuta = (index) => {
    ostukorvJSON.splice(index,1);
    setOstukorv(ostukorvJSON.slice());
  }

  const arvutaKokku = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa += toode.hind)
    return summa;
  }

  return (
    <div>
      <button onClick={tyhjenda}>Tühjenda</button>

      {ostukorv.map((toode, index) => 
        <div key={index}>
          <img className="pilt" src={toode.pilt} alt="" />{" "}
          {toode.nimi}{" "}
          {toode.hind}€{" "}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <div>Kokku: {arvutaKokku()} €</div>

      {ostukorv.length === 0 &&
      <React.Fragment>
        <div>Ostukorv on tühi</div>
        <Link to="/osta-kinkekaart">
          <button>Mine lisa kinkekaart</button>
        </Link>
      </React.Fragment>}
    </div>
  )
}

export default Ostukorv