import React, { useRef, useState } from 'react'
import tootedJSON from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedJSON.slice());
  const otsingRef = useRef();

  const kustuta = (index) => {
    tootedJSON.splice(index,1);
    setTooted(tootedJSON.slice());
  }

  const otsi = () => {
    const result = tootedJSON.filter(toode => toode.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase()));
    setTooted(result);
  }

  return (
    <div>
      <input onChange={otsi} ref={otsingRef} type="text" />
      <span>{tooted.length} tk</span>
      <table>
        <thead>
          <tr>
            <th>Nimetus</th>
            <th>Hind</th>
            <th>Pilt</th>
            <th>Aktiivne</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, i) => 
            <tr key={toode.nimi}>
              <td>{toode.nimi}</td>
              <td>{toode.hind}€</td>
              <td><img style={{"width": "50px"}} src={toode.pilt} alt="" /></td>
              <td>{toode.aktiivne + 0}</td>
              <td><button onClick={() => kustuta(i)}>x</button></td>
              <td>
                <Link to={"/muuda-toode/" + i}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted