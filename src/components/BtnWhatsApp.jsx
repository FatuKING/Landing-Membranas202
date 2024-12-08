import Whatsapp from '../assets/whatsapp.svg';

export function BtnWhatsApp() {
    return (
        <figure className='block w-10 h-10 sm:w-16 sm:h-16 fixed bottom-10 right-10 heartbeat z-20' >
            <a className='' target='_blank' href="https://wa.me/1140963523?text=%C2%A1Hola!%20%F0%9F%91%8B%20Estoy%20interesado/a%20en%20la%20venta%20y%20colocaci%C3%B3n%20de%20membranas%20para%20techos.%20%F0%9F%8F%A0%20%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n%20sobre%20precios%20y%20disponibilidad%3F%20Gracias.">
             <img className='w-full h-full' src={Whatsapp} alt="WhatsApp" />
            </a>
        </figure>
    )
}
