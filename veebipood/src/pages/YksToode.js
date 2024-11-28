import React from 'react'
import { useParams } from 'react-router-dom'
import tootedJSON from "../data/tooted.json";

function YksToode() {
  // <Route path="toode/:toodeNimi" element={ <YksToode /> } />
  const {toodeNimi} = useParams(); // {"toodeNimi": "Mercedes"}
  // object destructuring --> { toodeNimi }
  const leitud = tootedJSON.find(toode => toode.nimi.toLowerCase().replaceAll("õ", "o").replaceAll(" ", "-") === toodeNimi);


  //  const params = useParams(); // {"toodeNimi": "Mercedes"}
  //  const leitud = tootedJSON.find(toode => toode.nimi === params.toodeNimi);

  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <h2>{leitud.nimi}</h2>
      <hr />
      <span style={{backgroundColor: "lightgray"}}>{leitud.hind}€</span>
      <img src={leitud.pilt} alt="" />
    </div>
  )
}

export default YksToode