import { createPortal } from "react-dom";

export function MenuMobile () {
    return createPortal(
        <>
            <article className="absolute top-0 w-screen h-full flex justify-center items-center bg-orange-600">
                <ul className="flex flex-col gap-4 text-2xl">
                    <li className="font-medium hover:text-orange-600 hover:underline">
                        <a href="">Inicio</a>
                    </li>
                    <li className="font-medium hover:text-orange-600 hover:underline">
                        <a href="">Servicios</a>
                    </li>
                    <li className="font-medium hover:text-orange-600 hover:underline">
                        <a href="">Nosotros</a>
                    </li>
                    <li className="font-medium hover:text-orange-600 hover:underline">
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </article>
        </>, document.body
    )
}