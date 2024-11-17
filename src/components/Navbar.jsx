export function Navbar () {
    return (
    <>
        <header className="flex justify-center bg-black">
            <nav className="flex justify-between w-11/12 p-2 text-xl">
            <h2 className="text-xl">
                Membranas 202
            </h2>

                <ul className="flex gap-4">
                    <li>
                        <a href="">Inicio</a>
                    </li>

                    <li>
                        <a href="">Servicios</a>
                    </li>

                    <li>
                        <a href="">Nosotros</a>
                    </li>

                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
)}