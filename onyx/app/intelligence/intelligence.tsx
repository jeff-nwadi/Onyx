import Core from "@/public/images/A1 Neural Core.svg"
import Image from "next/image"
import Brain from "@/public/images/brain.svg"
import BioCheck from "@/public/images/Predictive Health UI.svg"
import HeartRate from "@/public/images/Behavioral Tracking.svg"
import Chart from "@/public/images/chart.svg"
import Acocustic from "@/public/images/Acoustic Engine.svg"
import lines from "@/public/images/lines.svg"
import { ChevronLeft } from "lucide-react"

export default function intelligence () {
  return (
    <div className="py-10 md:py-20 px-6 md:px-40 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
            <div data-gsap="fade-up" className="text-center w-full">
                <h1 className="text-4xl sm:text-6xl md:text-[80px] font-semibold leading-[1.1]">A mind of its own.</h1>
                <p className="text-base md:text-[18px] text-[#6B7280] font-medium w-full md:w-[40%] mx-auto leading-normal mt-4">Powered by the A1 Neural Core. Lumina doesn't just track data, it understands your pet's baseline and alerts you before things go wrong.</p>    
            </div>
            <div data-gsap="fade-up" className="mt-10 md:mt-20 w-full flex justify-center">
            <Image src={Core} width={1000} height={1000} alt="" className="w-full h-auto max-w-5xl rounded-[8px]" /> 
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center py-12 md:py-28 gap-10 lg:gap-15">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={Brain} alt="" className="py-6 md:py-10" />
                    <h1 className="text-3xl md:text-[40px] font-semibold w-full md:w-[60%] leading-[1.1]">Predictive Health Diagnostics.</h1>
                    <p className="text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full md:w-[80%]">By continuously analyzing millions of data points,
                        the A1 Core establishes your pet's unique biological
                        baseline. It detects micro-deviations in vitals and
                        activity levels days before physical symptoms
                        appear.
                    </p>
                </div>
                <div data-gsap="fade-up" className="w-full ">
                    <Image src={BioCheck} alt="" width={1000} height={1000} className="w-full h-auto rounded-[8px]" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse justify-between items-center py-12 md:py-28 gap-10 lg:gap-15">
                <div data-gsap="fade-up" className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={Chart} alt="" className="py-6 md:py-10"  />
                    <h1 className="text-3xl md:text-[40px] font-semibold w-full md:w-[60%] leading-[1.1]">Behavioral Intelligence.</h1>
                    <p className="text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full md:w-[80%]">Our sophisticated behavioral mapping algorithms identify subtle changes in rest patterns, interaction frequency, and movement efficiency, providing a complete picture of well-being.
                    </p>
                </div>
                <div data-gsap="fade-up" className="w-full">
                    <Image src={HeartRate} alt="" width={1000} height={1000} className="w-full h-auto rounded-[8px]" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center py-12 md:py-28 gap-10 lg:gap-15">
                <div data-gsap="fade-up" className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={lines} alt="" className="py-6 md:py-10"  />
                    <h1 className="text-3xl md:text-[40px] font-semibold w-full md:w-[60%] leading-[1.1]">Acoustic Analysis.</h1>
                    <p className="text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full md:w-[80%]">The integrated acoustic array monitors breathing rhythms and vocalizations, filtering environmental noise to focus exclusively on your pet's internal health indicators.
                    </p>
                </div>
                <div data-gsap="fade-up" className="w-full">
                    <Image src={Acocustic} alt="" width={1000} height={1000} className="w-full h-auto rounded-[8px]" />
                </div>
            </div>
        </div>
       
         <div className='h-px bg-[#0B1220]/10 mx-0' />
         <div data-gsap="stagger" className="flex flex-col sm:flex-row justify-between items-center py-12 md:py-20 gap-10 sm:gap-0">
            <div className="text-center">
                <h1 className="text-3xl md:text-[40px] font-semibold">50m+</h1>
                <p className="text-sm md:text-[16px] text-[#6B7280] leading-normal py-2 md:py-4 ">Data points analyzed daily</p>
            </div>
            <div className="text-center">
                <h1 className="text-3xl md:text-[40px] font-semibold">99.8%</h1>
                <p className="text-sm md:text-[16px] text-[#6B7280] leading-normal py-2 md:py-4 ">Anomaly detection accuracy</p>
            </div>
            <div className="text-center">
                <h1 className="flex text-3xl md:text-[40px] font-semibold items-center justify-center"> <ChevronLeft className="h-8 w-8 md:h-10 md:w-10"/> 1ms</h1>
                <p className="text-sm md:text-[16px] text-[#6B7280] leading-normal py-2 md:py-4 ">On-device processing latency</p>
            </div>
         </div>
        
    </div>
  )
}
