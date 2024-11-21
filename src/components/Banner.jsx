export function Banner ({text}) {
    return (
        <>
        <section className="flex justify-center items-center w-full text-xl p-2 bg-gradient-to-r from-red-500 to-orange-500">
            <p className="">
                {text}
            </p>
        </section>
        </>
    )
}