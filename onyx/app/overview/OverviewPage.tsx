import Image from 'next/image'
import Lumina from '@/public/images/Lumina.svg'
import Titanium from '@/public/images/overview2.svg'
import Band from '@/public/images/overview3.svg'
import Obsidian from '@/public/images/Background.svg'
import Sandstone from '@/public/images/Background(1).svg'
import Forest from '@/public/images/Background(2).svg'

export default function OverviewPage() {
    return (
        <div className='flex flex-col justify-center items-center py-10 md:py-20 px-6 md:px-40 overflow-hidden'>
            <div className='text-center w-full'>
                <h1 className='text-4xl sm:text-6xl md:text-[80px] font-semibold w-full md:w-[60%] mx-auto leading-[1.1]'>Form, fused with function.</h1>
                <p className='text-base md:text-[18px] text-[#6B7280] font-medium w-full md:w-[45%] mx-auto leading-normal mt-4'>A revolutionary silhouette that contours naturally to your pet's neck, combining aerospace-grade materials with uncompromising aesthetics.</p>
            </div>
            <div className='mt-10 md:mt-20 w-full flex justify-center'>
                <Image src={Lumina} width={1000} height={1000} alt="" className='w-full h-auto max-w-5xl' />
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center py-12 md:py-28 gap-10 lg:gap-20'>
                <div className='flex flex-col justify-start text-center lg:text-left items-center lg:items-start'>
                        <h1 className='text-3xl md:text-[40px] font-semibold leading-[1.1]'>Aerospace Titanium.</h1>
                        <p className='text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full md:w-[80%] max-auto'>Forged from the same titanium used in spacecraft, the chassis is incredibly light yet exceptionally strong. Precision-milled to house our most advanced sensor array while maintaining a remarkably slim profile.</p>
                    <div className='flex gap-10 py-6 md:py-8'>
                        <span>
                            <h2 className='text-2xl md:text-[28px] font-semibold'>42g</h2>
                            <p className='text-[12px] md:text-[14px] text-[#6B7280] leading-normal'>Ultra-lightweight</p>
                        </span>
                        <span>
                            <h2 className='text-2xl md:text-[28px] font-semibold'>Grade 5</h2>
                            <p className='text-[12px] md:text-[14px] text-[#6B7280] leading-normal'>Titanium Alloy</p>
                        </span>
                    </div>
                </div>
                <div className='w-full '>
                    <Image src={Titanium} width={1000} height={1000} alt="" className='h-[500px]' />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row-reverse justify-between items-center py-12 md:py-28 gap-10 lg:gap-20'>
                <div className='flex flex-col justify-start text-center lg:text-left items-center lg:items-start'>
                        <h1 className='text-3xl md:text-[40px] w-[60%] font-semibold leading-[1.1]'>Soft to the touch. Tough on the Trail.</h1>
                        <p className='text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full md:w-[80%] max-auto'>The custom fluoroelastomer band is exceptionally durable, flexible, and completely hypoallergenic. Designed to glide smoothly over your dog's coat without catching, rubbing, or pulling.</p>
                </div>
                <div className='w-full'>
                    <Image src={Band} width={1000} height={1000} alt="" className='h-[500px]' />
                </div>
            </div>

            <div className='py-20'>
                <div className='text-center w-full'>
                    <h1 className='text-3xl md:text-[40px] font-semibold leading-[1.1]'>Three stunning finishes.</h1>
                    <p className='text-base md:text-[18px] text-[#6B7280] leading-normal py-4 w-full'>Meticulously color-matched to complement any coat.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center py-10 md:py-20 gap-10 lg:gap-20'>
                    <div className='bg-white w-full'>
                        <div className='flex flex-col justify-center items-center p-6 h-[470px]'>
                            <Image src={Obsidian} width={1000} height={1000} alt="" className='h-[500px] py-6' />
                            <h2 className='text-2xl md:text-[18px] font-semibold'>Midnight Black</h2>
                            <p className='text-base md:text-[14px] text-center text-[#6B7280] leading-normal py-4 w-full '>A deep, matte black finish achieved through physical vapor deposition.</p>
                        </div>
                    </div>
                    <div className='bg-white w-full'>
                        <div className='flex flex-col justify-center items-center p-6 h-[470px]'>
                            <Image src={Sandstone} width={1000} height={1000} alt="" className='h-[500px] py-6' />
                            <h2 className='text-2xl md:text-[18px] font-semibold'>Starlight</h2>
                            <p className='text-base md:text-[14px] text-center text-[#6B7280] leading-normal py-4 w-full'>A warm silver tone that elegantly catches the ambient light.</p>
                        </div>
                    </div>
                    <div className='bg-white w-full'>
                        <div className='flex flex-col justify-center items-center p-6 h-[470px]'>
                            <Image src={Forest} width={1000} height={1000} alt="" className='h-[500px] py-6' />
                            <h2 className='text-2xl md:text-[18px] font-semibold'>Horizon</h2>
                            <p className='text-base md:text-[14px] text-[#6B7280] text-center leading-normal py-4 w-full'>A refined copper hue inspired by the glow of early morning adventures.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
