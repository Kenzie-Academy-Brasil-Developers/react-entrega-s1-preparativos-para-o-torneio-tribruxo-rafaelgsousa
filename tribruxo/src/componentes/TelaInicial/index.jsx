import "./style.css"

function TelaInicial({callback}){
    return (
        <div className="inicio">
            <h1 className="titulo">Torneio Tribruxo</h1>
            <p className="subtitulo">Clique no botão para que os bruxo sejam escolhidos</p>
            <button className="start" onClick={callback}>Começar</button>
        </div>
    )
}

export default TelaInicial