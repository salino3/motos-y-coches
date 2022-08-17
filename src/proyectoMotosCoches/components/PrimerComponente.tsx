import React from 'react'
import { Link } from 'react-router-dom';

const PrimerComponente = () => {
  return (
    <>
      <div className="m-5 ">
        <h1 className="animate__animated animate__lightSpeedInLeft mb-3 text-warning">
          PrimerComponente
        </h1>
        <Link to="loginpage">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </>
  );
}

export default PrimerComponente