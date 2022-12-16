import { IconsConteiner } from "./iconsStyle";
import { BsHeart,BsPlusSquare } from "react-icons/bs";
import { AiFillHome,AiOutlineCompass } from "react-icons/ai"
import { FiSend } from "react-icons/fi";

export default function Icons(){
    return(
        <IconsConteiner >
            
                    <AiFillHome className="iconsStyle" />
                    <FiSend className="iconsStyle" />  
                    <BsPlusSquare className="iconsStyle" />  
                    <AiOutlineCompass className="iconsStyle" />  
                    <BsHeart className="iconsStyle" />
                
        </IconsConteiner>
    )
}