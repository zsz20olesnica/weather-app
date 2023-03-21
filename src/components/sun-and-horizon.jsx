import { SunAndHorizon } from "../assets/icons"

export default function SunInfo({east = "6:35", west = "19:20"}) {
  return (
            <section className="bg-[#FDFCFC] w-full flex flex-col items-start justify-between gap-[24px] px-[24px] py-[16px] mt-[32px]">
                    <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] lg:text-[24px]">Słońce</p>


                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-row items-center justify-center gap-[50%] md:gap-[55%] w-full">
                          {/* Godzina wschodu */}
                          <div>
                            <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[18px]">Wschód</p>
                            <span className="font-regular text-[12px] text-[#777777] md:text-[14px] lg:text-[16px]">{east}</span>
                          </div>
                          
                        

                          {/* Godzina zachodu */}
                          <div>
                            <p className="font-regular text-[10px] text-[#C4C4C4] md:text-[12px] lg:text-[18px]">Zachód</p>
                            <span className="font-regular text-[12px] text-[#777777] md:text-[14px] lg:text-[16px]">{west}</span>
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
  )
}



