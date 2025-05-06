import { useState } from 'react';

function App(){
  //State (Estado)
  const [message, setMessage] = useState('Olá mundo!')

  // let message = 'Olá Mundo!'
  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => 
                            setMessage('Olá, fui clicado!')}
        >Mudar mensagem!
      </button>
    </>
  )
}

export default App;