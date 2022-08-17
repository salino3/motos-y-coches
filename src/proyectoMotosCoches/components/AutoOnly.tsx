import getTipoVehiculo from "../helpers/getTipoVehiculo";
import Card from "./Card";


interface Props {
    variable: any
}


const AutoOnly = ({variable}: Props) => {



     let myTipo = getTipoVehiculo(variable);
  
  return (
    <>
      <div>Auto Only</div>

      {myTipo &&
        myTipo.map((item: any) => (
            <Card key={item.id} {...item} />
        ))}
    </>
  );
};

export default AutoOnly;
