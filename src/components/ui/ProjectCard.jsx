import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaFolderOpen } from "react-icons/fa";
import { useState } from "react";
import { getTechIcon } from "../../util/getTechIcon";

const ProjectCard = ({
    title,
    description,
    image,
    link,
    github,
    technologies = [],
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-[#1f1f1f] border border-[#555] rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-gray-800/30 hover:scale-105 transition-all ease-in-out duration-300">
            {/* Imagem */}
            <div className="w-full h-auto overflow-hidden p-2 rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-left-top hover:grayscale-0 transition-all duration-300"
                />
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col gap-4 flex-grow">
                {/* Título */}
                <div className="flex items-center gap-2">
                    <FaFolderOpen className="text-gray-400 text-xl" />
                    <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
                </div>

                {/* Descrição */}
                <p className="text-gray-400 text-sm">{description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 bg-[#2a2a2a] text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-600 hover:bg-gray-700 transition-all ease-in-out duration-500"
                        >
                            {getTechIcon(tech)}
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões */}
            <div
                className="flex gap-3 p-4 border-t border-[#4595FF]/30 sm:flex-row flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-[radial-gradient(circle_at_center,_#3B5CFF,_#4D83CB)] text-white font-medium rounded-md py-2 transition-transform hover:scale-[1.02]"
                >
                    <SiVercel
                        className={
                            "text-lg transition-all duration-200 ease-in-out" +
                            (isHovered ? " scale-102 rotate-90" : "")
                        }
                    />
                    Demonstração
                </a>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-[radial-gradient(circle_at_center,_#333,_#111)] text-white font-medium rounded-md py-2 transition-transform hover:scale-105"
                >
                    <FaGithub className="text-lg" />
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
