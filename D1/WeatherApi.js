const fetch = require('node-fetch');
let api_key = 'API:KEY'
let city = 'London'
let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;




fetch( api_url )
 .then((response) => response.json())
 .then((data) => console.log('the Tempreture in ' + data.name + ' is ' + data.main.temp ))
 .catch((err) => console.log(err))
