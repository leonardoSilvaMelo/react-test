import logo from '../imagens/Logo-marca.png';
import logoTexto from '../imagens/Twoiter-texto.png'
import ListItem from '../componentes/ListItem';
import { RiHome5Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import BtnTuit from '../componentes/BotaoTuit';
import HR from '../componentes/HR';


export default function ConteudoLateral() {
    return (
        <div className='containerLateral'>

            <div className='conteudoLateral'>

                <div className='logomarca'>
                    <img src={logo} className='logo' alt='Logo' />
                    
                </div>

                <div>
                    <ul className='menuLateral'>

                        <ListItem texto="Home" icone={
                            <RiHome5Fill style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                        <ListItem texto="Explorar" icone={
                            <MdOutlineTravelExplore style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                        <ListItem texto="Notificações" icone={
                            <IoNotificationsCircle style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                        <ListItem texto="Mensagens" icone={
                            <IoChatbubbleEllipsesSharp style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                        <ListItem texto="Pesquisar" icone={
                            <IoSearchCircle style={{
                                marginBottom: "-10px",
                                fontSize: "2.5rem"
                            }} />}
                        />

                        <ListItem texto="Conta" icone={
                            <FaUserCircle style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                        <ListItem texto="Configurações" icone={
                            <FaGear style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />

                    </ul>
                </div>
                <BtnTuit/>
                <HR/>
            </div>
        </div>
    );
};