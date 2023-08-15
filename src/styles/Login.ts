import styled from "styled-components";

export const HtmlWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const Text = styled.div`
    width:auto;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-family: cursive;
`
export const Field = styled.div`
    width:50%;
    height:40%;
    background-color: #FFDAB9;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 20px;
    gap: 20px;
`
export const FieldItem = styled.input`
    width:90%;
    height:50px;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-family: cursive;
    font-size: 20px;
`
export const Button = styled.div`
    width:90%;
    height:50px;
    border-radius: 20px;
    border: none;
    background-color: #DA70D6;
    font-family: cursive;
    font-size: 20px;
    display: flex;
    justify-content:center;
    align-items:center;
`