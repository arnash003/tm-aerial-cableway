import React from "react"

const useWeather = () => {
    const fetcher = (url) => axios.get(url)
    return useSWR(`https://api.openweathermap.org/data/3.0/onecall?lat=123}&lon=123&appid=${API_KEY}`, fetcher)
}

const Weather = () => {
    const { data, error, loading } = useWeather()

    return (
        <div>

        </div>
    )
}

export default Weather