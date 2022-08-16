import styled from "styled-components";

export const Form = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const FormBack = styled.div`
    width: 400px;
    height: 600px;
    padding: 30px;
    border-radius: 5px;
    background-color: #2b3f73;

    .logo-form{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .logo-form h1{
        text-align: center;
        color:  #fff;
        text-transform: uppercase;
        font-size: 30px;
    }
    
    .bf{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .bf .txt{
        width: 100%;
        text-align: start;
        color: #fff;
        font-size: 14px;
    }
    
    .bf .pni{
        width: 100%;
        color: #fff;
        font-size: 14px;
        margin-top: 10px;
    }
    
    .bf .pni input{
        width: 100%;
        padding:5px 5px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
        color: #fff;
        margin-top: 5px;
    }
    
    .bf .pni input::placeholder{
        color: #fff;
    }
    
    .orgao-emissor {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .orgao-emissor input{
        width: 80px;
        padding: 8px 5px;
        background-color: transparent;
        border-color: #345dc5;
        cursor: pointer;
        margin-top: 5px;
        color: #fff;
    }
    
    .orgao-emissor input:focus{
        background-color: #345dc5;
        color: #000;
        border: none;
    }
    
    .btn button{
        width: 250px;
        padding: 8px 0;
        border: none;
        background-color: #346eff;
        color: #fff;
        cursor: pointer;
        margin-top: 15px;
        font-weight: 700;
    }
`