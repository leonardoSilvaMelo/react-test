import logo from '../imagens/tuiter-logo.png';
import ListItem from '../componentes/ListItem';
import { RiHome5Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { SiImessage } from "react-icons/si";
import { IoSearchCircle } from "react-icons/io5";
import BtnTuit from '../componentes/BotaoTuit';

export default function ConteudoLateral() {
    return (
        <div className='containerLateral'>

            <div className='conteudoLateral'>

                <div className='logomarca'>
                    <img src={logo} className='logo' alt='Logo' />
                    <div>TWOitter
                        <br /> (tuiter Dois)
                    </div>
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
                            <SiImessage style={{
                                marginBottom: "-10px",
                                fontSize: "2.2rem"
                            }} />}
                        />

                        <ListItem texto="Pesquisar" icone={
                            <IoSearchCircle style={{
                                marginBottom: "-10px",
                                fontSize: "2.4rem"
                            }} />}
                        />
                    </ul>
                </div>
                <BtnTuit/>
            </div>
        </div>
    );
};