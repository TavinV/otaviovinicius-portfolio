import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

import Logo from "./Logo";
import Button from "./Button";

const nav = ["Projetos", "Depoimentos", "Serviços"];
const socials = [
  { name: "Linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/otavioviniciusflauzino/" },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/TavinV" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/tavinvinicius" },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.35,
          }}
          className="absolute left-0 top-16 md:hidden flex flex-col z-20 w-fit h-fit bg-black bg-opacity-25 shadow-md p-8 pr-15 backdrop-blur-md"
        >
          <ul className="flex flex-col items-start gap-6">
            {nav.map((item) => (
              <li
                key={item}
                onClick={() => toggleMenu(false)}
                className="hover:scale-105 transition-all ease-in text-white text-md"
              >
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}

            {socials.map((item) => (
              <li
                key={item.name}
                onClick={() => toggleMenu(false)}
                className="hover:scale-105 transition-all ease-in text-white text-md"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
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
    <header className="flex w-full bg-[#05041F] items-center justify-between p-4 text-white relative">
        <Logo />

        <div className="md:hidden flex">
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-3xl text-gray-400 hover:text-gray-200 hover:scale-105 active:scale-100 transition ease-in"
            >
                {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
        </div>

      <MobileMenu isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />


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
