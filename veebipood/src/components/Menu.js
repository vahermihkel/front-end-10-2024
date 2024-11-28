import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <Link to="/">
        <button className="nupp">Avalehele</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="/seaded">   
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/halda">   
        <button className="nupp">Halda</button>
      </Link>

      <Link to="/tooted">   
        <button className="nupp">Tooted</button>
      </Link>
    </div>
  )
}

export default Menu