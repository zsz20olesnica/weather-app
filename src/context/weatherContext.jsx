import React, { useContext, useState, useEffect } from 'react'

const WeatherContext = React.createContext()

export function useWeatherData() {
  return useContext(WeatherContext)
}

export default function WeatherProvider({ children }) {
  // weather data
  const [weatherData, setWeatherData] = useState({})

  // fetch weather data q=city
  const getWeatherData = async (q = 'Olesnica') => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?' +
          new URLSearchParams({
            key: 'b0913a51f81c495b96e200430232103',
            q: q,
            aqi: 'yes',
          })
      )
      const weatherData = await response.json()
      console.log(weatherData)

      setWeatherData((prev) => weatherData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWeatherData()

    const interval = setInterval(() => {
      getWeatherData()
    }, 60000)
    console.log(weatherData)
    return () => clearInterval(interval)
  }, [])

  const lastUpdated = weatherData?.current?.last_updated.substring(weatherData?.current?.last_updated.length - 5)

  const value =  {
    temperature: weatherData?.current?.temp_c,
    uv: weatherData?.current?.uv,
    humidity: weatherData?.current?.humidity,
    aq: Math.floor(weatherData?.current?.air_quality.pm10),
    lastUpdated: lastUpdated
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
