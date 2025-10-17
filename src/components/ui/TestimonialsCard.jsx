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
                <img className="rounded-full w-[200px] h-[200px] absolute -top-30" src={img} alt={"Foto de " + name} />
                <div className="sm:p-8 p-2 md:p-4 flex flex-col sm:gap-4 gap-8">
                    <span className="flex flex-col mt-10 text-center">
                        <h1 className="sm:text-2xl text-lg">{name}</h1>
                        <h1 className="sm:text-md text-sm font-light">{occupation}</h1>
                    </span>
                    <span>
                        <FiveStar />
                    </span>
                    <span className="sm:text-lg text-xs">
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
