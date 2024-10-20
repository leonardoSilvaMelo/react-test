import { IoSearchCircle } from "react-icons/io5";

export default function(BarraPesquisa){
    return(
        <div className="barraPesquisa-container">
            <input className="barraPesquisa-input" placeholder="PESQUISAR..."/>
            <IoSearchCircle style={{
                fontSize:"2.1rem"
            }}/>
        </div>
    )
}