import Whatsapp from '../assets/whatsapp.svg';

export function BtnWhatsApp() {
    return (
        <figure className='w-14 h-14 fixed bottom-10 right-10'>
            <a className='' href="">
             <img className='w-full h-full' src={Whatsapp} alt="WhatsApp" />
            </a>
        </figure>
    )
}
