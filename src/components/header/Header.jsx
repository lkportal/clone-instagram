import { ConteinerHead,TextInstagram } from './globalHead'
import LogoImg from '../../assets/Instagram_logo.png'
import Icons from './icons/Icons'
import ImgHead from './Imghead/ImgHead'
import Input from './input/Input'
export default function  Header(){
    return(
            <ConteinerHead >
               <TextInstagram src={LogoImg} />
                   <Input />
                   <Icons /> 
                   <ImgHead  />
            </ConteinerHead>
    )
}