export function Card ({icon, title, description}) {
    return (
        <>
        <div className="flex flex-col items-center gap-4 border border-black rounded-lg shadow-sm shadow-black p-4 hover:scale-105">
            <div className="flex justify-center items-center polygon bg-orange-500 text-black text-4xl font-semibold shadow-xl shadow-black">
                {icon}
            </div>

            <h3 className="font-semibold text-2xl">
                {title}
            </h3>

            <p className="w-11/12 text-lg text-gray-700">{description}</p>
        </div>
        </>
    )
}