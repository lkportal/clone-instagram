import Perfil from '../../../assets/semfoto.png'
import { DivConteiner,Img } from './imgHeadStyle.js'
export default function ImgHead(){
    return(
        <DivConteiner>
            <Img src={Perfil} />
        </DivConteiner>
    )
}