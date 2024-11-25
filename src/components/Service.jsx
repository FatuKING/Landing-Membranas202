import { Card } from "./Card.jsx"
import { FaRegHandshake, FaTools } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"

export function Service () {

    const dataService = [
        {
            icon: <FaRegHandshake />,
            title: 'Presupuesto sin cargo',
            description: 'Ofrecemos asesoramiento personalizado y presupuestos gratuitos para ayudarte a elegir la mejor solución de impermeabilización según tus necesidades.'
        },
        {
            icon: <FaTools />,
            title: 'Venta y colocación',
            description: 'Comercializamos membranas asfálticas de alta calidad y garantizamos una instalación profesional, asegurando máxima protección y durabilidad para tus superficies.'
        },
        {
            icon: <MdSecurity />,
            title: 'Garantía extendida',
            description: 'Brindamos garantía de 10 años en nuestros servicio, ofreciendo tranquilidad y respaldo a largo plazo para tu inversión.'
        }
    ]

    return (
        <>
        <article id="servicios" className="flex w-screen justify-center bg-gray-100 text-black pt-20 pb-20">
            <section className="grid grid-cols-3 gap-4 xl:gap-8 2xl:gap-40 w-11/12 2xl:w-3/4">
                {dataService.map((service, index) => {
                    return (
                    <Card key={index} icon={service.icon} title={service.title} description={service.description} />
                    )
                })}
            </section>
        </article>
        </>
    )
}