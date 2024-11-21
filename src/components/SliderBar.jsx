import imgMembrana from '../assets/membrana1.webp'

export function SliderBar () {
    return (
        <>
        <article className="w-screen h-[400px] md:h-[600px] relative">
            <figure className="w-screen h-full absolute">
                <img className="w-full h-full object-cover" src={imgMembrana} alt="" />
                <figcaption className="text-5xl absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black/30 text-gray-100 p-2 w-full">
                    <p className=''>
                    ¿Necesitas impermeabilizar tu techo?
                    </p>

                    <p>Te damos la mejor opción. </p>

                    <button className='bg-black p-2 px-4 text-xl rounded'>Contáctanos</button>
                </figcaption>
            </figure>
        </article>
        </>
    )
}