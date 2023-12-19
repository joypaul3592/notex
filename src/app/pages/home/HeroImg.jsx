import Image from 'next/image'
import Row from '@/app/components/sheard/row/Row'
import heroImg from '../../assets/image/home/homeimg.png'

export default function HeroImg() {
    return (
        <div className="text-white h-[22rem] overflow-hidden border-b border-b-lime-400">
            <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
            <Row />
        </div>
    )
}
