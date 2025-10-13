import { useState } from "react";

import LogoLoop from "../ui/LogoLoop";
import TextType from "../ui/TextType";

// Logos
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiJsonwebtokens } from 'react-icons/si';
import { SiCloudinary } from 'react-icons/si';
import { BiLogoFigma } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa6';
import { SiVercel } from 'react-icons/si';
import { SiRender } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';

const DisplayedLogo = ({ logo, title, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-24 h-24 flex items-center justify-center rounded-md transition-all duration-300 bg-radial from-blue-900 to-blue-950 hover:scale-105 hover:shadow-lg"
            >
                <div className={"text-4xl transition ease-in-out duration-500" + (isHovered ? " scale-120" : "")} style={{ color: isHovered ? color : '#FFFFFF' }}>
                    {logo}
                </div>
            </div>
            <span className="text-white text-sm font-extralight">{title}</span>
        </div>
    );
};

const logos = [
    { node: <DisplayedLogo logo={<SiMysql />} title="MySQL" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<SiMongodb />} title="MongoDB" color="#47A248" /> },
    { node: <DisplayedLogo logo={<SiExpress />} title="Express.js" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<FaNodeJs />} title="Node.js" color="#339933" /> },
    { node: <DisplayedLogo logo={<SiJsonwebtokens />} title="JWT" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<SiCloudinary />} title="Cloudinary" color="#FF5722" /> },
    { node: <DisplayedLogo logo={<BiLogoFigma />} title="Figma" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<BiLogoTailwindCss />} title="Tailwind CSS" color="#06B6D4" /> },
    { node: <DisplayedLogo logo={<FaReact />} title="React" color="#61DAFB" /> },
    { node: <DisplayedLogo logo={<SiVercel />} title="Vercel" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<SiRender />} title="Render" color="#FFFFFF" /> },
    { node: <DisplayedLogo logo={<FaGitAlt />} title="Git" color="#F05032" /> },
    { node: <DisplayedLogo logo={<SiArduino />} title="Arduino" color="#00979D" /> },
];

const TechSection = () => {
    return (
        <section className="w-full flex flex-col items-center py-12">

            <div className="flex flex-col items-center text-center px-6">
                <h2 className="text-2xl font-semibold mb-4">Tecnologias Dominadas</h2>
                <h2 className="text-xl text-center font-semibold mb-6">Ferramentas usadas para fazer o seu <TextType textColors={["#4595FF", "#3B5CFF"]} cursorCharacter="_" pauseDuration={2500} typingSpeed={75} text={["site", "sistema", "e-commerce", "negócio digital"]} className="text-blue-500"></TextType> ganhar vida</h2>
            </div>
            
            <div className="h-30 w-full mt-10">
                <LogoLoop logoHeight={60} speed={20} gap={30} logos={logos} />
            </div>
        </section>
    );
};

export default TechSection;
