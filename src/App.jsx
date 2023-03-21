import { useEffect, useState } from 'react'

import AdditionalInformations from './components/additional-info'
import SunInfo from './components/sun-and-horizon'
import Temperature from './components/temperature'
import WeatherProvider from './context/weatherContext'

function App() {
  return (
    <WeatherProvider>
    <main className='font-poppins w-full h-screen px-[24px] md:px-[146px] box-border flex flex-col justify-start items-center text-center'>
      {/* Top heading */}
      <h1 className='mt-[32px] text-[#2C2C2C] font-poppins font-semibold text-[24px] mb-[32px] md:mt-[88px] md:font-bold md:text-[45px] lg:text-[48px] lg:mt-[64px]'>
        Informacje pogodowe
      </h1>

      {/* Content */}
      <div className='w-full lg:w-auto lg:flex lg:flex-row lg:gap-[144px] lg:items-center lg:justify-center'>
        {/* Temperatura */}
        <Temperature />
        <div>
          {/* Dodatkowe informacje*/}
          <AdditionalInformations />

          {/* Informacje o słońcu */}
          <SunInfo />
        </div>
      </div>

      <footer className='mt-auto mb-4 flex items-center justify-center gap-2'>
        <p className='font-semibold text-[12px] text-[#2C2C2C] md:text-[20px]'>
          &copy; ZSZ Oleśnica 2022/2023
        </p>
      </footer>
    </main>
    </WeatherProvider>
  )
}

export default App
