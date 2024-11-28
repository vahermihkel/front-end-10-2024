import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import ChangeView from './ChangeView';
import useFetch from '../hooks/useFetch';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  // const shop1 = {name: "Kristiine keskus", lat: 59.4262, long: 24.722};
  // const shop2 = {name: "Viru keskus", lat: 59.4362, long: 24.7554};
  // const shop3 = {name: "Ülemiste keskus", lat: 59.422, long: 24.792};

  const [shops, setShops] = useState([]);
  const [centerZoom, setCenterZoom] = useState({center: [59.4362, 24.7554], zoom: 12});       

  const {items, loading} = useFetch(process.env.REACT_APP_DB_SHOPS_URL);

  useEffect(() => {
      if (loading) {
          return;
      }
      console.log(items);
      setShops(items);
  }, [items, loading]);

  // if (shops.length === 0) {
  //   return <div>Poode hetkel pole</div>
  // }

  return(
    <div>
      <button onClick={() => setCenterZoom({center: [59.4362, 24.7554],zoom: 12})}>Kõik poed</button>
      {shops.map(shop => <button onClick={() => setCenterZoom({center: [shop.lat, shop.long],zoom: 13})}>{shop.name}</button>)}

      <MapContainer style={{height: "300px"}} center={[59.4362, 24.7554]} zoom={12} scrollWheelZoom={false}>
        <ChangeView center={centerZoom.center} zoom={centerZoom.zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map(shop => 
        <Marker position={[shop.lat, shop.long]}>
          <Popup>
            Tema kirjeldus. <br /> 
            <a 
            target='_blank' 
            rel="noreferrer" 
            href="https://www.google.com/maps?cid=9504779286209307894">
              Aadress
            </a>
          </Popup>
        </Marker>)}
      </MapContainer>
    </div>
  )
}

export default Map