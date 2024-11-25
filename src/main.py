from User_chatBot import User_chatBot

def main():
    bot = User_chatBot(model="mistral:latest")
    
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
        
def print_magnifying_glass():
    print("       ___")
    print("     /     \\")
    print("    |       |")
    print("     \\ ___ /")
    print("       \\ /")
    print("        V")
    print("        |")
    print("        |")
    print()

if __name__ == "__main__":
    print_magnifying_glass()
    main()
