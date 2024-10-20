export default function TrendsItens(props){
    return(
        <li>
            <div className="topcisTrends">
            <span>{props.texto}</span>
            <span className="topcisTrends-subtitle">{props.subtexto}</span>
            </div>
        </li>
    )
}