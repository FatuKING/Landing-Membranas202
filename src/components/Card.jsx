export function Card ({img, title, description}) {
    return (
        <>
        <div className="flex flex-col justify-center items-center gap-4 border border-black p-4">
            <figure className="">
                <img className="polygon" src={img} alt="img.jpg" />
            </figure>

            <h3 className="">
                {title}
            </h3>

            <p className="">{description}</p>
        </div>
        </>
    )
}