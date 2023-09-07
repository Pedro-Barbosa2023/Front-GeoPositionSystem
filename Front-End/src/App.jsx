import './App.css'
import './index.css'
import Headers from './components/layout/Headers';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'

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
  return(
    <div className = "headers">
      <Headers/>
      {isLoaded ? (
      <div className='google-map'>
        <GoogleMap
          mapContainerStyle={{width: '700px', height: '500px'}}
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
    </div>
  );
}

export default App
