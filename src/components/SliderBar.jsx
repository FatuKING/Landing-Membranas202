import { motion, useTransform, useScroll } from 'framer-motion';
import imgMembrana from '../assets/membrana1.webp';

export function SliderBar() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 600], [0, -100])

    return (
        <article className="w-screen h-[400px] md:h-[600px] relative overflow-hidden">
            <motion.figure
                className="w-screen h-full absolute"
                style={{ y }} 
            >
                <img
                    className="w-full h-[500px] md:h-[700px]"
                    src={imgMembrana}
                    alt="Imagen de impermeabilización"
                />

                <figcaption className="text-xl sm:text-3xl md:text-4xl lg:text-5xl absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black/30 text-gray-100 p-2 w-full h-[500px] md:h-[700px]">
                    <p>¿Necesitas impermeabilizar tu techo?</p>
                    <p>Te damos la mejor opción.</p>
                    <div className="flex gap-4 mt-4 text-base sm:text-lg lg:text-xl">
                        <a target='_blank' href="https://wa.me/1140963523" className="bg-orange-500 text-black p-2 px-4 rounded hover:bg-orange-600">Contáctanos</a>
                        <a href="#nosotros" className="bg-gray-100 text-black p-2 px-4 rounded hover:bg-gray-200">
                            Saber más
                        </a>
                    </div>
                </figcaption>
            </motion.figure>
        </article>
    )
}
