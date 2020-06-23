const OPEN_WEATHERMAP_BASE_URL = 'https://openweathermap.org/data/2.5/onecall'
const APPID = '439d4b804bc8187953eb36d2a8c26a02'  // This is samples API key provided openweathermap

const HEIDENHEIM = [
    49.02,
    10.75,
    'metric',
]


const getWeatherInfo = async (lat, lon, units, appid) => {
    let url = new URL(OPEN_WEATHERMAP_BASE_URL)
    url.search = new URLSearchParams({
        lat: lat,
        lon: lon,
        units: units,
        appid: appid,
    })

    return fetch(url)
}

export const getHeidenHeimInfo = async () => {
    return getWeatherInfo(...HEIDENHEIM, APPID)
}
