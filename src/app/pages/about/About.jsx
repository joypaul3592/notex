import Image from 'next/image'
import aboutImg from '../../assets/image/about/about1.png'
import aboutImg2 from '../../assets/image/about/about2.png'
import { TbCheckbox } from "react-icons/tb";
import TitleBox from '@/app/components/sheard/TitleBox';

export default function About() {
    const benefitsArray = [
        { id: 1, name: "Innovation & Technology Mastery" },
        { id: 2, name: "User-Centric Design" },
        { id: 3, name: "Agile Development" },
        { id: 4, name: "Cross-Platform Compatibility" },
        { id: 5, name: "Security and Authentication" },
        { id: 6, name: "AWS Integration for Scalability" },
        { id: 7, name: "Stylish UI with Tailwind" },
        { id: 8, name: "Transparent Communication" },
        { id: 9, name: "Customized Solutions" },
        { id: 10, name: "Proactive Problem Solving" },
        { id: 11, name: "Documentation and Support" },
        { id: 12, name: "Scalability for Future Growth" },
    ];

    return (
        <div className=" pb-12 pt-32 z-[10] relative">
            <TitleBox tag='About Us' title1='Decoding Notex' title2='About Your Tech Company' />

            <div className='flex items-start gap-10 py-10 mt-16'>
                <div className=' relative w-1/2'>
                    <Image src={aboutImg} alt='aboutImg' className=' w-full' />
                    <Image src={aboutImg2} alt='aboutImg' className=' w-32 absolute -top-10 left-12 opacity-80' />
                </div>
                <div className='w-1/2'>
                    <h1 className=' text-3xl font-medium text-lime-400'>What is Notex ?</h1>
                    <p className=' text-gray-300 mt-2 text-justify'>
                        Notex is a cutting-edge <span className=' text-lime-400 font-medium'>software company</span> dedicated to delivering innovative and tailored digital solutions. Specializing in <span className=' text-lime-400 font-medium'>full-stack development</span>, we harness the power of technologies such as React, Node.js, and MongoDB to craft seamless applications. Our passion lies in transforming concepts into exceptional, user-centric <span className=' text-lime-400 font-medium'>software experiences</span>.</p>

                    <div className=' text-white grid grid-cols-2 gap-x-12 gap-y-2 mt-5'>
                        {
                            benefitsArray?.map(benefit => <div className='flex items-center gap-2' key={benefit?.id}>
                                <TbCheckbox className=' text-lime-400' /> <p className=' hover:text-lime-400 cursor-pointer'>{benefit?.name}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
