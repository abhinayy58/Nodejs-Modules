const fetch = require('node-fetch');
let api_key = '715e97d94976cfd14f9be123aaff19a8'
let city = 'London'
let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;




fetch( api_url )
 .then((response) => response.json())
 .then((data) => console.log('the Tempreture in ' + data.name + ' is ' + data.main.temp ))
 .catch((err) => console.log(err))
