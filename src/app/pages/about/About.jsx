import Image from 'next/image'
import aboutImg from '../../assets/image/about/about3.png'

export default function About() {
    return (
        <div className=" pb-12 pt-32">

            <div className=" text-center">
                <p className=" text-lime-400 text-xl font-medium border border-green-300 inline-block px-5 skew-y-6">About Us</p>
                <h1 className=" text-5xl text-white font-medium my-4">Decoding Notex<span className="text-lime-400">,</span> Your Tech Company</h1>
                <div className=" h-[2px] bg-lime-400 mt-1.5 w-2/6 mx-auto"></div>
            </div>

            <div className='flex items-center gap-10'>
                <Image src={aboutImg} alt='aboutImg' className=' w-1/2' />
                <div className='w-1/2'></div>
            </div>
        </div>
    )
}
