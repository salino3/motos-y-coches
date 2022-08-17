import getTipoVehiculo from '../helpers/getTipoVehiculo';
import Card from './Card';

const MotoOnly = () => {

      let myTipo = getTipoVehiculo("moto"); 

  return (
    <>
    <div>Moto Only</div>
       {myTipo && myTipo.map((item: any) =>(

 <Card key={item.id} {...item}  />
     ))}
 </>
  )
}

export default MotoOnly