import Image from "next/image";
import OverviewHero from "@/public/images/Lumina Overview Hero.svg";
import EHealth from "@/public/images/Health Tracking.svg";
import Location from "@/public/images/GPS Tracking.svg";
import Battery from "@/public/images/Battery Charging.svg";
import Link from "next/link";


export default function OverviewPage() {
    return (
        <div className='flex flex-col justify-center items-center py-10 md:py-20 px-6 md:px-40 overflow-hidden'>
            <div data-gsap="fade-up" className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl md:text-6xl font-bold text-center max-w-2xl">The most advanced collar ever created.</h1>
                <p className="text-base md:text-[20px] text-[#6B7280] text-center max-w-lg">Unprecedented insights into your dog's health,
                    location, and wellbeing. All in a design that
                    disappears on their neck.
                </p>
            </div>
            <div data-gsap="fade-up" className="mt-10 md:mt-20">
                <Image src={OverviewHero} alt="Overview Hero" width={1000} height={1000} className="w-full h-auto max-w-5xl rounded-[8px]" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-28 py-10 md:py-28">
                <div data-gsap="fade-up" className="flex flex-col justify-start items-start w-full">
                    <div className="bg-white w-full p-6 md:p-10 flex-1 flex flex-col justify-center rounded-t-[8px]">
                        <span className="bg-[#F1F7FF] px-4 py-2 rounded-full text-sm self-start">e-health</span>
                        <div className="flex flex-col justify-start items-start gap-4 py-6 md:py-8">
                            <h1 className="text-[24px] md:text-[32px] font-bold text-start leading-[1.1]">Vital signs. <br /> Vital insights.</h1>
                            <p className="text-[14px] md:text-[15px] text-[#6B7280] text-start max-w-md">Continuous monitoring of resting heart rate, respiratory rate, and sleep quality. Catch subtle changes before they become concerns.</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <Image src={EHealth} alt="Overview Hero" width={1000} height={1000} className="w-full h-auto max-w-5xl rounded-b-[8px]" />
                    </div>
                </div> 

                <div data-gsap="fade-up" className="flex flex-col justify-start items-start w-full">  
                    <div className="bg-white w-full p-6 md:p-10 flex-1 flex flex-col justify-center rounded-t-[8px]">
                         <span className="bg-[#F1F7FF] px-4 py-2 rounded-full text-sm self-start">Location</span>
                        <div className="flex flex-col justify-start items-start gap-4 py-6 md:py-8">
                          
                            <h1 className="text-[24px] md:text-[32px] font-bold text-start leading-[1.1]">Find them. <br /> Anywhere.</h1>
                            <p className="text-[14px] md:text-[15px] text-[#6B7280] text-start max-w-md">Next-generation GPS combined with LTE-M ensures you can pinpoint their location with meter-level accuracy, across the globe.</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <Image src={Location} alt="Overview Hero" width={1000} height={1000} className="w-full h-auto max-w-5xl rounded-b-[8px]" />
                    </div>
                </div>    
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-0">
                <div data-gsap="fade-up" className="bg-white w-full p-6 md:p-10 max-w-lg flex flex-col justify-center">
                    <span className="bg-[#F1F7FF] px-4 py-2 rounded-full text-sm self-start">Battery</span>
                    <div className="flex flex-col justify-start items-start gap-4 py-6 md:py-8">
                        <h1 className="text-[24px] md:text-[48px] font-bold text-start w-full md:w-[65%] leading-[1.1]">Months of power. Not days.</h1>
                        <p className="text-[14px] md:text-[18px] text-[#6B7280] text-start max-w-md">Our custom silicon and high-density battery architecture deliver an astonishing 60 days of battery life on a single charge. Spend more time adventuring, less time charging.</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[24px] md:text-[32px] font-bold text-start">60</h2>
                            <p className="text-[12px] md:text-[15px] text-[#6B7280] text-start">days active</p>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[24px] md:text-[32px] font-bold text-start">90</h2>
                            <p className="text-[12px] md:text-[15px] text-[#6B7280] text-start">min to full <br /> charge</p>
                        </div>
                    </div>
                </div>
                <div data-gsap="fade-up" className="w-full md:w-auto">
                    <Image src={Battery} alt="Overview Hero" width={1000} height={1000} className="w-full h-auto rounded-[8px]" />
                </div>
            </div>

            <div data-gsap="fade-up" className="flex flex-col justify-center items-center gap-2 py-10 md:py-20">
                <h1 className="text-[25px] md:text-[38px] font-bold text-center leading-[1.1] w-[70%] md:w-full">The future of pet care is here.</h1>
                <p className="text-[14px] md:text-[18px] text-[#6B7280] text-center w-[80%] md:w-full">Pre-order today and be the first to experience Onyx.</p>
            </div>
            
            <div data-gsap="fade-up" className="flex justify-center">
                <Link href="/store" className="bg-black cursor-pointer hover:bg-gray-800 transition-colors duration-300 text-white px-[40px] py-[16px] rounded-[8px] text-[16px] md:text-[20px] inline-block">Pre-order Now</Link>
            </div>
        </div>
    )
}
