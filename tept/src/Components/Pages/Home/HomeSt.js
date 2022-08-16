import styled from "styled-components";

export const Lay = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require("../assets/pexels-vanessa-garcia-6326384.jpg")});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .icon{
        position: absolute;
        mix-blend-mode: lighten;
    }
    
    .icon img{
        width: 100%;
        height: 50vh;
    }

    .text h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 100px;
        line-height: 15px;
    
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    
        color: #FFFFFF;
    
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }


    @media screen and (max-width: 800px ) {
        .text h1{
            font-size: 80px;
        }
    }

    @media screen and (max-width: 600px ) {
        .text h1{
            font-size: 60px;
        }
    }

    @media screen and (max-width: 420px ) {
        .icon img{
            width: 100%;
            height: 30vh;
        }

        .text h1{
            font-size: 40px;
        }
    }
`

export const Container = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .con-t{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    .con-t h1{
        font-size: 45px;
        color: #143296;
    }
    
    .container-back{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    
    .container-wrapper {
        width: 350px;
        height: 450px;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        background-color: #346eff;
    }
    
    .container-wrapper img{
        width: 100%;
        height: 200px;
        border-radius: 20px 20px 0 0;
    }
    
    .container-wrapper h2{
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #fff;
    }
    
    .container-wrapper p{
        font-size: 18px;
        padding: 0 30px;
        text-align: center;
        color: #fff;
    }

    @media screen and (max-width: 1200px ) {
        height: 150vh;

        .container-back{
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .container-wrapper {
            width: 300px;
            height: 300px;
        }

        .container-wrapper img{
            height: 150px;
        }
        
        .container-wrapper h2{
            font-size: 20px;
        }
        
        .container-wrapper p{
            font-size: 10px;
        }
    }
`

export const Tele = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .tele-img{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .tele-img img{
        width: 500px;
        height: 500px;
        margin-left: 50px;
    }

    .tele-txt{
        width: 50%;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }

    .tele-txt h1{
        font-size: 60px;
        color: #143296;
    }

    .tele-txt p{
        font-size: 28px;
        text-align: start;
        color: #143296;
        padding: 0 10px;
    }

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;

        .tele-img img{
            width: 350px;
            height: 350px;
        }

        .tele-txt h1{
            margin-top: 20px;
            font-size: 40px;
        }

        .tele-txt p{
            font-size: 25px;
            text-align: center;
        }
    }

    @media screen and (max-width: 1130px) {
        .tele-txt p{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 650px) {
        .tele-txt p{
            font-size: 18px;
        }

        .tele-img{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tele-img img{
            width: 300px;
            height: 300px;
        }
    }

    @media screen and (max-width: 540px) {
        .tele-txt p{
            font-size: 15px;
        }
    }
`