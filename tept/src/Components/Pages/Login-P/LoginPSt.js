import styled from "styled-components";

export const BacLoginP = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 83.7vh;

    .card-back {
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
    
    .card-header{
        width: 100%;
        text-align: center;
    }

    .card-header h2{
        color: #fff;
        font-size: 30px;
    }

    .card-con{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px 0;
    }

    .card-con-ar{
        width: 100%;
        display: flex;
        flex-direction: column;   
    }

    .card-con-ar input{
        margin-top: 10px;
        padding:8px 5px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
        color: #fff;
    }

    .card-con-ar input::placeholder{
        color: #fff;
    }

    .card-con-ar label{
        color: #fff;
        font-size: 20px;
        margin-top: 10px;
    }

    .foo{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .foo input{
        width: 100%;
        height: 40px;
        background-color: #345dc5;
        border:none;
        color:#fff;
        margin: 10px 0;
        cursor: pointer;
        font-weight: 700;
    }

    .butt{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .butt a{
        font-size: 15px;
        color: #fff;
        text-decoration: none;
    }

    .butt button{
        padding: 10px;
        margin-left: 5px;
        color: #fff;
        background-color: #345dc5;
        border: none;
        cursor: pointer;
        font-weight: 700;
    }

    .esnha{
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 20px;
    }
    
    .esnha a{
        font-size: 16px;
        color: #fff;
        cursor: pointer;
    }
    
    .esnha a:hover{
        color: #346eff;
    }

    @media screen and (max-width: 840px) {
        .head-logo{
            display: none;
        }
    }

    @media screen and (max-width: 450px) {
        .card-back{
            width: 350px;
            height: 400px;
        }

        .butt a{
            font-size: 13px;
        }

        .butt button{
            padding: 5px;
        }

        .esnha a{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 380px) {
        .card-back{
            width: 320px;
            height: 400px;
        }

        .butt a{
            font-size: 11px;
        }

        .butt button{
            padding: 5px;
        }

        .esnha a{
            font-size: 12px;
        }
    }
`