import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Headers from "./components/layout/Headers";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Helmet from 'react-helmet';

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
      const newLat = -19.6009590611331 + (Math.random() - 0.1) * 0.0001; // gera posições aleatórias para teste
      const newLng = -43.8946541874073 + (Math.random() - 0.1) * 0.001; // gera posições aleatórias para teste
      setPosition({ lat: newLat, lng: newLng });
    };

    // Atualize a posição do marcador a cada 1 segundos
    const intervalId = setInterval(updateMarkerPosition, 1000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navBar">
      <Helmet bodyAttributes={{style: 'background-color : #d3d3d3'}}/> 
      <Headers/>
      <div>
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
        <div className="modalnovo">
          <text>TESTE</text>
        </div>
      </div>
    </div>
  );
}

export default App;
