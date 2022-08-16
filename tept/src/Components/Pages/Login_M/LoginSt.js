import styled from "styled-components";

export const BacLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 83.7vh;

    .card {
        background-color: #2b3f73;
        padding: 40px;
        border-radius: 2px;
        width: 400px;
        height: 450px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    
    .header-card{
        width: 100%;
        text-align: center;
    }
    
    .header-card h2{
        color: #fff;
        font-size: 30px;
    }
    
    .card-content label {
        color: #fff;
        font-size: 20px;
    }
    
    .card-content-area {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px 0;
    }
    
    .card-content-area input {
        margin-top: 10px;
        padding:8px 5px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
        color: #fff;
    }
    
    .card-content-area input::placeholder{
        color: #fff;
    }
    
    .card-footer {
        display: flex;
        flex-direction: column;
    }
    
    .card-footer .submit{
        width: 100%;
        height: 40px;
        background-color: #345dc5;
        border:none;
        color:#fff;
        margin: 10px 0;
        cursor: pointer;
        font-weight: 700;
    }
    
    .butao { 
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    
    .butao a {
        font-size: 15px;
        color: #fff;
        text-decoration: none;    
    }
    
    .butao button {
        padding: 10px;
        margin-left: 5px;
        color: #fff;
        background-color: #345dc5;
        border: none;
        cursor: pointer;
        font-weight: 700;
    }
    
    .senha{
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 20px;
    }
    
    .senha a{
        font-size: 16px;
        color: #fff;
        cursor: pointer;
    }
    
    .senha a:hover{
        color: #346eff;
    }

    @media screen and (max-width: 840px) {
        .head-logo{
            display: none;
        }
    }

    @media screen and (max-width: 450px) {
        .card{
            width: 350px;
            height: 400px;
        }

        .butao a{
            font-size: 13px;
        }

        .butao button{
            padding: 5px;
        }

        .senha a{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 380px) {
        .card{
            width: 320px;
            height: 400px;
        }

        .butao a{
            font-size: 11px;
        }

        .butao button{
            padding: 5px;
        }

        .senha a{
            font-size: 12px;
        }
    }
`