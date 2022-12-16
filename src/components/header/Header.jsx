import { ConteinerHead,TextInstagram } from './globalHead'
import Icons from './icons/Icons'
import ImgHead from './Imghead/ImgHead'
import Input from './input/Input'
export default function  Header(){
    return(
            <ConteinerHead >
               <TextInstagram>Instagram</TextInstagram> 
                   <Input />
                   <Icons /> 
                   <ImgHead  />
            </ConteinerHead>
    )
}