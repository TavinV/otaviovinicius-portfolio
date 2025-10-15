/* eslint-disable no-unused-vars */
import MyPicture from "../ui/MyPicutre";
import { TbBriefcase2Filled } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";
import DecryptedText from "../ui/DecryptedText";
import { motion } from "framer-motion";
import { scrollTo } from "../../util/scrollTo"; 

const HeroButton = ({ variant, children, onClick, className }) => {
    const baseClasses =
        "px-2 py-4 w-[100%] sm:w-full h-full rounded-sm font-medium transition-all duration-500 ease-in-out";

    if (variant === "solid") {
        return (
            <motion.button
                onClick={onClick}
                className={`${baseClasses} text-white bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] 
                  bg-[length:200%_100%] bg-left hover:bg-right hover:scale-102 hover:bg-blue-600 ${className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.button>
        );
    } else if (variant === "bordered") {
        return (
            <motion.button
                onClick={onClick}
                className={`${baseClasses} border border-[#4595FF] hover:text-blue-400 hover:from-[#4595FF] hover:to-[#3B5CFF] hover:scale-102  ${className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.button>
        );
    }
};

const HeroSection = () => {
    const fadeUp = { opacity: 0, y: 20 };
    const fadeUpVisible = { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } };

    return (
        <section className="w-full flex flex-col items-center px-6 py-12 relative">

            {/* Foto */}
            <motion.div initial={fadeUp} animate={fadeUpVisible}>
                <MyPicture height="32" />
            </motion.div>

            {/* Saudação */}
            <div className="flex flex-col items-center mt-6 gap-2 text-center">
                <motion.div initial={fadeUp} animate={fadeUpVisible}>
                    <DecryptedText sequential={true} speed={40} animateOn="view" revealDirection="start" text="👋 Olá, eu me chamo Otávio Vinícius" />
                </motion.div>
                <motion.div initial={fadeUp} animate={fadeUpVisible} transition={{ delay: 0.1 }}>
                    <DecryptedText sequential={true} speed={40} animateOn="view" revealDirection="start" text="📍 Mogi das Cruzes - SP" />
                </motion.div>
            </div>

            {/* Apresentação */}
            <div className="mt-12 max-w-3xl w-full text-center flex flex-col gap-4">
                <motion.p className="text-2xl font-semibold leading-snug" initial={fadeUp} animate={fadeUpVisible}>
                    Desenvolvedor{" "}
                    <span className="italic bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] bg-clip-text text-transparent">
                        Web Full Stack
                    </span>{" "}
                    apaixonado por transformar problemas em{" "}
                    <span className="italic bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] bg-clip-text text-transparent">
                        soluções digitais
                    </span>.
                </motion.p>
                <motion.p className="text-gray-300 leading-relaxed text-xs" initial={fadeUp} animate={fadeUpVisible} transition={{ delay: 0.1 }}>
                    Concluinte do curso técnico em desenvolvimento de sistemas com 6 anos de experiência em programação. Empenhado em criar soluções eficientes sob medida para a sua empresa ou negócio pessoal.
                </motion.p>
            </div>

            {/* Botões CTA */}
            <div className="mt-12 max-w-3xl w-full flex flex-col sm:flex-row justify-between gap-6">
                <HeroButton variant="bordered" onClick={() =>{
                    // Clicar no download-cv
                    const downloadCv = document.getElementById("download-cv");
                    downloadCv.click();
                }}>
                    <a id="download-cv" href="/curriculo-otavio-vinicius.pdf" download={"curriculo-otavio-vinicius.pdf"}>
                        <FaDownload className="mr-2 inline" /> Baixar Currículo
                    </a>
                </HeroButton>
                <HeroButton variant="solid" onClick={() => scrollTo("serviços")}>
                    <TbBriefcase2Filled className="mr-2 inline" /> Comece seu projeto
                </HeroButton>
            </div>

        </section>
    );
};

export default HeroSection;
