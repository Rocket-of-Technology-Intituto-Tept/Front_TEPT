import styled from "styled-components";

export const MenuLogin = styled.div`
    background-color: #2b3f73;
    height: 11vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
        
    .imag{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    
    .imag h1{
        color: #fff;
    }
    
    .imag img{
        width: 60px;
        height: 60px;
        margin-right: 10px;
        margin-left: 20px;
    }
    
    .menu-desk{
        width: 50%;
    }
    
    .menu-desk ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        margin-right: 20px;
    }
    
    .menu-desk ul a{
        text-decoration: none;
    }
    
    .menu-desk ul li{
        list-style: none;
    }
    
    .menu-desk ul li h3{
        text-decoration: none;
        margin-right: 25px;
        color: #fff;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .menu-desk ul li input{
        padding: 10px;
        font-size: 18px;
        border: none;
        background-color: #346eff;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }

    svg{
        display: none;
    }

    @media screen and (max-width: 900px) {
        .menu-desk{
            display: none;
        }
        
        svg{
            display: block;
            margin-right: 1rem;
            width: 80px;
            height: 25px;
            color: #fff;
        }

        .imag h1{
            font-size: 2rem;
        }

        .imag img{
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 650px) {
        .imag h1{
            font-size: 1.5rem;
        }

        .imag img{
            width: 40px;
            height: 40px;
        }
    }
`