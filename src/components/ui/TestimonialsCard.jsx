import { FaStar } from "react-icons/fa";

const FiveStar = () => {
    return (
        <span className="flex text-amber-300 gap-1.5">
            < FaStar />
            < FaStar />
            < FaStar />
            < FaStar />
            < FaStar />       
        </span>
    );
}

const TestimonialCard = ({img, name, occupation, message}) =>{
    return (
        <div className="flex pt-30 sm:pt-20 md:pt-40">
            <div className="flex flex-col relative items-center bg-white/10 backdrop-blur-sm w-full p-8 hover:scale-105 transition-all ease-in-out duration-500">
                <img className="rounded-full absolute -top-30" src={img} alt={"Foto de " + name} />
                <div className="p-8 flex flex-col gap-4">
                    <span className="flex flex-col mt-10 text-center">
                        <h1 className="text-2xl">{name}</h1>
                        <h1 className="text-md font-light">{occupation}</h1>
                    </span>
                    <span>
                        <FiveStar />
                    </span>
                    <span>
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;