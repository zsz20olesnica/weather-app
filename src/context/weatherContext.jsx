import React, { useContext, useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY
const WeatherContext = React.createContext()

export function useWeatherData() {
  return useContext(WeatherContext)
}

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState({})
  const [sunData, setSunData] = useState({})
  const duration = 600000

  const getWeatherData = async (q = 'Olesnica') => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?' +
          new URLSearchParams({
            key: API_KEY,
            q: q,
            aqi: 'yes',
          })
      )

      const weatherDataJson = await response.json()
      console.log('Weather data:', weatherDataJson)

      setWeatherData(weatherDataJson)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getSunData = async (q = 'Olesnica') => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/astronomy.json?' +
          new URLSearchParams({
            key: API_KEY,
            q: q,
            aqi: 'yes',
          })
      )
      const sunDataJson = await response.json()
      console.log('Sun data:', sunDataJson)

      setSunData((prev) => sunDataJson)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWeatherData()
    getSunData()

    const interval = setInterval(() => {
      getWeatherData()
      getSunData()
    }, duration)

    console.log(weatherData)

    return () => clearInterval(interval)
  }, [])

  const lastUpdated = weatherData?.current?.last_updated.substring(
    weatherData?.current?.last_updated.length - 5
  )
  //no, I don't know regex 
  const hourRegex = /^(\d{2}:\d{2})/;

  function getSunset(fullTime) {
    const hour = parseInt(fullTime.substring(0, 2))
    const minutes = fullTime.substring(3, 2)
    console.log(fullTime.substring(0,2))
    return `${hour + 12}:${minutes}`
  }

  const value = {
    temperature: weatherData?.current?.temp_c,
    uv: weatherData?.current?.uv,
    humidity: weatherData?.current?.humidity,
    aq: Math.floor(weatherData?.current?.air_quality.pm10),
    sunrise: sunData?.astronomy?.astro?.sunrise.match(hourRegex)[1],
    // sunset: getSunset(sunData?.astronomy?.astro?.sunset.match(hourRegex)[1]),
    lastUpdated: lastUpdated,
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
