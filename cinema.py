from flask import Flask, json, request,jsonify
from flask_cors import CORS
movies = [{"id": 1,"moviePrice":10, "name": "Avengers: Endgame","occupiedSeats":[11,12,13,14,21,22,24,25,36]},
         {"id": 2,"moviePrice":12, "name": "The Dark Knight","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 3,"moviePrice":11, "name": "Titanic","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 4,"moviePrice":13, "name": "Toy story 4","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 5,"moviePrice":14, "name": "Parasite","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 6,"moviePrice":15, "name": "Godzilla vs Kong","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 7,"moviePrice":16, "name": "Interstellar","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 8,"moviePrice":17, "name": "Avatar","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 9,"moviePrice":18, "name": "Big hero 6","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 10,"moviePrice":9, "name": "Harry Potter","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 11,"moviePrice":8, "name": "Wall-E","occupiedSeats":[11,12,13,14,31,32,24,25,36] },
         {"id": 12,"moviePrice":7, "name": "Inception","occupiedSeats":[11,12,13,14,31,32,24,25,36] }         
         ]
order=[{"username":"tuyen", "movie": "Titanic","chosenSeats":[1,2],"movieId":3}]
scoring=[{"username":"tuyen","discount_score":10}]
api = Flask(__name__)
cors=CORS(api)

@api.route('/score', methods=['POST','GET'])
def get_score_info():
  if request.method=='GET':
    user=request.args.get("username")
    for each in scoring:
      if each["username"]==user:
          break
    response=jsonify(each["discount_score"])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
  elif request.method == 'POST':
    content = request.get_json(force=True)
    #print(content)
    for each in scoring:
      if each["username"]==content["username"]:
        if content["spent_score"]=="true":
          each["discount_score"]=0
        each["discount_score"]+=int(content["earned_score"])
        break
    response=jsonify({"success": True})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@api.route('/movies', methods=['GET'])
def get_movies_info():
  movie_id=int(request.args.get("movieId"))
  for each in movies:
    if each["id"]==movie_id:
        print(movie_id)
        break
  response=jsonify(each)
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response


@api.route('/order', methods=['POST','GET'])
def post_order():
  if request.method == 'POST':  
    json_order = request.get_json(force=True)
    new_order=dict()
    print(json_order)
    new_order["username"]=json_order["username"]
    new_order["movieId"]=int(json_order["id_movie"])
    for each in movies:
      if each["id"]==int(json_order["id_movie"]):
            new_order["movie"]=each["name"]
    new_order["chosenSeats"]=json_order["seat"]
    order.append(new_order)
    print(order)
    response=jsonify({"success": True})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
  elif request.method == 'GET':
    username=request.args.get("username")
    res=[]
    for each in order:
      if each["username"]==username:
        print(each)
        res.append(each)
    response=jsonify(res)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    api.run(port=7897)