import React from 'react';
import {  Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav bg-dark text-white p-2 mb-2">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/loginpage"
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="showall"
          >
            Show alls
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="motos"
          >
            Motos
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="autos"
          >
            Autos
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link  btnout" to="/">
            <button className="btn btn-primary">Logout</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar