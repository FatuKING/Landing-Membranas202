export function Banner ({text}) {
    return (
        <>
        <section className="flex justify-center h-20 items-center w-full text-2xl font-semibold p-2 bg-gradient-to-r from-orange-600 to-orange-500">
            <p className="">
                {text}
            </p>
        </section>
        </>
    )
}