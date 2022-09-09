// loading city temperature data from API
const loadCityData = async (city_name) => {
    const API_KEY = "fbd8545168fc0cfb9f2abd3dfba9074d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const city_data = await response.json();
        return city_data;
    } catch (e) {
        console.log(e);
    }

}
// search  button event handler
document.getElementById("search").addEventListener("click", async () => {
    // taking city name from input field
    let city_name = document.getElementById("city-name").value;
    // capitalizing city name
    city_name = city_name[0].toUpperCase() + city_name.slice(1);
    // loading city temperature data
    const city_data = await loadCityData(city_name);
    // setting city data in frontend
    document.getElementById("search-city").innerText = city_name;
    document.getElementById("city-temp").innerText = city_data.main.temp;
    document.getElementById("wearther-condition").innerText = city_data.weather[0].main;
})
