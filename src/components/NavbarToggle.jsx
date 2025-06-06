export function NavbarToggle ({ toggle }) {
  return (
    <>
      <label className='flex flex-col gap-2 w-8 lg:hidden' onChange={toggle}>
        <input className='peer hidden' type='checkbox'/>
        <div
          className='rounded-2xl h-[3px] w-1/2 bg-orange-600  duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]'
        />
        <div
          className='rounded-2xl h-[3px] w-full bg-orange-600   duration-500 peer-checked:-rotate-45'
        />
        <div
          className='rounded-2xl h-[3px] w-1/2 bg-orange-600   duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]'
        />
      </label>
    </>
  )
}
