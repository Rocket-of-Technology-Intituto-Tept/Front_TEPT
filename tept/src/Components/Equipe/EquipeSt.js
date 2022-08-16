import styled from "styled-components";

export const BackEquipe = styled.div`
    background-color: #2b3f73;

    .equipe{
        width: 100%;
        height: 20vh;
        font-size: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    .equipe a{
        font-size: 30px;
        text-decoration: none;
        color: #fff;
    }
    
    .equipe a:hover{
        color: #346eff;
    }
`

export const Nomes = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .participantes{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .participantes img{
        width: 250px;
        height: 300px;
        border-radius: 20px;
        -webkit-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
    }
    
    .participantes h1{
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }
    
    .rede{
        display: flex;
    }
    
    .rede svg{
        margin-top: 10px;
        margin-left: 10px;
        width: 40px;
        height: 50px;
    }
    
    .git{
        color: #000;
    }
    
    .lin{
        color: #0A66C2;
    }
`