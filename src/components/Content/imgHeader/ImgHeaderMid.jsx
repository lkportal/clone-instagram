import { ConteinerImgHeaderMid,ImgHeaderMid } from "./imgHeaderMidStyle"
import Avata1 from '../../../assets/avata1.png'
import Avata2 from '../../../assets/avata2.png'
import Avata3 from '../../../assets/avata3.png'
import Avata4 from '../../../assets/avata4.png'
import Avata5 from '../../../assets/avata5.png'
export default function imgHeaderMid(){
    return(
        <ConteinerImgHeaderMid>
            <ImgHeaderMid src={Avata1} />
            <ImgHeaderMid src={Avata2} />
            <ImgHeaderMid src={Avata3} />
            <ImgHeaderMid src={Avata4} />
            <ImgHeaderMid src={Avata5} />
       </ConteinerImgHeaderMid>
    )
}