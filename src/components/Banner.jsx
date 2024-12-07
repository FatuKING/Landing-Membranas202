import { WordRotate } from "./WordRotate.jsx"

const listWords = ['Presupuesto sin cargo en obra', 'Materiales de primera calidad', '10 años de garantia', 'El mejor precio para tu tranquilidad']

export function Banner () {
    return (
        <>
        <section className="flex justify-center h-20 items-center w-full text-xl sm:text-2xl font-bold p-2 bg-gradient-to-r from-orange-600 to-orange-500 text-oswald">
           <WordRotate words={listWords} />
        </section>
        </>
    )
}