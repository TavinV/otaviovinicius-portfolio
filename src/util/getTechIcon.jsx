import { FaReact, FaNodeJs, FaCloudversify } from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiJsonwebtokens,
    SiTailwindcss,
    SiRender,
    SiVercel,
    SiCloudinary
} from "react-icons/si";

import { FaMicrochip } from 'react-icons/fa6';

export function getTechIcon(tech) {
    const normalized = tech.toLowerCase();
    const baseClass = "text-white text-xl";

    switch (normalized) {
        case "react":
            return <FaReact className={baseClass} />;
        case "node.js":
        case "node":
            return <FaNodeJs className={baseClass} />;
        case "express.js":
        case "express":
            return <SiExpress className={baseClass} />;
        case "mongodb":
            return <SiMongodb className={baseClass} />;
        case "jwt":
            return <SiJsonwebtokens className={baseClass} />;
        case "tailwindcss":
        case "tailwind":
            return <SiTailwindcss className={baseClass} />;
        case "render":
            return <SiRender className={baseClass} />;
        case "vercel":
            return <SiVercel className={baseClass} />;
        case "cloudinary":
            return <SiCloudinary className={baseClass} />;
        case "esp32":
            return <FaMicrochip className={baseClass} />;
        case "chart.js":
            return <img src="/img/chartjs.png" className="w-4 h-4 filter invert"></img>
        default:
            return <FaCloudversify className={baseClass} />;
    }
}
