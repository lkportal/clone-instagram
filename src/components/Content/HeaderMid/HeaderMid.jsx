import ImgHeaderMid from "../imgHeader/ImgHeaderMid"
import { ContentHeader,Button,TextButton } from "./HeaderMidStyle"
export default function HeaderMid(){
    return(
        <ContentHeader>
            <Button><TextButton>Novas Publicações </TextButton></Button>
            <ImgHeaderMid />
        </ContentHeader>
    )
}