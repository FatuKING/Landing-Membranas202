import { NavbarToggle } from './NavbarToggle';
import logoMembranas202 from '/membranas202Logo.png';
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export function Navbar() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        controls.start({
          height: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(25px)",
          transition: { duration: 0.3 },
        });
      } else {
        controls.start({
          height: "90px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(5px)",
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      className="flex justify-center fixed top-0 z-10 w-full"
      initial={{ height: "90px", backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(5px)" }}
      animate={controls}
    >
      <nav className="flex justify-between items-center w-11/12 2xl:w-3/4 p-2 text-xl">
        <div className="flex justify-center items-center">
          <figure className="w-10 h-10">
            <img className="w-full h-full" src={logoMembranas202} alt="Logo" />
          </figure>
          <h2 className="text-2xl text-oswald font-semibold">
            Membranas <span className="">202</span>
          </h2>
        </div>

        <NavbarToggle />

        <ul className="hidden lg:flex gap-4">
          <li className="font-medium hover:text-yellow-300 hover:underline">
            <a href="">Inicio</a>
          </li>
          <li className="font-medium hover:text-yellow-400 hover:underline">
            <a href="">Servicios</a>
          </li>
          <li className="font-medium hover:text-yellow-300 hover:underline">
            <a href="">Nosotros</a>
          </li>
          <li className="font-medium hover:text-yellow-300 hover:underline">
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
