// rfce
import React, { useState } from 'react'
import tootedJSON from "../data/tooted.json";
import ostukorvJSON from "../data/ostukorv.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, setTooted] = useState(tootedJSON.slice());

  const reset = () => {
    setTooted(tootedJSON.slice());
    //setTooted([...tootedJSON]); // chatGPT <--- niimoodi mälukohta kustutada
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice()); // .slice --> kustutab mälukoha
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setTooted(tooted.slice());
  }

  const sorteeriTahedKasv = () => {
    tooted.sort((a,b) => a.nimi.length - b.nimi.length);
    setTooted(tooted.slice());
  }

  const sorteeriTahedKah = () => {
    tooted.sort((a,b) => b.nimi.length - a.nimi.length);
    setTooted(tooted.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    tooted.sort((a,b) => b.nimi[2].localeCompare(a.nimi[2]));
    setTooted(tooted.slice());
  }

  const filtreeriALopus = () => {
    const result = tootedJSON.filter(toode => toode.nimi.endsWith("a"));
    setTooted(result);
  }

  const filtreeriKelVah5Tahte = () => {
    const result = tootedJSON.filter(toode => toode.nimi.length >= 5);
    setTooted(result);
  }

  const filtreeriKellel6Tahte = () => {
    const result = tootedJSON.filter(toode => toode.nimi.length === 6);
    setTooted(result);
  }

  const filtreeriSisaldabLyhenditBe = () => {
    const result = tootedJSON.filter(toode => toode.nimi.toLowerCase().includes("be"));
    setTooted(result);
  }

  const filtreeriKellelOn3sTahtS = () => {
    const result = tootedJSON.filter(toode => toode.nimi[2] === "s");
    setTooted(result);
  }

  const lisaOstukorvi = (lisatavToode) => {
    ostukorvJSON.push(lisatavToode);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>

      <br /><br />

      <button onClick={filtreeriALopus}>Filtreeri kellel on 'a' lõpus</button>
      <button onClick={filtreeriKelVah5Tahte}>Filtreeri kellel vähemalt 5 tähte</button>
      <button onClick={filtreeriKellel6Tahte}>Filtreeri kellel on täpselt 6 tähte</button>
      <button onClick={filtreeriSisaldabLyhenditBe}>Filtreeri kellel lühend 'be'</button>
      <button onClick={filtreeriKellelOn3sTahtS}>Filtreeri kellel 3-s täht 's'</button>
      
      <br /><br />

      <button onClick={reset}>Reset</button>

      <br /><br />

      {tooted.map(toode => 
        <div key={toode.nimi}>
          <Link to={"/toode/" + toode.nimi.toLowerCase().replaceAll("õ", "o").replaceAll(" ", "-")}>
            <img className={toode.aktiivne ? "pilt" : "pilt mitteaktiivne"} src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind}€</div>
          </Link>
          <button disabled={!toode.aktiivne} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted