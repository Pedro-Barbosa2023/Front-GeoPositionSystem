# POC-GeoPositionSystem
Prova de conceito de uma aplicação Back End e Front End para gerenciamento dos dados de um sensor de geolocalização em tempo real para automóveis.

Recursos parciais

- Usuário realiza cadastro
- Usuário realiza Login
- Usuário visualiza mapa com marcador de posição em tempo real
- Usuário consegue dar zoom no mapa
- Usuário recebe informações do GPS (velocidade, data hora, altitude, latitude e longitude)
- Usuário faz logout da página

Hardware

- Módulo GPS NEO-6M + Antena - Esse módulo Processa as informações de geolocalização e comunica com o microcontrolador via porta serial dados como coordenadas geograficas, altitude, velocidade, etc.
- Módulo GSM SIM 800L GPRS - Base para conexão em rede móvel na Internet, com ele vamos estabelecer conexão na Internet e enviar os dados de geolocalização para o banco de dados para a aplicação web.
- Kit de desenvolvimento Arduino MEGA 2560 - Baseado no Microcontrolador AVR ATMEGA2560. Esse Microcontrolador recebe os dados do módulo de GPS e faz a comunição com o banco de dados que aplicação web consulta a geolocalização, via rede móvel com o módulo GSM SIM 800L GPR.
- Arduino IDE - Ambiente de desenvolvimento  para os kits Arduino, possui embutido editor de texto, compilador (cross compiler) e ferramenta para upload do código para o microcontrolador.
- Linguagens de Programação utilizada no firmware do hardware - C++

Front End

- Linguagem utilizada - JavaScript
- Linguagem de marcação - HTML
- Estilização da(s) páginas - CSS
- Framework utilizadas - React js | Google Maps API | ASP.NET
- Validação de usuário - Firebase API

Back End 

- Node js
- Frameworks - REST API (CRUD) | Express | Socket.io
- Banco de dados - MySQL


