#include <TinyGPS++.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <HTTPClient.h>

//enter WIFI credentials
const char* ssid     = "AP_404";
const char* password = "efgn7404";


//GSM Module RX pin to ESP32 2
//GSM Module TX pin to ESP32 4
#define rxPin 4
#define txPin 2
HardwareSerial neogps(1);

TinyGPSPlus gps;

void setup() {
  // put your setup code here, to run once:
  //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  Serial.begin(115200);
  Serial.println("esp32 serial initialize");

  neogps.begin(9600, SERIAL_8N1, rxPin, txPin);
  Serial.println("neogps serial initialize");
  delay(1000);
   //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
   
  
  //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) { 
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
}

void loop() {
    bool newData = false;
    String Lat="";
    String Lon="";
    String Alt="";
    String vel="";

    while(neogps.available()){
      if(gps.encode(neogps.read())){
        if(gps.location.isValid() == 1){
          newData = true;
          break;
        }
      }
    }

    if(true){
    newData = false;
    Lat = String(gps.location.lat()); // Latitude in degrees (double)
    Lon = String(gps.location.lng()); // Longitude in degrees (double)
    Alt = String(gps.altitude.meters()); // Altitude in meters (double)
    vel = String(gps.speed.kmph());
    Serial.print("Latitude ");
    Serial.println(gps.location.lat()); 
    Serial.print("Longitude");
    Serial.println(Lon); 
    Serial.print("Altura ");
    Serial.println(Alt);
    Serial.print("Velocidade "); 
    Serial.println(vel); 
    }
    String Data = "{";

    Data += "\"latitude\":\"" + Lat + "\",";

    Data += "\"longitude\":\"" + Lon + "\",";

    Data += "\"altura\":\"" + Alt + "\",";

    Data += "\"__v\":\"" + vel + "\"";
      
    Data += "}";

  
    HTTPClient http;
  
  // Set the URL of your Flask API
    http.begin("https://apimongoesp32.up.railway.app/sensorData");

  // Set the content type to JSON
    http.addHeader("Content-Type", "application/json");

    Serial.println(Data);
  // Send the POST request with JSON data
    int httpResponseCode = http.POST(Data);
 
    http.end();
    delay(5000); // Send data every 5 seconds

}
