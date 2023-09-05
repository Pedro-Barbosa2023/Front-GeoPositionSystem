# POC-GeoPositionSystem
Prova de conceito de uma aplicação Back End e Front End para gerenciamento dos dados de um sensor de geolocalização em tempo real para automóveis.

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
- Framework utilizadas - React js | Google Maps API 

Back End 

- Node js
- Frameworks - REST API (CRUD) | Express | MQTT
- Sistema de Geranciamento de Banco de Dados - MySQL
- Validação de usuário - Firebase Authentication API

Integrantes do projeto e atribuições

- Fabrinni Dias Bastos | Danilo Garcia Mariano: Desenvolvimento e integração do firmware do hardware com o Back End (Dev)
- Pedro Henrique de Oliveira Barbosa | Arthur Pontes Piazzaroli: Desenvolvimento do Front End e Back End (Full-Stack dev)
- Obs.: A depender da demanda, todos os membros podem atuar em partes diferentes do projeto 


Backlog do Produto

- Como usuário, eu gostaria de ter um hardware capaz de monitorar a minha posição em tempo real 
- Como usuário, eu gostaria de realizar cadastro
- Como usuário, eu gostaria de realizar Login
- Como usuário, eu gostaria de visualizar mapa com marcador de posição em tempo real
- Como usuário, eu gostaria de utillizar o zoom do mapa, para observar mais detalhes
- Como usuário, eu gostaria de visualizar informações do GPS (velocidade, data hora, altitude, latitude e longitude)
- Como usuário, eu gostaria de fazer logout da página
- Como usuário, eu gostaria de visualizar rota (s) percorridas pelo veículo
- Como usuário, eu gostaria de visualizar os horários de partida de cada rota
- Como usuário, eu gostaria de receber estimativa do tempo de espera por linhas de onibus em um determinado ponto
- Como usuário, eu gostaria de criar uma lista de rotas favoritas
- Como usuário, eu gostaria de editar o tema da interface de usário, alternando entre "dark" e "white"
- Como usuário, eu gostaria de alterar o modo de exibição do mapa - alternando entre satélite e 2D
- Como usuário, eu gostaria de 



Backlog do Sprint

História #1: Como usuário, eu gostaria de ter um hardware capaz de monitorar a minha posição em tempo real 

Tarefas e responsáveis

- Criar hardware, com módulos GPS e microntrolador [Fabrini]
- Estruturar um firmware para gerenciar a lógica de posicionamento [Danilo] [Fabrini]
- Linkar o firmware do GPS com o BD da camada Back End [Danilo] [Fabrini]

História #2: Como usuário, eu gostaria de editar o tema da interface de usário, alternando entre "dark" e "white"

Tarefas e responsáveis

- Implementar uma função e botão para alterar o tema da página [Pedro]
  
História #3: Como usuário, eu gostaria de visualizar mapa com marcador de posição em tempo real

Tarefas e responsáveis

- Estruturar página principal. Adicionar o mapa no centro da página e configurar o layout deste, usando o Google Maps API [Pedro]
- Implementar funcionalidade de alterar tema da página entre "dark" e "white" [Pedro]
- Adicionar funcionalidade de zoom no mapa e marcador de posição, utilizando o framework Google Maps API [Arthur]
- Validar funcionalidades do mapa usando um objeto de latitude e longitude de teste [Arthur] 
- Implementar um Controller para gerenciamento de requisições de acesso as informações de latitude e longitude (do BD). Gerar requisição a cada 30 segundos [Pedro]
- Validar lógica de acesso de latitude e longitude. Garantir que o marcador de posição esteja funcionando com base na Lat. e Long. do usuário [Pedro]

História #4: Como usuário, eu gostaria de visualizar informações do GPS (velocidade, data hora, altitude, latitude e longitude)

Tarefas e responsáveis

- Criar um espaço na página para visualização de informações adicionais de velocidade, altitude, data e hora [Arthur]
- Criar um controller para acessar tais informações no banco de dados [Arthur]







