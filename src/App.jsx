import { SunWithClouds as SunIcon, SunAndHorizon } from "./assets/icons"
import SchoolLogo from './assets/schoolLogo.png'
function App() {

  return (
    <main className="font-poppins w-screen h-screen px-[24px] md:px-[146px] flex flex-col justify-start items-center text-center">
        <h1 className='mt-[32px] text-[#2C2C2C] font-poppins font-semibold text-[24px] mb-[32px] md:mt-[88px] md:font-bold md:text-[45px] lg:text-[48px] lg:mt-[64px]'>Informacje pogodowe</h1>
        {/* Temperatura */}
        <div className="w-full lg:w-auto lg:flex lg:flex-row lg:gap-[144px] lg:items-center lg:justify-center">
            <section className="w-full flex flex-col  justify-between items-center md:mt-[72px] md:flex-row lg:gap-12">
              <SunIcon className={"h-[113px] w-[123px] md:h-[80%]"}></SunIcon>

              <div className="flex flex-col items-center justify-center gap-[8px] md:gap-[24px]">
                <h1 className="mt-[24px] md:mt-0 font-poppins text-[#2C2C2C] font-semibold text-[26px] md:text-[36px]">Temperatura</h1>
                <p className="font-medium text-[60px] text-[#2C2C2C]">31 °</p>
              </div>
            </section>  



          <div>
                {/* Dodatkowe informacje*/}
                <section className="bg-[#FDFCFC] w-full flex items-center justify-between gap-[40px] px-[24px] py-[16px] mt-[40px] md:px-[40px] md:mt-[80px]">
                    {/* Czas */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">Czas</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">11:25</p>
                    </div>

                    {/* UV */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">UV</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">4</p>
                    </div>

                    {/* Wilgotność */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">Wilgotność</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">58%</p>
                    </div>

                    {/* AIR Quality*/}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">AQ</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">22</p>
                    </div>
                </section>



                {/* Informacje o słońcu */}
                <section className="bg-[#FDFCFC] w-full flex flex-col items-start justify-between gap-[24px] px-[24px] py-[16px] mt-[32px]">
                    <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] lg:text-[24px]">Słońce</p>


                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-row items-center justify-center gap-[50%] md:gap-[55%] w-full">
                          {/* Godzina wschodu */}
                          <div>
                            <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[18px]">Wschód</p>
                            <span className="font-regular text-[12px] text-[#777777] md:text-[14px] lg:text-[16px]">6:35</span>
                          </div>
                          
                        

                          {/* Godzina zachodu */}
                          <div>
                            <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[18px]">Zachód</p>
                            <span className="font-regular text-[12px] text-[#777777] md:text-[14px] lg:text-[16px]">19:20</span>
                          </div>
                        </div>
                      
                        <SunAndHorizon className='w-full'></SunAndHorizon>
                    </div>

                    <div className="flex flex-col gap-1 items-start">
                    {/* Dlugość dnia */}
                    <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[16px]">Dlugość dnia: <span className="font-regular text-[10px] text-[#2C2C2C] md:text-[12px] lg:text-[16px]">13 godzin i 42 minuty</span></p>
                    {/* Do zachodu słońca White 2115 */}
                    <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[16px]">Do zachodu słońca: <span className="font-regular text-[10px] text-[#2C2C2C] md:text-[12px] lg:text-[16px]">9 godzin 22 minuty</span></p>
                    </div>
                </section>
           </div>

        </div>
        


        <footer className="mt-auto mb-4 flex items-center justify-center gap-2">
        {/* <img src={SchoolLogo} alt="Szkolne logo" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" /> */}
        <p className="font-semibold text-[12px] text-[#2C2C2C] md:text-[20px]">&copy; ZSZ Oleśnica</p>
        </footer>
        
    </main>
  )
}

export default App
