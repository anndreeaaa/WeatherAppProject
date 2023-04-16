let căutareInp = document.querySelector('.vreme__căutare');
let oraș = document.querySelector('.vreme__oraș');
let zi = document.querySelector('.vreme__zi');
let umiditate = document.querySelector('.vreme__indicator__umiditate>.value');
let vânt = document.querySelector('.vreme__indicator--vânt>.value');
let presiune = document.querySelector('.vreme__indicator--presiune>.value');
let imagine = document.querySelector('.vreme__imagine');
let temepratura = document.querySelector('.vreme__temperatura>.value');

let vremeAPIKey = 'ba03beefe999af2c00b07e199feabcea';
let vremeBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + vremeAPIKey;


let getWeatherByCityName = async (oraș) => {
    let endpoint = vremeBaseEndpoint + '&q=' + oraș;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

getWeatherByCityName('Cluj-Napoca');


căutareInp.addEventListener('keydown',async (e) => {
    if(e.keyCode === 69) {
        let weather = await getWeatherByCityName(căutareInp.value);
        updateCurrentWeather(weather);
    }
})

let updateCurrentWeather = (data) => 
    console.log(data)
    oraș.textContent = data.name + ', ' + data.sys.country;
    zi.textContent = ZiuaSaptamanii();
    umiditate.textContent = data.main.humidity;
    presiune.textContent = data.main.pressure;
    let windtextContent;
    let deg = data.wind.deg;
    if(deg > 45 && deg <= 135) {
        windDirection = 'Est';
    } else if(deg > 135 && deg <= 225) {
        windDirection = 'Sud';
    }
    else if(deg > 225 && deg <= 315) {
        windDirection = 'Vest';
    }
    else if(deg > 315 && deg <= 45) {
        windDirection = 'Nord';
    }
    
    wind.textContent = windDirection + ', ' + data.wind.speed; 
    temperatura.textContent = data.main.temp > 0 ? '+'+ Math.round(data.main.temp) : data.main.temp;


let ZiuaSaptamanii = () => {
    return new Date().toLocaleDateString('ro-RO', {'weekday': 'long'});
}




