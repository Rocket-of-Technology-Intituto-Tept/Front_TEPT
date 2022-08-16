import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home/Home';
import Rocket from '../Equipe/Equipe';
import Contato from '../Pages/Contato/Contato';
import Acessar from '../Pages/Acessar_Conta/Acessar';
import CadastroP from '../Pages/CadP/CadastroP';
import CadastroM from '../Pages/CadM/CadastroM';
import LoginP from '../Pages/Login-P/Login';
import LoginM from '../Pages/Login_M/LoginM';
import Paciente from '../Pages/Dash_P/Paciente';
import Agendar from '../Pages/Dash_P/AgendamentoP/AgeP';
import Consulta from '../Pages/Dash_P/FazerConsulta/Consulta';
import Medico from '../Pages/Dash_M/Medico';
import Agenda from '../Pages/Dash_M/Agenda/Agenda';

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/rocket-of-technology' element={<Rocket/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/acessar-conta' element={<Acessar/>} />
            <Route path='/cadastro-paciente' element={<CadastroP/>} />
            <Route path='/cadastro-medico' element={<CadastroM/>} />
            <Route path='/login-paciente' element={<LoginP/>} />
            <Route path='/login-medico' element={<LoginM/>} />
            <Route path='/paciente' element={<Paciente/>} />
            <Route path='/agendar' element={<Agendar/>} />
            <Route path='/fazer-consulta' element={<Consulta/>} />
            <Route path='/medico' element={<Medico/>} />
            <Route path='/agenda' element={<Agenda/>} />
        </Routes>
    )
}

export default Rotas;