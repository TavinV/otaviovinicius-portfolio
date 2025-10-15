import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbBriefcase2Filled } from "react-icons/tb";
import { MdContactPage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Button from "../ui/Button";
import Logo from "../ui/Logo";

import { contactForBusiness } from "../../services/whatsapp";

import { scrollTo } from "../../util/scrollTo"; 

const IconLink = ({ icon, name, link, onClick }) => (
  <span className="flex justify-between items-center gap-3 text-white text-md">
    {icon}
    <button
      onClick={onClick}
      className="hover:scale-105 transition-all ease-in text-left"
    >
      {name}
    </button>
  </span>
);

const nav = ["Projetos", "Depoimentos", "Serviços"];
const socials = [
  { name: "Linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/otavioviniciusflauzino/" },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/TavinV" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/tavinvinicius" },
];

const menuLinks = [
  { name: "Projetos", icon: <TbBriefcase2Filled />, link: "projetos" },
  { name: "Depoimentos", icon: <FaHeart />, link: "depoimentos" },
  { name: "Serviços", icon: <FaWrench />, link: "serviços" },
  { name: "Baixar CV", icon: <MdContactPage />, link: "-" },
  { name: "Contato", icon: <FaPhoneAlt />, link: "serviços" },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const handleMenuClick = (item) => {
    if (item.name === "Contato") {
      contactForBusiness();
      toggleMenu(false);
      return;
    }

    if (item.name === "Baixar CV") {
      const downloadCv = document.getElementById("download-cv");
      if (downloadCv) downloadCv.click();
      toggleMenu(false);
      return;
    }

    scrollTo(item.link);
    toggleMenu(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 0.95 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.35,
          }}
          className="absolute left-0 top-16 md:hidden flex flex-col z-20 w-full h-fit bg-black/95 backdrop-blur-2xl shadow-md p-8 pr-15"
        >
          <ul className="flex flex-col items-start gap-6">
            {menuLinks.map((item) => (
              <li
                key={item.name}
                className="hover:scale-105 transition-all ease-in"
                onClick={() => handleMenuClick(item)}
              >
                <IconLink icon={item.icon} name={item.name} />
              </li>
            ))}

            <div className="w-full h-[1px] bg-gray-600 my-2"></div>

            {socials.map((social) => (
              <li key={social.name} className="hover:scale-105 transition-all ease-in">
                <IconLink
                  icon={social.icon}
                  name={social.name}
                  onClick={() => window.open(social.link, "_blank")}
                />
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
    <header className="flex w-full bg-transparent items-center h-16 justify-between p-4 text-white sticky top-0 z-20 backdrop-blur-2xl">
      {/* Menu Mobile */}
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

      {/* Nav Desktop */}
      <nav className="md:flex hidden">
        <ul className="flex gap-6">
          {nav.map((item) => (
            <li
              className="hover:scale-105 transition-all ease-in cursor-pointer"
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:flex hidden">
        <Button variant="bordered" onClick={() => contactForBusiness()}>
          Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
