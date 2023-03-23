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

  


  function getSunset(fullTime) {
    const hour = parseInt(fullTime.substring(0, 2))
    const minutes = fullTime.substring(3, 2)
    console.log(fullTime.substring(0,2))
    return `${hour + 12}:${minutes}`
  }






  //to ma odejmowac godzine zahchodu od wschodu aby obliczyc dlugosc dnia
  function calculateDayLenght(start, end) {

    // Create date format.          
    let timeStart = new Date("October 23, 2023 " + start)
    let timeEnd = new Date("October 23, 2023 " + end)

    // Subtract.
    let difference = timeEnd - timeStart

    let time = msToTime(difference)

    return time
  } 


  //to ma zamienic milisekundy na sekundy i tak az do godzin
  function msToTime(s) {
      var ms = s % 1000
      s = (s - ms) / 1000
      var secs = s % 60
      s = (s - secs) / 60
      var mins = s % 60
      var hrs = (s - mins) / 60

      // te minut/y roboczo
      return Math.abs(hrs) + ' godzin ' + Math.abs(mins) + ' minut/y'
  }





  //export values
  const lastUpdated = weatherData?.current?.last_updated.substring(
    weatherData?.current?.last_updated.length - 5
  )

  //z np 05:20 AM robi 5:20
  const convertedSunrise = sunData?.astronomy?.astro?.sunrise.slice(0,5)

  //z np 08:20 PM robi 20:20
  const convertedSunset = parseInt(sunData?.astronomy?.astro?.sunset.slice(1,2)) + 12 + sunData?.astronomy?.astro?.sunset.slice(2,5)




  



  const value = {
    temperature: weatherData?.current?.temp_c,
    uv: weatherData?.current?.uv,
    humidity: weatherData?.current?.humidity,
    aq: Math.floor(weatherData?.current?.air_quality.pm10),
    sunrise: convertedSunrise,
    sunset: convertedSunset,
    dayLenght: calculateDayLenght(convertedSunset, convertedSunrise),
    lastUpdated: lastUpdated,
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
