import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrimerComponente from '../components/PrimerComponente'
import LoginPage from './LoginPage';

const LogoutPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrimerComponente />} />
        <Route path="loginpage/*" element={<LoginPage />}>

          {/* <Route path={`:año`} element={<InfoAutoOnly />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default LogoutPage