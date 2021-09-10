import "./style.css"

function Cards({imagem,nome,casa}){
    return (
        <div className="card">
            <img src={imagem} alt="foto" className="imagem" 
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className={casa==="Gryffindor"?"GryffindorImg":
            casa==="Slytherin"?"SlytherinImg":
            casa==="Hufflepuff"?"HufflepuffImg":"RavenclawImg"}></img>
            <h3 className="nome">{nome}</h3>
            <h3 className="casa" className="imagem" 
            className={casa==="Gryffindor"?"Gryffindor":
            casa==="Slytherin"?"Slytherin":
            casa==="Hufflepuff"?"Hufflepuff":"Ravenclaw"}>{casa}</h3>
        </div>
    )
}

export default Cards