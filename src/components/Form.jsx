export function Form () {
    return (
        <>
        <article className="flex justify-center w-full py-20">
            <section className="flex justify-between w-11/12">
                <form className="flex flex-col gap-4" action="">
                    <input type="text" placeholder="Nombre completo" />
            

                    <input type="text" placeholder="Telefono"/>

                    <textarea name="" id="" placeholder="Mensaje">

                    </textarea>

                    <button>Enviar formulario</button>
                </form>

                <address className="">
                    <ul>
                        <li>Email: <a href="mailto:membranas202@gmail.com">membranas202@gmail.com</a></li>
                        <li>Teléfono: <a href="">+54 9 1140963523</a></li>
                    </ul>
                </address>
            </section>
        </article>
        </>
    )
}