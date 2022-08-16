import styled from "styled-components";

export const BackP = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const SideBar = styled.div`
    height: 100%;
    width: 14%;
    background-color: #2b3f73;

    .bar{
        width: 100%;
        height: 40px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
        margin-left: 10px;
        cursor: pointer;
    }

    .bar a{
        text-decoration: none;
    }

    .bar h2{
        font-size: 20px;
        margin-left: 5px;
        color: #fff;
    }

    .bar svg{
        width: 40px;
        height: 25px;
        color: #fff;
    }

    .bar button{
        background-color: transparent;
        font-size: 20px;
        color: #fff;
        margin-left: 5px;
        border: none;
        cursor: pointer;
        font-weight: 700;
    }
`
export const Usuario = styled.div`
    width: 86%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .perfil{
        width: 100%;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    .perfil img{
        width: 350px;
        height: 350px;
    }
`