import Whatsapp from '../assets/whatsapp.svg';

export function BtnWhatsApp() {
    return (
        <figure className='w-16 h-16 fixed bottom-10 right-10 heartbeat'>
            <a className='' target='_blank' href="https://wa.me/1140963523">
             <img className='w-full h-full' src={Whatsapp} alt="WhatsApp" />
            </a>
        </figure>
    )
}
