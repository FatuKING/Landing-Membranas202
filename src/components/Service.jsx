import { Card } from "./Card.jsx"
import imgMembrana2 from '../assets/membrana2.jpg'

export function Service () {

    const dataService = [
        {
            img: imgMembrana2,
            title: 'Presupuesto sin cargo',
            description: 'Ofrecemos asesoramiento personalizado y presupuestos gratuitos para ayudarte a elegir la mejor solución de impermeabilización según tus necesidades.'
        },
        {
            img: imgMembrana2,
            title: 'Venta y colocación',
            description: 'Comercializamos membranas asfálticas de alta calidad y garantizamos una instalación profesional, asegurando máxima protección y durabilidad para tus superficies.'
        },
        {
            img: imgMembrana2,
            title: 'Garantía extendida',
            description: 'Brindamos garantía extendida en nuestros productos y servicios, ofreciendo tranquilidad y respaldo a largo plazo para tu inversión.'
        }
    ]

    return (
        <>
        <article className="flex w-screen justify-center bg-gray-100 text-black pt-20">
            <section className="flex justify-between w-11/12">
                {dataService.map((service, index) => {
                    return (
                    <Card key={index} img={service.img} title={service.title} description={service.description} />
                    )
                })}
            </section>
        </article>
        </>
    )
}