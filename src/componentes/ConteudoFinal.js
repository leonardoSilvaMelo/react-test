import TrendsItens from "./TrendsItens"
import BarraPesquisa from "./BarraPesquisa"
import Titulo from "./Titulo"

export default function conteudoFinal(){
    return(
        <div className="containerFinal">
            <div className="conteudoFinal">

                <BarraPesquisa/>

                <Titulo/>

                <ul className="trends">
                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />

                 <TrendsItens 
                  texto="Gabriel Augusto Jordan"
                  subtexto="Assunto"
                 />
                </ul>
            </div>
        </div>
    )
}