import styled from "styled-components";

export const Form = styled.form`
    font-size: 15px;
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .back-form{
        width: 400px;
        height: 500px;
        background-color: #2b3f73;
        padding: 30px;
        border-radius: 10px;
    }
    
    .nome{
        display: flex;
        flex-direction: column;
        padding:5px 0;
    }
    
    .titu h1{
        text-align: center;
        color:  #fff;
        text-transform: uppercase;
        font-size: 25px;
        margin-bottom: 20px;
    }
    
    .titu::after{
        width: 70px;
        height: 1px;
        display: block;
        margin-top: -17px;
        margin-left: -5px;
    }
    
    .nome input{
        padding:8px 10px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
        color: #fff;
        margin-top: 5px;
    }
    
    .nome input::placeholder{
        color: #fff;
    }
    
    .nome label{
        color: #fff;
        font-size: 15px;
    }
    
    .enviar{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .enviar input{
        background-color: #346eff;
        height: 35px;
        width: 200px;
        font-weight: 700;
        border: none;
        color: #fff;
        margin-top: 10px;
    }
    
    textarea{
        margin-top: 10px;
        resize: none;
        outline: none;
        background-color: transparent;
        border: 1px solid #fff;
        padding: 5px 8px;
        color: #fff;
    }
    
    textarea::placeholder{
        color: #fff;
    }
`