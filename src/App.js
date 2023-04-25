import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import './styles.css';

import api from './services/api'

function App() {

  // Dentro dos parenteses é a 1° var, ou seja 'cep' e 'input'
  const [input, setInput] = useState('')
  const [endereco, setEndereco] = useState({})

  // async por conta da requisição da API que pode demorar
  async function handleSearch() {
    //alert('Valor do Input: ' + input)

    if (input === ''){
      alert('Preencha algum CEP')
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      
      setEndereco(response.data);
      setInput("");

    } catch{
      alert('Ops, erro ao buscar o CEP');
      setInput("")
    }

  }


  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
          value={input} //input vem do useState la em cima
          onChange={(evento) => setInput(evento.target.value)}
          />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      
      {Object.keys(endereco).length > 0 && (
        <main className='main'>
          <h2>CEP: {endereco.cep}</h2>
          <span> {endereco.logradouro} </span>
          <span> {endereco.complemento} </span>
          <span> {endereco.bairro} </span>
          <span> {endereco.localidade} - {endereco.uf} </span>
        </main>
      )}

    </div>
  );
}

export default App;
