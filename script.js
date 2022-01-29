var btn = document.getElementById('btn')
var input = document.getElementById('input')
var city = document.getElementById('city')
var temp = document.getElementById('temp')
var weather = document.getElementById('weather')
var max = document.getElementById('max')
var min = document.getElementById('min')




function fetchAPI() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=bfb87668e9273df2abf40e71283c1dbc')
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data['name'],
                temp.innerHTML = data['main']['temp'] + "&deg",
                weather.innerHTML = data['weather'][0]['main'],
                max.innerHTML = '<i class="fas fa-arrow-up"></i>' + data['main']['temp_max'] + ' ' + "&#8451",
                min.innerHTML = '<i class="fas fa-arrow-down"></i>' + data['main']['temp_min'] + ' ' + "&#8451"
        })

    .catch(error => alert("Wrong city name!"))
}

btn.addEventListener("click", fetchAPI)
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});