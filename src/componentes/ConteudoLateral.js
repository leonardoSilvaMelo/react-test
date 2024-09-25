import logo from '../imagens/tuiter-logo.png';
import ListItem from '../componentes/ListItem';
import { RiHome5Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { SiImessage } from "react-icons/si";
import { IoSearchCircle } from "react-icons/io5";

export default function ConteudoLateral() {
    return (
        <div className='conteudoLateral'>
            <img src={logo} className='logo' alt='Logo'/>
            <div>Tuiter Dois</div>
            <div>
                <ul className='menuLateral'>

                    <ListItem texto = "Home" icone = {<RiHome5Fill />}/>
                    <ListItem texto = "Explorar" icone = {<MdOutlineTravelExplore />}/>
                    <ListItem texto = "Notificações" icone = {<IoNotificationsCircle />}/>
                    <ListItem texto = "Mensagens" icone = {<SiImessage />}/>
                    <ListItem texto = "Pesquisar" icone = {<IoSearchCircle />}/>
                </ul>
            </div>
        </div>
    );
};