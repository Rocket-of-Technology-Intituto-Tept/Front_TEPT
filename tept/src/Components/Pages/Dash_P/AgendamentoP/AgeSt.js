import styled from "styled-components";

export const AgeBack = styled.div`
    width: 100%;
    height: 150vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const AgeInfo = styled.div`
    width: 86%;

    .titu-age{
        width: 100%;
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .titu-age h1{
        color: #fff;
        font-size: 35px;
    }

    .con{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .con input{
        padding: 8px 5px;
        border: none;
        cursor: pointer;
        background-color: #346eff;
        color: #fff;
        font-weight: 700;
    }

    .agenda-p{
        width: 100%;
        height: 18vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row-reverse;
        margin-top: 10px;
    }

    .exclui{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 10px;
    }

    .exclui svg{
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .fec{
        color: red;
    }

    .edit{
        color: green;
    }

    .agenda-m{
        width: 500px;
        height: 120px;
        background-color: #2b3f73;
        color: #fff;
        border-radius: 15px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .agenda-m h1{
        font-size: 28px;
        font-weight: 800;
    }
`