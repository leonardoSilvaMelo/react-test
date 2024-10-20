import BotaoSeguir from "../componentes/BotaoSeguir"
import PostIcons from "./PostIcons";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";

export default function Post(props) {
    return (
        <div className="Post">
            <div className="PostCabecalho">
                <img src={props.imagemusuario} />

                <div className="PostHeader">
                    <div className="IdentificacaoUsuario">
                        {props.nomeusuario}
                        <span>{props.emailusuario}</span>
                    </div>

                    <div className="followContainer">
                        <BotaoSeguir />
                    </div>

                </div>
            </div>

            <div className="textoPostagem">
                {props.textopostagem}
            </div>

            <div className="PostImagem">
                <img src={props.imagemPostagem} alt="Imagem do Post" />
            </div>

            <div className="PostFooter">
                <PostIcons icone={
                    <FaHeart style={{
                        fontSize: "2rem",
                    }}/>
                }/>

                <PostIcons icone={
                    <FaComment style={{
                        fontSize: "2rem"
                    }}/>
                }/>

                <PostIcons icone={
                    <MdBookmarkAdd style={{
                        fontSize: "2rem"
                    }}/>
                }/>
            </div>
        </div>
    );
}