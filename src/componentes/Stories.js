import Storie from '../componentes/Storie.js'
import Leo from "../imagens/leonardoo.jpeg"
import Ze from "../imagens/zezinho2.jpeg"
import gato from "../imagens/gato.jpeg"
import evoflui from "../imagens/evoflui.jpeg"


export default function Stories(){
    return (
        <div className = "stories">
            <Storie profilename='Gabriel' profilephoto='https://encurtador.com.br/7cBcC'/>

            <Storie profilename='Leonardo' profilephoto={Leo}/>

            <Storie profilename='Zezinho' profilephoto={Ze}/>

            <Storie profilename='Super Idol' profilephoto='https://th.bing.com/th/id/OIP.0mIWl4cJfuKTGsg-lp4gZgHaIq?rs=1&pid=ImgDetMain'/>

            <Storie profilename='Gatocia' profilephoto={gato}/>

            <Storie profilename='Evoflui' profilephoto={evoflui}/>

            <Storie profilename='D. Johnson' profilephoto='https://img.discogs.com/RmJf1lr1-M5ieP31bedjCEAA1BY=/600x685/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-200502-1534661946-4439.jpeg.jpg'/>
        </div>
    )
}