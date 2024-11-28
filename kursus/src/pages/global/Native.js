import React, { useState } from 'react'
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Motion } from '@capacitor/motion';

// let accelHandler;

function Native() {
  const [picture, setPicture] = useState({});
  const [location, setLocation] = useState({});
  const [motion, setMotion] = useState({});

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    setLocation(coordinates);
  };

  const takePicture = async () => {
    if (Capacitor.getPlatform() === "web") {
      return;
    }

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;
  
    // Can be set to the src of an image now
    setPicture(imageUrl);
  };


  const startMotion = async () => {
    // try {
    //   await DeviceMotionEvent.requestPermission();
    // } catch (e) {
    //   // Handle error
    //   setMotion(e);
    //   return;
    // }

    // Once the user approves, can start listening:
    // accelHandler = 
    await Motion.addListener('accel', event => {
      setMotion(
        `Device motion event:
        X: ${event.acceleration.x.toFixed(3)}
        Y: ${event.acceleration.y.toFixed(3)}
        Z: ${event.acceleration.z.toFixed(3)}`
      );
    });
  };

// // Stop the acceleration listener
// const stopAcceleration = () => {
//   if (accelHandler) {
//     accelHandler.remove();
//   }
// };

// // Remove all listeners
// const removeListeners = () => {
//   Motion.removeAllListeners();
// };

  return (
    <div>
      <div>Platvorm: {Capacitor.getPlatform()}</div>

      <br /><br />
      <button onClick={takePicture}>Picture</button>
      <div>{JSON.stringify(picture)}</div>

      <br /><br />
      <button onClick={printCurrentPosition}>Geolokatsioon</button>
      <div>{JSON.stringify(location)}</div>

      <button onClick={startMotion}>Start motion</button>
      <div>{JSON.stringify(motion)}</div>
    </div>
  )
}

export default Native