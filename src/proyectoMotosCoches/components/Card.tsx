import React from 'react';
import { Link } from 'react-router-dom';
import { motosYcoches } from "../data/Info";
import '../styles.css';

interface Props {
  id?: string;
  tipo?: string;
  proprietario?: string;
  año?: number;
}


const Card = ({id, tipo, proprietario, año}: Props) => {

    let rutaImg = `/assets/${id}.jpg`


  return (
    <>
      <div className="divCard">
        <img className="imgCard" src={rutaImg} alt={tipo} />

        <h3>{proprietario}</h3>
        <div>{año}</div>
{/* si la ruta empieza con '/' no aparece el 'nav'  */}
        <Link  to={`card/${id}`}>
          Más informaciones..
        </Link>
      </div>
    </>
  );
}

export default Card