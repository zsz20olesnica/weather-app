import { useWeatherData } from '../context/weatherContext'

export default function AdditionalInformations() {
  const { uv, humidity, aq, lastUpdated } = useWeatherData()

  return (
    <section className='bg-[#FDFCFC] w-full flex items-center justify-between gap-[40px] px-[24px] py-[16px] mt-[40px] md:px-[40px] md:mt-[80px]'>
      {/* Czas */}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]'>
          Aktualizacja
        </p>
        <p className='font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]'>
          {lastUpdated}
        </p>
      </div>

      {/* UV */}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]'>
          UV
        </p>
        <p className='font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]'>
          {uv}
        </p>
      </div>

      {/* Wilgotność */}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]'>
          Wilgotność
        </p>
        <p className='font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]'>
          {humidity}%
        </p>
      </div>

      {/* AIR Quality*/}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]'>
          Jakość powietrza
        </p>
        <p className='font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]'>
          {aq}/10
        </p>
      </div>
    </section>
  )
}
