#include "GPS.h"
#include "GSM.h"

#define WAIT_GSM 0
#define WAIT_GPS 1
#define SEND_GSM 2

int state, next_state;
String Data = "";

void setup() {
  Serial.begin(9600);
}

void loop() {
  int internet_conn, position_sucess, send_sucess = 0;
  state = 0;
  next_state = 0;
  String _Data = "";

  while(1){

    gsmSerial.println("AT+CREG?");
    if(!waitResponse("+CREG: 0,5")){
      while(init_gsm() != 1){
        delay(200);
        Serial.println("Initializing module");
      }
    }

    //Serial.println("ei");
    switch(state){
      //Serial.println("ou");
      case WAIT_GSM:
      //Serial.println("ooooi");
        internet_conn = GSMConnect();    
        if(internet_conn) next_state = WAIT_GPS;
        else{
          gprs_disconnect();
          next_state = WAIT_GSM;
        }
        break;
      case WAIT_GPS:
      
        Data = "";
        _Data = GetGPSData();
        if(_Data != ""){
          Data = _Data;
          position_sucess = 1;
        }
        else{
          position_sucess = 0;
        }
        if(position_sucess) next_state = SEND_GSM;
        else next_state = WAIT_GPS;
        break;
      case SEND_GSM:
        send_sucess = GSMSendHTTP(Data);
        if(send_sucess) next_state = WAIT_GPS;
        else{
          gprs_disconnect();
          next_state = WAIT_GSM;
        }
        break;
      default:
        next_state = WAIT_GSM;
        break;
    }

    state = next_state;

    delay(200);
  }
}