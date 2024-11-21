export function Form () {
    return (
        <>
        <article className="flex justify-center w-full py-20">
            <section className="flex gap-20 w-11/12 2xl:w-3/4">
                <form className="flex flex-col w-1/3 gap-4" action="">
                    <input className="p-2" type="text" placeholder="Nombre completo" />
            

                    <input className="p-2" type="text" placeholder="Telefono"/>

                    <textarea className="p-2 h-24" name="" id="" placeholder="Mensaje">

                    </textarea>

                    <button>Enviar formulario</button>
                </form>

                <address className="">
                    <ul className="flex flex-col gap-4 text-xl">
                        <li className="flex flex-col">Email: <a className="hover:underline" href="mailto:membranas202@gmail.com">membranas202@gmail.com</a></li>
                        <li className="flex flex-col">Teléfono: <a className="hover:underline" href="">+54 9 1140963523</a></li>
                    </ul>
                </address>
            </section>
        </article>
        </>
    )
}