import Stories from "./Stories";
import Postagens from "./Postagens";

export default function conteudoPrincipal(){
    return (
        <div className="ConteudoPrincipal">
            <Stories/>
            <Postagens/>
        </div>
    )
}