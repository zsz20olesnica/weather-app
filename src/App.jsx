import { useEffect, useState } from "react"

import AdditionalInformations from './components/additional-info'
import SunInfo from './components/sun-and-horizon'
import Temperature from './components/temperature'




function App() {


  // weather data
  const [data, setData] = useState({})

  // fetch weather data q=city
  const getWeatherData = async (q = 'Olesnica') => {
    try{

      const response = await  fetch('http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
        key: 'b0913a51f81c495b96e200430232103',
        q: q,
        aqi: "yes"
       }))

      const weatherData = await response.json()
      console.log(weatherData)

      setData((prev) => weatherData)
    }
    catch(error){
      console.log(error.message)
    }
  }




  useEffect(() => {
      getWeatherData()

      const interval = setInterval(() => {
        getWeatherData()
      }, 60000);

      return () => clearInterval(interval);
  }, [])







  return (
    <main className="font-poppins w-screen h-screen px-[24px] md:px-[146px] flex flex-col justify-start items-center text-center">

        {/* Top heading */}
        <h1 className='mt-[32px] text-[#2C2C2C] font-poppins font-semibold text-[24px] mb-[32px] md:mt-[88px] md:font-bold md:text-[45px] lg:text-[48px] lg:mt-[64px]'>Informacje pogodowe</h1>
        
        {/* Content */}
        <div className="w-full lg:w-auto lg:flex lg:flex-row lg:gap-[144px] lg:items-center lg:justify-center">
            {/* Temperatura */}
            <Temperature></Temperature>
            <div>
                {/* Dodatkowe informacje*/}
                <AdditionalInformations></AdditionalInformations>

                {/* Informacje o słońcu */}
                <SunInfo></SunInfo>
            </div>
        </div>

        <footer className="mt-auto mb-4 flex items-center justify-center gap-2">
            <p className="font-semibold text-[12px] text-[#2C2C2C] md:text-[20px]">&copy; ZSZ Oleśnica</p>
        </footer>
        
    </main>
  )
}

export default App
