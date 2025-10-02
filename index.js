function searchCity(city) {
    let apiKey = bo9e753b31at2af048014fa8f5c34ef4;
    let apiUrl =
      "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);