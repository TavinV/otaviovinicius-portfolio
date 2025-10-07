import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

import { useState } from "react";

import Button from "./Button";

const nav = ['Projetos', 'Depoimentos', 'Serviços'];
const socials = [
    { name: "Linkedin", icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/otavioviniciusflauzino/' },
    { name: "Github", icon: <FaGithub />, link: 'https://github.com/TavinV' },
    { name: "Instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/tavinvinicius' },
];


const MobileMenu = ({ isOpen, toggleMenu }) => {
    if (!isOpen) return null;
    return (
        <div className="absolute right-0 md:hidden flex flex-col z-20 top-16 w-fit h-fit bg-gray-900 shadow-md p-4 bg-opacity-25">
            <ul className="flex flex-col items-end gap-6">
                {nav.map((item) => (

                    <li className="hover:scale-105 transition-all ease-in text-white text-md" key={item} onClick={() => toggleMenu(false)}>
                        <a href={`/${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="flex w-full items-center justify-between p-4 text-white">
            <h2 className="md:hidden text-sm font-bold">Otávio Vinícius</h2>
            <nav className="md:flex hidden">
                <ul className="flex gap-4">
                    {socials.map((social) => (
                        <li key={social.link}>
                            <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-200 hover:scale-105 active:scale-100 transition ease-in">
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="md:flex hidden">
                <ul className="flex gap-6">
                    {nav.map((item) => (
                        <li className="hover:scale-105 transition-all ease-in" key={item}>
                            <a  href={`/${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="md:flex hidden">
                <Button variant="bordered">Contato</Button>
            </div>

            <div className="md:hidden flex">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-gray-400 hover:text-gray-200 hover:scale-105 active:scale-100 transition ease-in">
                    {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                </button>
            </div>
            {isMenuOpen && (
                <MobileMenu isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
            )}
        </header>
    );
};

export default Header;