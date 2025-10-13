import MyPicture from "../ui/MyPicutre";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const email = "otavioviniciusads@gmail.com";
const phone = "+55 (11) 95023-1230";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white mt-32">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Coluna 1 */}
                <div className="flex items-start gap-4">
                    <MyPicture height="16" />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">Otávio Vinícius</h2>
                        <p className="text-sm text-gray-300">Full Stack Developer</p>
                    </div>
                </div>

                {/* Coluna 2 - Links Rápidos */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a href="#sobre" className="hover:text-white transition-colors">
                                Baixar CV
                            </a>
                        </li>
                        <li>
                            <a href="#projetos" className="hover:text-white transition-colors">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#servicos" className="hover:text-white transition-colors">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="#depoimentos" className="hover:text-white transition-colors">
                                Depoimentos
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Coluna 3 - Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Social</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/otavioviniciusflauzino/"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <FaLinkedin /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/TavinV"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <FaGithub /> Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/tavinvinicius"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Coluna 4 - Contato */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contato</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a
                                href={`mailto:${email}`}
                                className="hover:text-white transition-colors"
                            >
                                {email}
                            </a>
                        </li>
                        <li>
                            <a
                                href={`tel:${phone}`}
                                className="hover:text-white transition-colors"
                            >
                                {phone}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Faixa inferior */}
            <div className="w-full bg-neutral-900 py-4 text-center text-sm text-gray-400">
                © 2025 Otávio Vinícius Flauzino de Souza. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
