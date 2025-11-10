import { FaStar } from "react-icons/fa";

const FiveStar = () => {
    return (
        <span className="flex text-amber-300 gap-1">
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
        </span>
    );
}

const TestimonialCard = ({ img, name, occupation, message }) => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col relative items-center bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-2xl p-8 hover:scale-[1.02] hover:bg-white/20 transition-all ease-in-out duration-500 shadow-lg hover:shadow-xl">
                {/* Imagem */}
                <div className="relative -top-16 mb-[-2rem]">
                    <img
                        className="rounded-full w-28 h-28 border-4 border-white/30 object-cover shadow-lg"
                        src={img}
                        alt={"Foto de " + name}
                    />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col items-center text-center w-full space-y-4">
                    {/* Nome e ocupação */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold text-white">{name}</h1>
                        <p className="text-base font-light text-white/80 mt-1">{occupation}</p>
                    </div>

                    {/* Avaliação com estrelas */}
                    <div className="flex justify-center py-2">
                        <FiveStar />
                    </div>

                    {/* Depoimento com scroll suave */}
                    <div className="w-full max-h-48 overflow-y-auto custom-scrollbar">
                        <p className="text-white/90 text-base leading-relaxed text-left px-2 py-2">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;