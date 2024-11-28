import { WordRotate } from "./WordRotate.jsx"

const listWords = ['Resistencia y protección, bajo un mismo techo.', 'Protección impermeable, calidad garantizada.', 'La mejor calidad al mejor precio.']

export function Banner () {
    return (
        <>
        <section className="flex justify-center h-20 items-center w-full text-2xl font-bold p-2 bg-gradient-to-r from-orange-600 to-orange-500 text-oswald">
           <WordRotate words={listWords} />
        </section>
        </>
    )
}