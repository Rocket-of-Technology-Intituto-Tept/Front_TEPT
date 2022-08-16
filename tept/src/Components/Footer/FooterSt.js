import styled from "styled-components";

export const Rodape = styled.footer`
    width: 100%;
    height: 60px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #2B3F73;
    
    .text{
        width: 50%;
        margin-bottom: 5px;
    }

    p{
        text-align: center;
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`