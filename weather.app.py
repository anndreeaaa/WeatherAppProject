
import requests 

api_key = "ba03beefe999af2c00b07e199feabcea"

user_input = input("Introdu numele orașului: ")


weather_data = requests.get(
    f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=metric&APPID={api_key}")

if weather_data.json()['cod'] == '404':
    print("Nu a fost găsit niciun oraș")
else:
    weather = weather_data.json()['weather'][0]['main']
    temp = round(weather_data.json()['main']['temp'])

    print(f"Vremea în {user_input} este: {weather}")
    print(f"Temperatura în {user_input} este de: {temp}°C")