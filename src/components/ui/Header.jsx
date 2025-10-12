import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaWrench } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { TbBriefcase2Filled } from 'react-icons/tb';
import { MdContactPage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

import Button from "./Button";
import Logo from "./Logo";

const IconLink = ({ icon, link, name }) => (
  <span className="flex justify-between items-center gap-3 text-white text-md">
      {icon}
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all ease-in">
      {name}
    </a>
  </span>
);

const nav = ["Projetos", "Depoimentos", "Serviços"];
const socials = [
  { name: "Linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/otavioviniciusflauzino/" },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/TavinV" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/tavinvinicius" },
];

const menuLinks = [
  { name: "Projetos", icon: <TbBriefcase2Filled />, link: "#projetos" },
  { name: "Depoimentos", icon: <FaHeart />, link: "#depoimentos" },
  { name: "Serviços", icon: <FaWrench />, link: "#servicos" },
  { name: "Baixar CV", icon: <MdContactPage />, link: "#sobre" },
  { name: "Contato", icon: <FaPhoneAlt />, link: "#contato" },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.35,
          }}
          className="absolute left-0 top-16 md:hidden flex flex-col z-20 w-full h-fit
             bg-black/40 backdrop-blur-md shadow-md p-8 pr-15"
        >
          <ul className="flex flex-col items-start gap-6">
            {menuLinks.map((item) => (
              <li key={item.name} className="hover:scale-105 transition-all ease-in" onClick={() => toggleMenu(false)}>
                <IconLink key={item.name} icon={item.icon} link={item.link} name={item.name} />
              </li>
            ))}

            <div className="w-full h-[1px] bg-gray-600 my-2"></div>

            {socials.map((social) => (
              <li key={social.name} className="hover:scale-105 transition-all ease-in" onClick={() => toggleMenu(false)}>
                <IconLink key={social.name} icon={social.icon} link={social.link} name={social.name} />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full bg-transparent items-center h-16 justify-between p-4 text-white sticky top-0 z-20">

        <div className="md:hidden flex">
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-3xl text-gray-400 hover:text-gray-200 hover:scale-105 active:scale-100 transition ease-in"
            >
                {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
        </div>

      <MobileMenu isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        <Logo />


      <nav className="md:flex hidden">
        <ul className="flex gap-6">
          {nav.map((item) => (
            <li className="hover:scale-105 transition-all ease-in" key={item}>
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:flex hidden">
        <Button variant="bordered">Contato</Button>
      </div>
    </header>
  );
};

export default Header;
