import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import {
    AiOutlineClose,
    AiFillCloseCircle
} from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { AgeBack, AgeInfo } from './AgeSt';

import { SideBar } from '../PacienteSt';

import Footer from '../../../Footer/Footer'
import NavLogin from '../../../NavBarLo/NavLogin';

import Loading from '../../../Loading/Loading';

// import { api } from '../../../Service/Api';

function AgeP() {
    const [Carregando, setCarregando] = useState(true)
    // const [doctors, setDoctors] = useState([])
    let navigate = useNavigate();

    // useEffect(() => {
    //     api.get("/doctor/list").then((res) => {
    //         setDoctors(res.data)
    //         console.log(res.data)
    //     })
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setCarregando(false)
        }, 1000)
    }, []);

    return (
        <div>
            {Carregando ? <Loading /> : (
                <div>
                    <NavLogin />
                    <AgeBack>
                        <SideBar>
                            <div className='bar'>
                                <FaUserCircle />
                                <Link to='/paciente'><h2>Perfil</h2></Link>
                            </div>
                            <div className='bar'>
                                <BsCalendar3 />
                                <Link to='/agendar'><h2>Agendamentos</h2></Link>
                            </div>
                            <div className='bar'>
                                <AiOutlineClose />
                                <button onClick={() => {
                                    localStorage.removeItem('token');
                                    navigate("/")
                                }}>
                                    Sair
                                </button>
                            </div>
                        </SideBar>

                        <AgeInfo>
                            <div className='titu-age'>
                                <h1>Agendamentos</h1>
                            </div>

                            <div className='con'>
                                <Link to='/fazer-consulta'>
                                    <input type="Button" value="Agendar Consulta" />
                                </Link>
                            </div>

                            {/*{doctors.map((doctor) => (
                                
                            ))}*/}
                            
                            <div className='agenda-p'>
                                <div className='exclui'>
                                    <AiFillCloseCircle className='fec' />
                                    <BiEdit className='edit' />
                                </div>

                                <div className='agenda-m'>
                                    <h1>Rodolfo Santana De Lima</h1>
                                    <p>Psiquiatra CRM: 123456/1</p>
                                    <p>Horario: 14:30 Dia: 20/10/2022</p>
                                </div>
                            </div>

                            <div className='agenda-p'>
                                <div className='exclui'>
                                    <AiFillCloseCircle className='fec' />
                                    <BiEdit className='edit' />
                                </div>

                                <div className='agenda-m'>
                                    <h1>Danilo Ferreira De Sousa</h1>
                                    <p>Psiquiatra CRM: 123456/1</p>
                                    <p>Horario: 14:30 Dia: 20/10/2022</p>
                                </div>
                            </div>
                        </AgeInfo>

                    </AgeBack>

                    <Footer />
                </div>
            )}
        </div>
    )
}

export default AgeP