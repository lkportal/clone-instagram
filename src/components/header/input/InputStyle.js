import styled from "styled-components";

export const InputStyle = styled.input`
    width:100%;
    background-color:#efefef;
    border: solid 0 #efefef;
    height:30px;
    border-radius:10px;
    font-size:15px;
    padding-left:25px;
    @media (max-width:740px){
        display:none;
        color:pink;
    } 
    &:hover{
        box-shadow:0 0 0 0;
        outline:0;
        border:0 none;
    }
    
`  
