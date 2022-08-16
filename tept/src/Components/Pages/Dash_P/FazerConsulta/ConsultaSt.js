import styled from "styled-components";

export const BkConsul = styled.div`
    width: 100%;
    height: 83.7vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    .mar-b{
        width: 450px;
        height: 610px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #2b3f73;
        margin-top: 10px;
    }
    
    .mar-b h1{
        font-size: 30px;
        color: #fff;
    }
    
    .mar{
        width: 350px;
        display: flex;
        flex-direction: column;
        margin-top: 8px;
    }
    
    .mar, .espee label{
        color: #fff;
        font-size: 17px;
    }
    
    .mar input{
        padding: 8px 5px;
        background-color: transparent;
        border: 2px solid #fff;
        outline: none;
        color: #fff;
    }
    
    .mar input::placeholder{
        color: #fff;
    }
    
    .mar textarea{
        margin-top: 5px;
        color: #fff;
        resize: none;
        background-color: transparent;
        border: 2px solid #fff;
        padding: 5px;
    }
    
    .mar textarea::placeholder{
        color: #fff;
    }
    
    .espee{
        width: 350px;
        display: flex;
        flex-direction: column;
        margin-top: 8px;
    }
    
    .espee input{
        width: 70px;
        height: 40px;
        background-color: transparent;
        border-color: #345dc5;
        color: #fff;
        cursor: pointer;
        margin-top: 5px;
    }
    
    .esp{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .esp input{
        width: 100px;
    }
    
    .esp input:focus{
        background-color: #345dc5;
        color: #000;
        border: none;
    }
    
    .ch{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    .ch input{
        margin-right: 10px;
        margin-left: 5px;
    }
    
    .confir{
        width: 350px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 15px;
    }
    
    .confir input{
        width: 150px;
        padding: 8px 5px;
        border: none;
        color: #fff;
        cursor: pointer;
    }
    
    .gree {
        background-color: #4ECB71;
    }
    
    .ree{
        background-color: #F24E1E;
    }
`