import { FaUserCircle } from "react-icons/fa";


export default function Post(){
    return (
        <div className="Post">
            <div className="PostCabecalho">
                <div className="PostAvatar">
                    <FaUserCircle/>
                </div>
                <div className="PostNome">Nome</div>
            </div>

            <div className="PostImagem">

            </div>
        </div>
    );
}