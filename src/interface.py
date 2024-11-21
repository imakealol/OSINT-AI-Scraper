from Bot2 import OllamaModel

def main():
    bot = OllamaModel(model="mistral:latest")
    
    print("Bienvenue dans le chat terminal ! Tapez '/quit' pour quitter.")
    
    while True:
    
        user_input = input("Vous: ")
        
        if user_input.strip().lower() == "/quit":
            print("Fin de la conversation. À bientôt!")
            break
        
        response_generator = bot.ans(user_input)
        
        print("Bot:", end=" ")
    
        for chunk in response_generator:
            print(chunk, end="", flush=True)
        print() 

if __name__ == "__main__":
    main()
