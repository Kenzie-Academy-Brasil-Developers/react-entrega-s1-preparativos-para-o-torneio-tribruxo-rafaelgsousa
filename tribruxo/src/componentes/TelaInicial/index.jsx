import "./style.css"

function TelaInicial({callback}){
    return (
        <div className="iniciotela">
            <h1 className="titulotela">Torneio Tribruxo</h1>
            <p className="subtitulotela">Clique no botão para que calice de fogo escolha os bruxos para o tornei.</p>
            <button className="starttela" onClick={callback}>Começar</button>
        </div>
    )
}

export default TelaInicial