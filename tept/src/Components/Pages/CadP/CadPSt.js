import styled from "styled-components";

export const Forms = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const FormsWrap = styled.form`
    background-color: #2b3f73;
    padding: 30px;
    border-radius: 5px;
    width:400px;
    height: 570px;

    .form-logo{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .form-logo h1{
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-size: 30px;
        margin-bottom: 20px;
    }
    
    .body-form{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .body-form .info{
        width: 100%;
        text-align: start;
        color: #fff;
        font-size: 14px;
    }
    
    .body-form .inp{
        color: #fff;
        margin-top: 5px;
        font-size: 14px;
    }
    
    .body-form .inp input{
        width: 330px;
        padding:8px 10px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
        color: #fff;
        margin-top: 5px;
    }
    
    .body-form .inp input::placeholder{
        color: #fff;
    }
    
    .body-form .botao button{
        width: 250px;
        padding: 8px 0;
        background-color: #346eff;
        border: none;
        color: #fff;
        cursor: pointer;
        margin-top: 15px;
        font-weight: 700;
    }
`