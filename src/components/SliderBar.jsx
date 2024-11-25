import { motion, useTransform, useScroll } from 'framer-motion';
import imgMembrana from '../assets/membrana1.webp';

export function SliderBar() {
    const { scrollY } = useScroll(); // Escucha el scroll
    // Transforma el scroll para mover la imagen en parallax
    const y = useTransform(scrollY, [0, 600], [0, -100]); 

    return (
        <article className="w-screen h-[400px] md:h-[600px] relative overflow-hidden">
            <motion.figure
                className="w-screen h-full absolute"
                style={{ y }} // Aplica el parallax al eje Y
            >
                <img
                    className="w-full md:h-[700px] lg:h-screen"
                    src={imgMembrana}
                    alt="Imagen de impermeabilización"
                />
                <figcaption className="text-5xl absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black/30 text-gray-100 p-2 w-full md:h-[700px] lg:h-screen">
                    <p>¿Necesitas impermeabilizar tu techo?</p>
                    <p>Te damos la mejor opción.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-orange-600 text-black p-2 px-4 text-xl rounded hover:bg-orange-600">Contáctanos</button>
                        <button className="bg-gray-100 text-black p-2 px-4 text-xl rounded hover:">
                            Saber más
                        </button>
                    </div>
                </figcaption>
            </motion.figure>
        </article>
    );
}
