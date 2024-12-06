export default async function sendMail (dataSubmit) {
    const data = {
      name: dataSubmit.name,
      phone: dataSubmit.phone,
      menssage: dataSubmit.menssage
    }

  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_MAIL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charse=utf=8'
        },
        body: JSON.stringify(data)
    })
    
    const result = await response.json()
    console.log('Response from server:', result)
  } catch(error) {
    console.error('Error posting data:', error.menssage)
  }
  }
  