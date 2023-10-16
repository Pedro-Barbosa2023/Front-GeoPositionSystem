#include <WiFi.h>
#include <WiFiAP.h>
#include <WiFiClient.h>
#include <WiFiGeneric.h>
#include <WiFiMulti.h>
#include <WiFiSTA.h>
#include <WiFiScan.h>
#include <WiFiServer.h>
#include <WiFiType.h>
#include <WiFiUdp.h>

class Internet {

  private:
  const char* wifi_ID;
  const char* wifi_Password;

  public:
  void set_Wifi_ID(char* ID);
  void set_Wifi_Password(char* Password);
  void initWifiConnection();
};
void Internet::set_Wifi_ID(char* ID){
  wifi_ID=ID;
}
void Internet::set_Wifi_Password(char *Password){
  wifi_Password=Password;
}
void Internet::initWifiConnection(){

  WiFi.mode(WIFI_STA);
  WiFi.begin(wifi_ID, wifi_Password);
  while (WiFi.status() != WL_CONNECTED) {
  delay(1000);
  }
}
