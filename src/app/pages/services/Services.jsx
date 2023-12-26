import ServiceCard from "@/app/components/card/ServiceCard";


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
        <div className="z-[10] relative">
            <div className=" text-center">
                <p className=" text-lime-400 text-xl font-medium border border-green-300 inline-block px-5 skew-y-6 mb-3">Our Services</p>
                <h1 className=" w-8/12 mx-auto text-5xl text-white  my-4">Exceptional Service<span className="text-lime-400">,</span> Digital Solutions For You.</h1>
                <div className=" h-[2px] bg-lime-400 mt-1.5 w-2/6 mx-auto"></div>
            </div>

            <div className=" grid grid-cols-5 py-12">
                {
                    services?.map(service => <ServiceCard key={service?.id} service={service} />)
                }
            </div>

        </div>
    )
}
