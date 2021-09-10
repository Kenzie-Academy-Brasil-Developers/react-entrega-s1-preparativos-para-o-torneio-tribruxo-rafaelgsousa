import "./style.css"

function TelaInicial({callback}){
    return (
        <div className="inicio">
            <h1 className="titulo">Torneio Tribruxo</h1>
            <p className="subtitulo">Clique no botão para que calice de fogo escolha os bruxos para o tornei.</p>
            <button className="start" onClick={callback}>Começar</button>
        </div>
    )
}

export default TelaInicial