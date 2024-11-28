//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
// import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import HaldaTooted from './pages/HaldaTooted';
import Tooted from './pages/Tooted';
import YksToode from './pages/YksToode';
import MuudaToode from './pages/MuudaToode';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="App">

      {/* <Menu /> */}
      <Navigationbar />

{/* localhost:3000/osta-kinkekaart
    localhost:3000/ostukorv
*/}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="esindused" element={ <Esindused /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="halda" element={ <HaldaTooted /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="toode/:toodeNimi" element={ <YksToode /> } />
        <Route path="muuda-toode/:index" element={ <MuudaToode /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
