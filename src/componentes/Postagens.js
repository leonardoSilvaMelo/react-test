import Post from '../componentes/Post'
import Evoflui from "../imagens/evoflui.jpeg"
import Zezinhoo from "../imagens/dorminhoco.jpeg"
import Leo from "../imagens/leonardoo.jpeg"

export default function Postagens() {
    return (
        <div className="postagens-container">
            <Post imagemusuario='https://encurtador.com.br/7cBcC'
                nomeusuario='Gabriel'
                emailusuario='gabriel@gmail.com'

                textopostagem='Meu Deus todo poderoso, como eu sou bonito, como sou forte!
            Sim, mas doq qualquer outra coisa na terra, a lua, as estrelas e o sol brilhante são insignificantes diante de mim.
            Nada é mais bonito que eu - Afrodite de Peixes(Cavaleiro de Ouro)'

                imagemPostagem='https://encurtador.com.br/7cBcC'
                style={{}}
            />

            <Post imagemusuario={Evoflui}
                nomeusuario='Evoflui'
                emailusuario='evoflui@gmail.com'

                textopostagem='Chegamos no Twoiter 👀'

                imagemPostagem={Evoflui}
                style={{}}
            />

            <Post imagemusuario={Leo}
                nomeusuario='Leonardo'
                emailusuario='leonardo@gmail.com'

                textopostagem='Dá uma olhada nisso'

                imagemPostagem={Zezinhoo}
                style={{}}
            />
        </div>
    )
}