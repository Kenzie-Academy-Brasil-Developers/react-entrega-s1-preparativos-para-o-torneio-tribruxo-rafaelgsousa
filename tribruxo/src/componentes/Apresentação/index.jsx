import "./style.css"
import { useState, useEffect } from "react"

import Cards from "./../Cards"

function Apresentacao({estudantes}){

    const [primeiro,setPrimeiro] = useState([])

    useEffect(()=>{
        setPrimeiro(estudantes[ getRandomIntInclusive(0, estudantes.length -1)])
    },[])
    
    const [segundo,setSegundo] = useState([])
    useEffect(()=>{
        setSegundo(estudantes.filter((e)=>e.house!==primeiro.house)[getRandomIntInclusive(0, estudantes.filter((e)=>e.house!==primeiro.house).length-1)])
    },[primeiro])
    /**Acima eu coloquei o primeiro no array pq foi a forma que encontrei para o set do segundo atualizar junto com
     * o primeiro, evitando que as casas se repetissem e fiz a mesma coisa abaixo com o terceiro colocando o segundo
     * dentro do array do useEffect*/
    
    const [terceiro,setTerceiro] = useState([])
    useEffect(()=>{
        setTerceiro(estudantes.filter((e)=>e.house!==primeiro.house && e.house!==segundo.house)[getRandomIntInclusive(0, estudantes.filter((e)=>e.house!==primeiro.house).filter((e)=> e.house!==segundo.house).length-1)])
    },[segundo])

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function repetirEscolha(){
        setPrimeiro(estudantes[getRandomIntInclusive(0, estudantes.length -1)])
        setSegundo(estudantes.filter((e)=>e.house!==primeiro.house)[getRandomIntInclusive(0, estudantes.filter((e)=>e.house!==primeiro.house).length-1)])
        setTerceiro(estudantes.filter((e)=>e.house!==primeiro.house).filter((e)=> e.house!==segundo.house)[getRandomIntInclusive(0, estudantes.filter((e)=>e.house!==primeiro.house).filter((e)=> e.house!==segundo.house).length-1)])
    }

    
    return (
        <div className="Apresentacao">
            {console.log(primeiro)}
            {console.log(segundo)}
            {console.log(terceiro)}
            <ul className="Alunos">
                <li key="um" className="linha"><Cards imagem={primeiro.image} nome={primeiro.name} casa={primeiro.house}/></li>
                <li key="dois" className="linha"><Cards imagem={segundo.image} nome={segundo.name} casa={segundo.house}/></li>
                <li kay="tres" className="linha"><Cards imagem={terceiro.image} nome={terceiro.name} casa={terceiro.house}/></li>
            </ul>
            <button onClick={()=>repetirEscolha()}>Convoque outros bruxos</button>
        </div>
        
    )
}

export default Apresentacao