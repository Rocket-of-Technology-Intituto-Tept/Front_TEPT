import styled from "styled-components";

export const AcessarB = styled.section`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .car-back{
        background-color: #2b3f73;
        width:400px;
        height: 400px;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .btnAcessar{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .btnAcessar .titu h1{
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }

    .btnAcessar input{
        width: 200px;
        padding: 10px;
        margin-bottom: 15px;
        background-color: #346eff;
        color: #fff;
        border: none;
        cursor: pointer;
        font-weight: 700;
    }

    @media screen and (max-width: 500px) {
        .car-back{
            width: 300px;
            height: 300px;
        }

        .btnAcessar .titu h1{
            font-size: 20px;
            color: #fff;
        }

        .btnAcessar input{
            width: 200px;
            padding: 10px;
        }
    }
`