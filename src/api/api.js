

const apiKey = '5b692784c8c84c2f46e5d826ed39b860';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;

// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}


// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}

// 5b692784c8c84c2f46e5d826ed39b860

// ac65a6c2eca5dd23204f692d004c8c12