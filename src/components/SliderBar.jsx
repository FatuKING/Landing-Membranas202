import imgMembrana from '../assets/membrana1.webp'

export function SliderBar () {
    return (
        <>
        <article className="w-screen relative">
        <figure className="w-screen h-96 relative">
            <img className="w-full h-full object-cover" src={imgMembrana} alt="" />
            <figcaption className="text-3xl absolute inset-0 flex items-center justify-center bg-black/50 text-white p-2 w-full">
                Impernabilidad de techos
            </figcaption>
        </figure>
{/* 
        <figure className="w-screen h-96 relative">
            <img className="w-full h-full object-cover" src={imgMembrana} alt="" />
            <figcaption className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-center w-full">
                Impernabilidad de techos
            </figcaption>
        </figure>

        <figure className="w-screen h-96 relative">
            <img className="w-full h-full object-cover" src={imgMembrana} alt="" />
            <figcaption className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-center w-full">
                Impernabilidad de techos
            </figcaption>
        </figure>    */}
        </article>
        </>
    )
}