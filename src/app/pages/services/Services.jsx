import { BiCodeAlt } from "react-icons/bi";
import TitleBox from "@/app/components/sheard/TitleBox";
import Button from "@/app/components/sheard/button/Button";
import ServiceCard from "@/app/components/sheard/card/ServiceCard";

export default function Services() {

    const services = [
        {
            id: 1,
            name: 'Web Design & Development',
            serviceList: ['Website Design', 'UI/UX Design', 'Frontend Design', 'Figma to HTML', 'Figma to Next/React']
        },
        {
            id: 2,
            name: 'Backend Development',
            serviceList: ['Server-side Development', 'API Integration', 'Database Management', 'Node.js Development', 'Microservices Architecture']
        },
        {
            id: 3,
            name: 'App Development',
            serviceList: ['Mobile App Development', 'Cross-Platform Develop', 'Native App Development', 'App UI/UX Design', 'App Maintenance']
        },
        {
            id: 4,
            name: 'Digital Marketing',
            serviceList: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Online Advertising', 'Email Marketing']
        },
        {
            id: 5,
            name: 'E-commerce Solutions',
            serviceList: ['Online Store Development', 'Payment Gateway Integration', 'Product Catalog Management', 'E-commerce UX/UI Design']
        }
    ];

    return (
        <div className="z-[10] relative pt-10">
            <TitleBox tag='Our Services' title1='Exceptional Service' title2='Digital Solutions For You' />
            <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 py-12">
                {
                    services?.map(service => <ServiceCard key={service?.id} service={service} />)
                }
            </div>

            <div data-aos="fade-up" className=' flex justify-center mt-5'>
                <Button type='button' text='See More Services' isFill={false} icon={<BiCodeAlt />} />
            </div>
        </div>
    )
}
