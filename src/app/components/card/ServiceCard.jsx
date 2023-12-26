import { BsArrowRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineArrowCircleRight } from "react-icons/md";
export default function ServiceCard({ service }) {
    return (
        <div className="h-96 w-full border transition-all ease-linear duration-300 cursor-pointer border-lime-400 text-white flex flex-col items-center justify-around group pt-12 relative overflow-hidden">

            <div className=" absolute -top-96 left-0 bg-lime-400 h-96 w-full  transition-all ease-linear duration-300  group-hover:top-0 p-5 text-black  opacity-0  group-hover:opacity-100">
                <h1 className=" text-lg font-medium text-black ">{service.name}</h1>
                <div className="mt-5">
                    {
                        service.serviceList?.map((s) => <div className="flex items-start gap-2 my-2.5 cursor-pointer hover:text-blue-800" key={s.id}>
                            <MdOutlineArrowCircleRight className="mt-[4px]" /> <p>{s}</p>
                        </div>)
                    }
                </div>
            </div>
            <h1 className="text-2xl w-[70%] -rotate-90 group-hover:mt-7 group-hover:opacity-0 group-hover:invisible transition-all ease-linear duration-300">
                {service.name}
            </h1>
            <div className=" text-4xl  -rotate-90 group-hover:rotate-45 transition-all ease-linear duration-300 text-lime-400 group-hover:text-black"><CiLocationArrow1 /></div>
        </div >
    );
}