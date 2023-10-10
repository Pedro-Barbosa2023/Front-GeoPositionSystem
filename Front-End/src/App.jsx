import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Headers from "./components/layout/Headers";
import CardInformation from "./components/layout/Card";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import * as managerService from "./services/ManagerService/managerService";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDTDyIP7r3XOrt3pokpOPQS3_ISfLIiKc0", // Substitua pelo sua própria chave de API
  });

  const [position, setPosition] = useState({
    lat: -19.6009590611331,
    lng: -43.8946541874073,
  });

  useEffect(() => {
    const updateMarkerPosition = () => {
      let data = managerService.GetData();
      let coordenadas;
      data.then(value => {
        if(value.dadosLocais._id !== null){
        coordenadas = value.dadosLocais
        console.log(coordenadas)
        const newLat = parseFloat(coordenadas.latitude); // gera posições aleatórias para teste
        const newLng = parseFloat(coordenadas.longitude); // gera posições aleatórias para teste
        setPosition({ lat: newLat, lng: newLng });
        console.log(JSON.stringify(position))}
      })
      
    };

    // Atualize a posição do marcador a cada 1 segundos
    const intervalId = setInterval(updateMarkerPosition, 10000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="navBar">
      <Headers/>
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "700px", height: "500px" }}
            center={position}
            zoom={18}
          >
            <Marker position={position} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
    <div className="cardConteiner">
      <CardInformation/>
    </div>
    </>
  );
}

export default App;
