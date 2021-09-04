const searchInput = document.getElementById('search-input');

const searchButton = () => {
    const searchText = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=afc9a31e8742870de4e39fb555f239ad&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const setData = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayData = data => {
    console.log(data);
    setData('city', data.name);
    setData('temp', data.main.temp)
    setData('clouds', data.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const img = document.getElementById('img-icon');
    img.setAttribute('src', url)

}