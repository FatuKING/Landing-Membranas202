export function Banner ({ text }) {
    return (
        <>
        <section className="flex justify-center items-center w-full text-xl p-2">
            <p className="">
                {text}
            </p>
        </section>
        </>
    )
}