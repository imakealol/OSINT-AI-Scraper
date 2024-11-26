from User_chatBot import User_chatBot
import os
import sys

def clear_screen():
    """Nettoie l'écran du terminal"""
    os.system('cls' if os.name == 'nt' else 'clear')

def print_welcome():
    """Affiche le message de bienvenue"""
    print("🔍 Assistant IA")
    print("=" * 50)
    print("Commandes disponibles:")
    print("  /quit    - Quitter l'application")
    print("  /clear   - Effacer l'écran")
    print("  /help    - Afficher cette aide")
    print("=" * 50)
    print()

def main():
    # Désactiver la sortie de débogage !!!
    if not sys.flags.debug:
        sys.tracebacklimit = 0
    
    bot = User_chatBot(model="mistral:latest")
    
    clear_screen()
    print_welcome()
    
    while True:
        try:
            user_input = input("\nVous: ").strip()
            
            if not user_input:
                continue
                
            if user_input.lower() == "/quit":
                print("\nAu revoir! 👋")
                break
                
            if user_input.lower() == "/clear":
                clear_screen()
                print_welcome()
                continue
                
            if user_input.lower() == "/help":
                print_welcome()
                continue
            
            print("\nAssistant:", end=" ", flush=True)
            
            for chunk in bot.ans(user_input):
                print(chunk, end="", flush=True)
            print()
            
        except KeyboardInterrupt:
            print("\n\nInterruption détectée. Tapez '/quit' pour quitter.")
        except Exception as e:
            print(f"\nErreur: {str(e)}")
            print("Tapez '/quit' pour quitter ou continuez avec une nouvelle question.")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"\nErreur fatale: {str(e)}")
        sys.exit(1)