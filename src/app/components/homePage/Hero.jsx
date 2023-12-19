import Image from 'next/image'
import Button from '../sheard/button/Button'
import { MdOutlineAddIcCall } from 'react-icons/md'
import element1 from '../../assets/image/elements/element1.png'
import element2 from '../../assets/image/elements/element2.png'
import element3 from '../../assets/image/elements/element3.png'
import element4 from '../../assets/image/elements/element4.png'

export default function Hero() {
    return (
        <div className="  sm:pt-28 pt-20 pb-16">
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96' />
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem]' />

            <div className=' relative 	'>
                <Image src={element2} alt='element1' className='  2xl:w-40 sm:w-32 w-20 absolute 2xl:-top-24 sm:-top-28 -top-[4.5rem]' />
                <Image src={element3} alt='element1' className=' lg:w-32 w-20 absolute lg:top-28 sm:top-[8.5rem] top-[80%] lg:right-32 sm:right-40 right-12' />
                <Image src={element4} alt='element1' className=' sm:w-24 w-16 absolute lg:-bottom-[18%] sm:-bottom-[8%] bottom-0 lg:left-[35%] sm:left-[25%] left-[10%]' />

                <h1 className=' sm:text-6xl text-4xl text-white text-center lg:w-10/12 mx-auto sm:leading-[4rem]'>Experience the difference in your digital thinking</h1>
                <p className=" text-lg lg:w-2/4 mx-auto my-7 text-center  text-gray-300">
                    At Notex, we are more than a software company; we are your strategic partner in unleashing technology full potential.
                </p>
                <div className=' flex justify-center mt-10'>
                    <Button type='button' text='Contact' isFill={false} icon={<MdOutlineAddIcCall />} />
                </div>
            </div>
        </div>
    )
}
