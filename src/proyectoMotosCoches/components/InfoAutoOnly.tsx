import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import getTipoVehiculo from '../helpers/getTipoVehiculo';

interface Props {
  id: string;
  tipo: string;
  proprietario: string;
  año: number;
}



const InfoAutoOnly = () => {

    const {id}  = useParams<any>();
// const auto = getTipoVehiculo(id);
 const item: any = getTipoVehiculo(id);
 //*  usando  useMemo() 
  // const {item}: any = useMemo<any>(() => getTipoVehiculo(id), [id]); 

 

  return (
    <>
      <h1>InfoAutoOnly</h1>
      {/* {JSON.stringify(coche.proprietario)}
      {coche.proprietario} */}

      <p> {item.proprietario}</p>
      {id}
     
    </>
  );
}

export default InfoAutoOnly