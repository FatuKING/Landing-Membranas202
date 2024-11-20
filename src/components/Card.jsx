export function Card ({icon, title, description}) {
    return (
        <>
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-lg shadow shadow-black p-4 hover:scale-105">
            <div className="flex justify-center items-center polygon bg-black text-white text-xl">
                {icon}
            </div>

            <h3 className="font-semibold">
                {title}
            </h3>

            <p className="w-11/12 text-gray-700">{description}</p>
        </div>
        </>
    )
}