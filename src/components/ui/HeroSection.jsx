import MyPicture from "./MyPicutre";
import { TbBriefcase2Filled } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";
import DecryptedText from "./DecryptedText";

const HeroButton = ({ variant, children, onClick }) => {
    if (variant === "solid") {
        return (
            <button
                onClick={onClick}
                className="px-6 py-4 h-full rounded-sm font-medium text-white
                   bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] 
                   bg-[length:200%_100%] bg-left
                   transition-all duration-500 ease-in-out
                   hover:bg-right hover:scale-102 hover:bg-blue-600
                   w-full sm:w-1/2
                   "
            >
                {children}
            </button>
        );
    } else if (variant === "bordered") {
        return (
            <button
                onClick={onClick}
                className="px-6 py-4     w-full sm:w-1/2 h-full rounded-sm font-medium transition-all ease-in-out 
                    duration-500
                   border border-[#4595FF] active:scale-100
                   hover:bg-gradient-to-r hover:from-[#4595FF] hover:to-[#3B5CFF] hover:scale-102 hover:text-white"
            >
                {children}
            </button>
        );
    }
};

const HeroSection = () => {
    return (
        <section className="w-full flex flex-col items-center px-6 py-12 relative">

            {/* Foto */}
            <MyPicture height="32" />

            {/* Saudação */}
            <div className="flex flex-col items-center mt-6 gap-2 text-center">
                <DecryptedText sequential={true} speed={40} animateOn="view" revealDirection="start" text="👋 Olá, eu me chamo Otávio Vinícius"  />
                <DecryptedText sequential={true} speed={40} animateOn="view" revealDirection="start" text="📍 Mogi das Cruzes - SP"  />
            </div>

            {/* Apresentação */}
            <div className="mt-12 max-w-3xl w-full text-center flex flex-col gap-4">
                <p className="text-2xl font-semibold leading-snug">
                    Desenvolvedor{" "}
                    <span className="italic bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] bg-clip-text text-transparent">
                        Web Full Stack
                    </span>{" "}
                    apaixonado por transformar problemas em{" "}
                    <span className="italic bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] bg-clip-text text-transparent">
                        soluções digitais
                    </span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-xs">
                    Concluinte do curso técnico em desenvolvimento de sistemas com 6 anos de experiência em programação. Empenhado em criar soluções eficientes sob medida para a sua empresa ou negócio pessoal.
                </p>
            </div>

            {/* Botões CTA */}
            <div className="mt-12 max-w-3xl w-full flex flex-col sm:flex-row justify-between gap-6">
                <HeroButton variant="bordered" className="w-full sm:w-1/2">
                    <FaDownload className="mr-2 inline" /> Baixe meu CV
                </HeroButton>
                <HeroButton variant="solid" className="w-full sm:w-1/2">
                    <TbBriefcase2Filled className="mr-2 inline" /> Comece seu projeto
                </HeroButton>
            </div>

        </section>
    );
};

export default HeroSection;