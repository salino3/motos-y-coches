import React from 'react'
import { Link } from 'react-router-dom';

const PrimerComponente = () => {
  return (
    <>
      <h1>PrimerComponente</h1>
      <Link to='loginpage'>
        <button>Login</button>
      </Link>
    </>
  );
}

export default PrimerComponente