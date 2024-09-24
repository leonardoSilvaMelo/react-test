import logo from '../imagens/logo-insta.png';

export default function ConteudoLateral() {
    return (
        <div className='conteudoLateral'>
            <img src={logo} alt='Logo'/>
            <div>Logo</div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Pesquisar</li>
                    <li>Explorar</li>
                    <li>Mensagens</li>
                </ul>
            </div>
        </div>
    );
};