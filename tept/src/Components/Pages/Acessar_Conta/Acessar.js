import React, { useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'

import { AcessarB } from './AcessarSt'

import Loading from '../../Loading/Loading'

function Acessar() {
    const [Carregando, setCarregando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setCarregando(false)
        }, 1000)
    });

    return (
        <div>
            {Carregando ? <Loading /> : (
                <div>
                    <NavBar />
                    <AcessarB>
                        <div className="car-back">
                            <div className="btnAcessar">
                                <div className="titu">
                                    <h1>Paciente</h1>
                                </div>
                                <div className="log">
                                    <a href="/login-paciente">
                                        <input type="button" value="Entrar como Paciente" />
                                    </a>
                                </div>
                                <div className="cad">
                                    <a href="/cadastro-paciente">
                                        <input type="button" value="Cadastrar como Paciente" />
                                    </a>
                                </div>
                            </div>
                            <div className="btnAcessar">
                                <div className="titu">
                                    <h1>Médico</h1>
                                </div>
                                <div className="log">
                                    <a href="/login-medico">
                                        <input type="button" value="Entrar como Médico" />
                                    </a>
                                </div>
                                <div className="cad">
                                    <a href="/cadastro-medico">
                                        <input type="button" value="Cadastrar como Médico" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AcessarB>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Acessar
