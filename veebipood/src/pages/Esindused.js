import React, { useState } from 'react'

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
      <button className={linn === "Tallinn" ? "linn-valitud" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-valitud" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-valitud" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-valitud" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
      <>
        <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
      </>}

      {linn === "Tartu" &&
      <>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused