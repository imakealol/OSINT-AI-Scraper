import requests

def get_weather(city):
    res = requests.get(f"http://api.weatherapi.com/v1/current.json?key=API_KEY&q={city}")
    return res.json()

