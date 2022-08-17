import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AutoOnly from '../components/AutoOnly';
import InfoAutoOnly from '../components/InfoAutoOnly';
import MotoOnly from '../components/MotoOnly';
import SegundoComponente from '../components/SegundoComponente';
import ShowAll from '../components/ShowAll';
//import TryAuto from '../components/TryAuto';
import Navbar from './Navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SegundoComponente />} />
        <Route path="showall" element={<ShowAll />} />
        <Route path="motos" element={<MotoOnly />} />
        <Route path="autos" element={<AutoOnly variable={"coche"} />} />
          <Route path="card/:id" element={<InfoAutoOnly />} />
      </Routes>
    </>
  );
}

export default LoginPage