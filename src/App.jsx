import { AboutUs } from "./components/AboutUs.jsx"
import { Banner } from "./components/Banner.jsx"
import { BtnWhatsApp } from "./components/BtnWhatsApp.jsx"
import { Footer } from "./components/Footer.jsx"
import { Form } from "./components/Form.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Service } from "./components/Service.jsx"
import { SliderBar } from "./components/SliderBar.jsx"


function App() {

  return (
    <>
    <main className='w-full h-full'>
      <Navbar />
      <SliderBar />
      <BtnWhatsApp />
      <Service />
      <Banner text='Resistencia y protección, bajo un mismo techo.' />
      <AboutUs />
      <Form />

      <Footer />
    </main>
    </>
  )
}

export default App
