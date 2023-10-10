import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import * as managerService from "../../services/ManagerService/managerService"


const CardInformation = (args) => {
  //const [theme, setTheme] = useState(false);

  const [GPSInformation, setGPSInformation] = useState({
    velocidade: 1,
    altura: 17,
  });
  const [altitude, setaltitude] = useState("1")
  const [velocidade, setvelocidade] = useState("17")
  


  useEffect(() => {
    const updateGPSInformation = () => {
      let data = managerService.GetData();
      let coordenadas;
      data.then(value => {
        if(value.dadosLocais._id !== null){
        coordenadas = value.dadosLocais
        console.log(coordenadas)
        setaltitude(coordenadas.altura)
        setvelocidade(coordenadas.__v)
        setGPSInformation({  coordenadas });}
      })
      
    };

    // Atualize as informações a cada 3 segundo
    const intervalId = setInterval(updateGPSInformation, 10000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);



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
            <ListGroupItem >Velocidade: {velocidade} Km/h </ListGroupItem>
            <ListGroupItem >Altitude: {altitude} m </ListGroupItem>
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
