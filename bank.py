from flask import Flask, json, request,jsonify
from flask_cors import CORS
account = [{"username":"tuyen","password":"password","balance":1000},
          {"username":"cinema","password":"password","balance":10000}
         ]

api = Flask(__name__)
cors = CORS(api)

@api.route('/get_balance', methods=['GET'])
def get_balance():
  content=request.get_json()
  for each in account:
    if each["user"]==content["user"] and each["pwd"]==content["pwd"]:
      return json.dumps({"success":True,"user":each["user"],"balance":each["balance"]}),201
  return json.dumps({"success":False}),201

@api.route('/transaction', methods=['POST'])
def post_transaction():
  content = request.get_json()
  print("content", content)
  for sender in account:
    if sender["username"]==content["username"] and sender["password"]==content["password"]:
      if sender["balance"]>=int(content["amount"]):
        sender["balance"]=sender["balance"]-int(content["amount"])
        for receiver in account:
          if receiver["username"]==content["receiver"]:
            receiver["balance"]=receiver["balance"]+int(content["amount"])
            print (account)         
            response=jsonify({"success":True})
            response.headers.add("Access-Control-Allow-Origin", "*")
            print(response)
            return response
  response=jsonify({"success": False})
  response.headers.add("Access-Control-Allow-Origin", "*")
  print(response)
  return response,201
  
if __name__ == '__main__':
    api.run(port=7898)