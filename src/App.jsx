import { Navbar } from "./components/Navbar.jsx"
import { Service } from "./components/Service.jsx"
import { SliderBar } from "./components/SliderBar.jsx"


function App() {

  return (
    <>
    <main className='w-full h-full'>
      <Navbar />
      <SliderBar />
      <Service />
    </main>
    </>
  )
}

export default App
