import styled from "styled-components";

export const ContentHeader = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    background-color:gray;  
    align-items:center;
    margin-top:15px;
    border-radius:15px;
    flex-wrap:warp;
    width:500px;
    background-color:#f8f8f8;
    
    
    

`
export const Button = styled.button`
    position:relative;
    margin-top: 2px;
    bottom:14px;
    border-radius:25px;
    border: solid 1px white;
    height:35px;
    padding-bottom:5px;
    width:35%;
    box-shadow: 1px 1px 1px 1px #dbdbdb;
    background-color: #f8f8f8;
    &:hover{
        cursor:pointer;
    }
`
export const TextButton = styled.h1`
    font-size:13px;
    color:#343434;
   
    
    

`