import { Sunny, PartlyCloudy, Cloudy, Rainy } from '../assets/icons'
import { useWeatherData } from '../context/weatherContext'

export default function Temperature() {
  const { temperature, weatherCodes, weatherCode } = useWeatherData()



  const displayIcon = (className) => {
    if(weatherCodes['sunny'].includes(weatherCode)) return(<Sunny className={className}/>)
    
    if(weatherCodes['partlyCloudy'].includes(weatherCode)) return(<PartlyCloudy className={className}/>)
    
    if(weatherCodes['cloudy'].includes(weatherCode)) return(<Cloudy className={className}/>)

    if(weatherCodes['rainy'].includes(weatherCode)) return(<Rainy className={className}/>)

  }




  return (
    <section className='w-full flex flex-col  justify-between items-center md:mt-[72px] lg:gap-12'>
      {displayIcon('h-[113px] w-[123px] md:h-[80%]')}
      <div className='flex flex-col items-center justify-center gap-[8px] md:gap-[24px]'>
        <h1 className='mt-[24px] md:mt-0 font-poppins text-[#2C2C2C] font-semibold text-[26px] md:text-[36px]'>
          Temperatura
        </h1>
        <p className='font-medium text-[60px] text-[#2C2C2C]'>{temperature}°</p>
      </div>
    </section>
  )
}
