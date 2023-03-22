import React, { useContext, useState, useEffect } from 'react'


// constans
const API_KEY = 'b0913a51f81c495b96e200430232103'


const WeatherContext = React.createContext()

export function useWeatherData() {
  return useContext(WeatherContext)
}

export default function WeatherProvider({ children }) {

  // weather & sun data
  const [weatherData, setWeatherData] = useState({})
  const [sunData, setSunData] = useState({})


  // fetch weather data q=city
  const getWeatherData = async (q = 'Olesnica') => {
    try {
        // fetch
        const response = await fetch(
          'http://api.weatherapi.com/v1/current.json?' +
            new URLSearchParams({
              key: API_KEY,
              q: q,
              aqi: 'yes',
            })
        )

        // response to json
        const weatherDataJson = await response.json()
        console.log('Weather data:', weatherDataJson)


        // save response in state
        setWeatherData((prev) => weatherDataJson)
    }
    catch (error) {
        console.log(error.message)
    }
  }



  // fetch sun data q=city
  const getSunData = async (q = 'Olesnica') => {
    try {
        // fetch
        const response = await fetch(
          'http://api.weatherapi.com/v1/astronomy.json?' +
            new URLSearchParams({
              key: API_KEY,
              q: q,
              aqi: 'yes',
            })
        )

        // response to json
        const sunDataJson = await response.json()
        console.log('Sun data:', sunDataJson)

        // save response in state
        setSunData((prev) => sunDataJson)
    } 
    catch (error) {
        console.log(error.message)
    }
  }



  
  useEffect(() => {
    //fetch data
    getWeatherData()
    getSunData()


    //interval for fetching data
    const interval = setInterval(() => {
      getWeatherData()
      getSunData()
    }, 60000)


    console.log(weatherData)


    return () => clearInterval(interval)
  }, [])



  const lastUpdated = weatherData?.current?.last_updated.substring(weatherData?.current?.last_updated.length - 5)


  let sunriseHour = sunData?.astronomy?.astro?.sunset.substring(sunData?.astronomy?.astro?.sunset.length - 6)


  sunriseHour = sunriseHour + 12

  console.log(sunriseHour)




  const value =  {
    temperature: weatherData?.current?.temp_c,
    uv: weatherData?.current?.uv,
    humidity: weatherData?.current?.humidity,
    aq: Math.floor(weatherData?.current?.air_quality.pm10),
    sunrise: sunData?.astronomy?.astro?.sunrise,
    sunset: sunData?.astronomy?.astro?.sunset,
    lastUpdated: lastUpdated
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
