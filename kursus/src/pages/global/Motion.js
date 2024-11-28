import React, { useState } from 'react'
import { Motion } from '@capacitor/motion';

let accelHandler;

function Movement() {
  const [motion, setMotion] = useState({});
  
  const startMotion = async () => {
    accelHandler = await Motion.addListener('accel', event => {
      setMotion(
        `Device motion event:
        X: ${event.accelerationIncludingGravity.x.toFixed(3)}
        Y: ${event.accelerationIncludingGravity.y.toFixed(3)}
        Z: ${event.accelerationIncludingGravity.z.toFixed(3)}`
      );
     
        setImageLeft(event.acceleration.x * 500);
    });
  };

  // acceleration --> m/s: kui palju telefoni tõmbad vasakult paremale. 
  // liigutad telefoni järsu liigutusega paremale -> pilt liigub. väga suur vahe kui järsk liigutus
  // ei liiguta üldse, aga telefon on endiselt kalde all -> pilt läheb algseisu
  //          ehk jääb keskele, sealt kust alustasid

  // accelerationIncludingGravity --> ei mõõda kiirust või tõmmet, vaid telefoni kallet
  // liigutad telefoni järsu liigutusega paremale -> pilt liigub. aga pole vahet kui järsk
  // ei liiguta üldse, aga telefon on endiselt kalde all -> pilt jääb paremale

  const [imageLeft, setImageLeft] = useState(200);

  return (
    <div>
      {accelHandler === undefined && <button onClick={startMotion}>Start motion</button>}
      <img src="/marker.png" style={{width: "70px", position: "absolute", left: imageLeft}} alt="" />
      <div>{JSON.stringify(motion)}</div>
    </div>
  )
}

export default Movement