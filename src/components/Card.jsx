export function Card ({icon, title, description}) {
    return (
        <>
        <div className="group flex flex-col gap-4 border-2 border-black rounded-2xl shadow-sm shadow-black p-6 hover:scale-105 hover:bg-orange-400 transition duration-300">
            <div className="flex text-4xl sm:text-5xl font-semibold group-hover:scale-105 transition duration-1000 ">
                {icon}
            </div>

            <h3 data-text={title} className="font-semibold text-xl sm:text-2xl text-oswald">
                {title}
            </h3>

            <p className="w-11/12 text-base sm:text-lg font-medium text-gray-700">{description}</p>
        </div>
        </>
    )
}