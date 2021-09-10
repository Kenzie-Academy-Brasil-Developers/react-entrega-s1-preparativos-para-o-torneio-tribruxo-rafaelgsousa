import './App.css';

import {useState,useEffect} from "react"

import TelaInicial from './componentes/TelaInicial';

import Apresentacao from './componentes/Apresentação';

function App() {

  const [change,setChange]=useState(true)

  const [students,SetEstudents]=useState([])

  function mudarTela(){
      setChange(false)
  }

  useEffect(()=> {
    fetch("http://hp-api.herokuapp.com/api/characters/students ")
    .then((response)=> response.json())
    .then((response)=>SetEstudents(response))
    .catch((err)=>console.log(err))
  },[])


  return (
        <div className="App">
          <header className="App-header">
            {change ? <TelaInicial callback={mudarTela}/> : <Apresentacao estudantes={students}/>}
          </header>
        </div>
  );
}

export default App;
