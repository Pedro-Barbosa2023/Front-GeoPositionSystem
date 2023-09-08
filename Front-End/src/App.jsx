import './App.css'
import './index.css'
import Headers from './components/layout/Headers';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
    "AIzaSyDTDyIP7r3XOrt3pokpOPQS3_ISfLIiKc0"
  });

// GeoPosition Map
const position={
   lat: -19.6009590611331,
   lng: -43.8946541874073
};
  const size = useWindowSize();
  return(
    <>
      {isLoaded ? (
      <div>
        <GoogleMap
          mapContainerStyle={{width: size.width, height: size.height}}
          center={position}
          zoom={15}
          /*
          onLoad={onLoad}
          onUnmount={onUnmount}
          */
        >
          <Marker position={position} />
        </GoogleMap>
      </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App
