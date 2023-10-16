from app import app
from flask import render_template,request
from pymongo import MongoClient
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


##Inicializa a conexão com o MongoDB
MONGO_URL="mongodb+srv://admin:admin@geopositionsystem.2pvoswo.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(MONGO_URL)

##Inicializa  a conexão com o Firebase
cred = credentials.Certificate("/Firebase/configFB.json")

# Inicialize o aplicativo Firebase
firebase_admin.initialize_app(cred)


##Rota Inicial do projeto

@app.route ('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route ('/sensorData',methods=['GET', 'POST'])
def sendData():
    db = client['test']
    collection = db['rastreadors']
    if request.method == 'GET':
        return render_template('sensordata.html')
    elif request.method == 'POST':
        info=request.get_json()
        collection.insert_one(info)
        return render_template('sensordata.html')

@app.route('/gambiarra')
def index():
    # Referencie o nó raiz do Firebase Realtime Database
    ref = db.reference('/')

# Obtenha todos os dados no nó raiz
    data = ref.get()

# Itere pelos nós e colete suas chaves (IDs)
    keys = []

    def collect_keys(data, current_path=''):
        for key, value in data.items():
            if isinstance(value, dict):
                collect_keys(value, current_path + '/' + key)
            elif isinstance(value, list):
                for i, item in enumerate(value):
                    collect_keys({str(i): item}, current_path + '/' + key)
            else:
                print(f'Chave: {current_path}/{key}, Valor: {value}')
                keys.append(current_path + '/' + key)

    #collect_keys(data)
    tamanho=len(keys)
    chave= keys[tamanho-1]
    ref=db.reference(f'{chave}')
    dados = ref.get()
    Mongo = client['test']
    collection = Mongo['rastreadors']
    collection.insert_one(dados)
    return render_template('gambiarra.html')