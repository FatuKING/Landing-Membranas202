import { useForm } from "../hooks/useForm.js";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export function Form () {
    const { handleSumit } = useForm()

    return (
        <>
        <article className="flex justify-center w-full py-20" id="contacto">
            <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 w-11/12 2xl:w-3/4">
                <form className="flex flex-col w-full sm:w-9/12 md:w-1/2 lg:w-2/5 xl:w-1/3 gap-4 text-black" action="" onSubmit={handleSumit}>
                    <input className="p-2 bg-gray-100 focus:outline-none placeholder:text-gray-900 rounded shadow-md shadow-black" type="text" placeholder="Nombre completo" name="nombre" />
            
                    <input className="p-2 bg-gray-100 focus:outline-none placeholder:text-gray-900 rounded shadow-md shadow-black" type="text" placeholder="Telefono" name="telefono"/>

                    <textarea className="p-2 bg-gray-100 h-24 focus:outline-none placeholder:text-gray-900 rounded shadow-md shadow-black" name="mensaje" id="" placeholder="Mensaje" ></textarea>

                    <button className="bg-orange-500 p-2 px-4 text-lg lg:text-xl rounded hover:bg-orange-600 shadow-md shadow-black">Enviar formulario</button>
                </form>

                <address className="">
                    <ul className="flex flex-col gap-4 text-lg lg:text-xl">
                        <li className="flex items-center gap-2"><FaLocationArrow /> <a className="hover:underline" href="mailto:membranas202@gmail.com">Casa central - Tigre, Don Torcuato</a></li>
                        <li className="flex items-center gap-2"><FaLocationArrow /> <a className="hover:underline" href="mailto:membranas202@gmail.com">Sucursal - Pinamar</a></li>
                        <li className="flex items-center gap-2"><IoMdMail /> <a className="hover:underline" href="mailto:membranas202@gmail.com">Membranas202@gmail.com</a></li>
                        <li className="flex items-center gap-2"><FaPhone /> <a className="hover:underline" href="tel:+5491140963523">+54 9 1140963523</a></li>
                    </ul>
                </address>
            </section>
        </article>
        </>
    )
}