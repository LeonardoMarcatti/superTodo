import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(null)

  const getMessage = async () => {
    try {
      const response = await fetch('https://192.168.1.160/programacao/testes/Projetos/superTodo/backend/public/api/', {method: 'get'})
      const json = await response.json()
      console.log(response);
      setMessage(json)
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getMessage()
    }, 1500);
  }, [])
  

  return (
    <>
      {
        message && <p>{message.message}</p>
      }

      {
        !message && <p>Loading...</p>
      }
    </>
  )
}

export default App
