

export default function AdditionalInformations({time = '11:25', uv = 4, humidity = 20, aq = 80}) {
  return (
            <section className="bg-[#FDFCFC] w-full flex items-center justify-between gap-[40px] px-[24px] py-[16px] mt-[40px] md:px-[40px] md:mt-[80px]">
                    {/* Czas */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">Czas</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">{time}</p>
                    </div>

                    {/* UV */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">UV</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">{uv}</p>
                    </div>

                    {/* Wilgotność */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">Wilgotność</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">{humidity}</p>
                    </div>

                    {/* AIR Quality*/}
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-medium text-[12px] text-[#C4C4C4] md:text-[16px] xl:text-[26px]">AQ</p>
                      <p className="font-medium text-[15px] text-[#777777] md:text-[20px] xl:text-[32px]">{aq}</p>
                    </div>
            </section>
  )
}
