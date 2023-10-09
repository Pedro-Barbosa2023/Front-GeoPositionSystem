import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";



const CardInformation = (args) => {
  //const [theme, setTheme] = useState(false);

  const [GPSInformation, setGPSInformation] = useState({
    velocity: 1,
    height: 17,
  });

/*
Criar lógica aqui para receber informações do GPS

  useEffect(() => {
    const updateGPSInformation = () => {
      
      setGPSInformation({  });
    };

    // Atualize as informações a cada 3 segundo
    const intervalId = setInterval(updateGPSInformation, 3000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

*/

  return (
    <div className="cardConteiner">
      <>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Card" src="https://picsum.photos/id/88/300/200" />
          <CardBody>
            <CardTitle tag="h5">GPS Informações</CardTitle>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem >Velocidade: {GPSInformation.velocity} Km/h </ListGroupItem>
            <ListGroupItem >Altitude: {GPSInformation.height} m </ListGroupItem>
          </ListGroup>
          <CardBody>
            <h7>
              Confiabilidade e acurácia das informações dependem diretamente da qualidade do sinal.
            </h7>
          </CardBody>
        </Card>
      </>
    </div>
  );
};
export default CardInformation;
