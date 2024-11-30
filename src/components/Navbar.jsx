import { NavbarToggle } from './NavbarToggle';
import logoMembranas202 from '/membranas202Logo.png';
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  const handleMenuClick = (item) => {
    setActiveItem(item)
  }

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        controls.start({
          height: "90px",
          transition: { duration: 0.3 },
        });
      } else {
        controls.start({
          height: "100px",
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      className="flex justify-center fixed top-0 z-10 w-full text-black bg-gray-850 border-b-2 border-b-orange-600"
      initial={{ height: "100px"}}
      animate={controls}
    >
      <article className="flex justify-between items-center w-11/12 2xl:w-3/4 p-2 text-xl text-gray-100">
        <nav className={`${isMenuOpen ? 'flex flex-col' : 'flex justify-between w-full'}`}>
          <div className="flex items-center">
            <figure className="w-10 h-10">
              <img className="w-full h-full" src={logoMembranas202} alt="Logo" />
            </figure>
            <h2 className="text-2xl text-oswald font-semibold">
              Membranas <span className="">202</span>
            </h2>
          </div>

          <ul className={`${isMenuOpen ? 'flex pt-1' : 'hidden'} text-base sm:text-lg lg:text-xl lg:flex gap-2 lg:gap-4`}>
            <li className={`font-semibold itemNav ${activeItem === 'Inicio' ? "active" : ""}`}>
              <a data-text="Inicio" href="#" onClick={() => handleMenuClick('Inicio')}>Inicio</a>
            </li>
            <li className={`font-semibold itemNav ${activeItem === 'Nosotros' ? "active" : ""}`}>
              <a data-text="Nosotros" href="#nosotros" onClick={() => handleMenuClick('Nosotros')}>Nosotros</a>
            </li>
            <li className={`font-semibold itemNav ${activeItem === 'Servicios' ? "active" : ""}`}>
              <a data-text="Servicios" href="#servicios" onClick={() => handleMenuClick('Servicios')}>Servicios</a>
            </li>
            <li className={`font-semibold itemNav ${activeItem === 'Contacto' ? "active" : ""}`}>
              <a data-text="Contacto" href="#contacto" onClick={() => handleMenuClick('Contacto')}>Contacto</a>
            </li>
          </ul>
        </nav>

        <NavbarToggle toggle={handleToggle}/>
      </article>
    </motion.header>
  );
}
