import Button from './Button';
import useWhatsApp from '../../hooks/useWhatsapp';

import {
    FaGlobe,                // 🌐 Ícone de globo
    FaShoppingCart as Cart, // 🛒 Carrinho
    FaRegCheckCircle as CheckCircle,
    FaServer,               // 🖥️ Servidor
    FaChartLine             // 📈 Gráfico de linha
} from 'react-icons/fa';

import {
    FaGear as Gear,
    FaBoltLightning as Lightning
} from 'react-icons/fa6';


const ServiceCard = ({ title, description, icon, features }) => {
    const getIcon = (iconName) => {
        const iconProps = { className: "w-8 h-8 text-[#4595FF]" };

        switch (iconName) {
            case 'Globe':
                return <FaGlobe {...iconProps} />;
            case 'Lightning':
                return <Lightning {...iconProps} />;
            case 'Gear':
                return <Gear {...iconProps} />;
            case 'Server':
                return <FaServer {...iconProps} />;
            case 'Cart':
                return <Cart {...iconProps} />;
            case 'Graph':
                return <FaChartLine {...iconProps} />;
            default:
                return <FaGlobe {...iconProps} />;
        }
    };

    const { contactAboutService } = useWhatsApp();

    return (
        <div className="group bg-gray-900/40 backdrop-blur-lg rounded-xl p-6 border border-[#4595FF]/20 hover:border-[#4595FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer flex flex-col h-full">
            {/* Conteúdo superior que pode variar em altura */}
            <div className="flex-1 justify-between">
                <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#4595FF]/10 rounded-lg mr-4 group-hover:bg-[#4595FF]/20 transition-colors">
                        {getIcon(icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                <p className="text-gray-300 py-4 mb-4 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#4595FF] mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botão sempre fixo no final */}
            <div className="mt-4 pt-4 border-t border-[#4595FF]/20">
                <Button variant="bordered" className="w-full mt-2" onClick={() => contactAboutService(title)}>
                    Contratar
                </Button>
            </div>
        </div>
    );
};

export default ServiceCard;