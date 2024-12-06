import sendMail from '../logic/sendMail.js'

export function useForm () {
    const handleSumit = (e) => {
        e.preventDefault()
        const form = new window.FormData(e.target)
    
        const dataSubmit = {
          name: form.get('nombre'),
          phone: form.get('telefono'),
          menssage: form.get('mensaje')
        }
    
        sendMail(dataSubmit)
        e.target.reset()
      }

      return { handleSumit }
}