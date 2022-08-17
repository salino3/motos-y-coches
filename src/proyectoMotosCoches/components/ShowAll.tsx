import React from 'react'
import getTipoVehiculo from '../helpers/getTipoVehiculo'
import Card from './Card';
import { motosYcoches } from "../data/Info";


const ShowAll = () => {
  // let myTipo = getTipoVehiculo("moto");
  // console.log(myTipo);

 let showAll = motosYcoches;



  return (
    <>
    <div>ShowAll</div>

     {showAll && showAll.map((item: any) =>(

 <Card key={item.id} {...item} 

 
 />
     ))}
  </>
  );
}

export default ShowAll