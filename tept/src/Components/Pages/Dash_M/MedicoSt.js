import styled from "styled-components";

export const SideBack = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    .back-side{
        width: 14%;
        background-color: #2b3f73;
    }

    .emo{
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
    
    .emo a{
        text-decoration: none;
    }
    
    .emo h2{
        font-size: 20px;
        margin-left: 5px;
        color: #fff;
    }
    
    .emo button{
        background-color: transparent;
        font-size: 20px;
        color: #fff;
        margin-left: 5px;
        border: none;
        cursor: pointer;
        font-weight: 700;
    }
    
    .emo svg{
        width: 40px;
        height: 25px;
        color: #fff;
    }
    
    .perfil-m{
        width: 86%;
        height: 83.7vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .foto{
        width: 100%;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    .foto img{
        width: 350px;
        height: 350px;
    }
`