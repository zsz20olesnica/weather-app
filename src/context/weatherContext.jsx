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

  // fetch weather
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

  // fetch sun data
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





  //to ma odejmowac date od daty, hours:minutes - hours:minutes
  function calculateTimeDifference(start, end) {

    // Create date format.          
    let timeStart = new Date("October 23, 2023 " + start)
    let timeEnd = new Date("October 23, 2023 " + end)

    // Subtract.
    let difference = timeEnd - timeStart

    let time = StringTimeCalculator(difference)

    return time
  } 


  //to ma zamienic milisekundy na sekundy i tak az do godzin i zrobic return jako string
  function StringTimeCalculator(s) {
      let ms = s % 1000
      s = (s - ms) / 1000
      let secs = s % 60
      s = (s - secs) / 60
      let mins = s % 60
      let hrs = (s - mins) / 60

      let minsString = Math.abs(mins).toString()

      let minsConjugation = ' minut/y'
      
      let i = minsString.length - 1

      //10-21 - wyjatek
      if((minsString.length == 2 && (minsString[0] == 1 || minsString[1] == 1)) || (minsString[i] >= 5 || minsString[i] == 0)) minsConjugation = ' minut'
      
      //jesli druga liczba == 1
      else if(minsString[0] == 1) minsConjugation = ' minuta'
      
      //jesli druga liczba <= 4
      else if(minsString[i] <= 4) minsConjugation = ' minuty'
    
    
      return Math.abs(hrs) + ' godzin ' + (minsString > 0 ? minsString + minsConjugation : '')
  }





  //export values
  const lastUpdated = weatherData?.current?.last_updated.substring(
    weatherData?.current?.last_updated.length - 5
  )

  //z np 05:20 AM robi 5:20
  const convertedSunrise = sunData?.astronomy?.astro?.sunrise.slice(0,5)

  //z np 08:20 PM robi 20:20
  const convertedSunset = parseInt(sunData?.astronomy?.astro?.sunset.slice(1,2)) + 12 + sunData?.astronomy?.astro?.sunset.slice(2,5)

  const toSunset = lastUpdated >= convertedSunset ? 'Aktualnie jest po zachodzie słońca': calculateTimeDifference(lastUpdated, convertedSunset);


  const weatherCodes = {
    sunny: [1000],
    partlyCloudy: [1003 , 1009 , 1063 , 1066 , 1069 , 1072 , 1087 , 1150],
    cloudy: [1006 ,  1030 , 1135 , 1147],
    rainy: [1114 , 1117 , 1153 , 1168 , 1171 , 1180 , 1183 , 1186 , 1189 , 1192 , 1195 , 1198 , 1201 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1240 , 1243 , 1246 , 1249 , 1252 , 1255 , 1258 , 1261 , 1264 , 1273 , 1276 , 1279 , 1282]
  }







  const value = {
    temperature: weatherData?.current?.temp_c,
    uv: weatherData?.current?.uv,
    humidity: weatherData?.current?.humidity,
    aq: Math.floor(weatherData?.current?.air_quality.pm10),
    sunrise: convertedSunrise,
    sunset: convertedSunset,
    dayLenght: calculateTimeDifference(convertedSunset, convertedSunrise),
    toSunset: toSunset,
    lastUpdated: lastUpdated,
    weatherCodes: weatherCodes,
    weatherCode : weatherData?.current?.condition?.code
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
