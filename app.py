from flask import Flask, request, jsonify, Response
from src.User_chatBot import User_chatBot  

app = Flask(__name__)

chatbot = User_chatBot(model="mistral:latest")

@app.route("/", methods=["GET"])
def index():
    return "Bienvenue sur le chatbot Flask ! Utilisez l'endpoint /chat pour discuter."

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "Message non fourni"}), 400

    # Génération de la réponse en flux
    def generate():
        for chunk in chatbot.ans(user_input):
            yield f"{chunk}\n"

    return Response(generate(), content_type="text/plain; charset=utf-8")

if __name__ == "__main__":
    # app.run(debug=True)
    app.run(debug=True)
