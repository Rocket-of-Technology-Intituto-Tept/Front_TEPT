import styled, { css } from "styled-components";

export const MenUCont = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.7234244039412641) 100%);

    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
    `}

    > svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 4rem;
        height: 4rem;
    }
    
    .menu-mob {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }

    .menu-mob ul{
        display: flex;
        text-align: center;
        flex-direction: column;
    }
    
    .menu-mob ul a{
        text-decoration: none;
    }
    
    .menu-mob ul li{
        list-style: none;
        margin-top: 25px;
    }
    
    .menu-mob ul li h3{
        text-decoration: none;
        color: #fff;
        font-size: 35px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .menu-mob ul li input{
        padding: 15px;
        font-size: 20px;
        border: none;
        background-color: #346eff;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }
`