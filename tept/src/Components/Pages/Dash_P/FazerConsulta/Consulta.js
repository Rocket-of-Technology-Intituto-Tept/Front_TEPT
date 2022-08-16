import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../../Footer/Footer';
import NavLogin from '../../../NavBarLo/NavLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../../../Loading/Loading';

import { BkConsul } from './ConsultaSt';
import { api } from '../../../Service/Api';

function Consulta() {
    const [Carregando, setCarregando] = useState(true)
    const [name, setName] = useState("")
    const [speciality, setSpeciality] = useState()
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [healthPlan, setHealthPlan] = useState("")
    const [firstAppointment, setFirstAppointment] = useState("")
    const [motivation, setMotivation] = useState("")

    const toastId = React.useRef(null);
    const notify = (text) => toastId.current = toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const dismiss = () => toast.dismiss(toastId.current);
    const dismissAll = () => toast.dismiss();

    const Consulta = async (e) => {
        e.preventDefault();
        await api.post("/appointment/register", {
            "name": name,
            "speciality": speciality,
            "date": date,
            "hour": hour,
            "healthPlan": healthPlan,
            "firstAppointment": firstAppointment,
            "motivation": motivation
        }).then(res => {
            if(res.message.errors.date){
                return notify("Falha ao Marcar Consulta")
            }
            return notify("Consulta Marcada com Sucesso")
        })
            .catch(res => {
                return notify("Erro ao Marca Consulta")
            })
    }

    useEffect(() => {
        setTimeout(() => {
            setCarregando(false)
        }, 1000)
    });

    return (
        <div>
            {Carregando ? <Loading /> : (
                <div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                    <NavLogin />
                    
                    <BkConsul>
                        <div className='mar-b'>
                            <h1>Marcar Consulta</h1>
                            <div className='mar'>
                                <label>Nome Completo</label>
                                <input type='text' placeholder='Nome Completo' 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='espee'>
                                <label>Especialista</label>
                                <div className='esp'>
                                    <input type="button" value='Psiquiatra'  
                                        onClick={() => setSpeciality("Psiquiatra")}
                                    />
                                    <input type="button" value='Psicologo' 
                                        onClick={() => setSpeciality("Psicologo")}
                                    />
                                    <input type="button" value='Serviço Social' 
                                        onClick={() => setSpeciality("Serviço Social")}
                                    />
                                </div>
                            </div>
                            
                            <div className='mar'>
                                <label>Data</label>
                                <input type='Date' 
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            
                            <div className='mar'>
                                <label>Hora</label>
                                <input type='time' 
                                    onChange={(e) => setHour(e.target.value)}
                                />
                            </div>
                            
                            <div className='mar'>
                                <label>Convênio:</label>
                                <div className='ch'>
                                    <label>Sim</label>
                                    <input type='radio' 
                                        onClick={() => setHealthPlan("Sim")}
                                    />
                                    <label>Não</label>
                                    <input type='radio' 
                                        onClick={() => setHealthPlan("Não")}
                                    />
                                </div>
                            </div>
                            
                            <div className='mar'>
                                <label>Primeira Consulta:</label>
                                <div className='ch'>
                                    <label>Sim</label>
                                    <input type='radio' 
                                        onClick={() => setFirstAppointment("Sim")}
                                    />
                                    <label>Não</label>
                                    <input type='radio' 
                                        onClick={() => setFirstAppointment("Não")}
                                    />
                                </div>
                            </div>
                            
                            <div className='mar'>
                                <label>Motivo da Consulta:</label>
                                <textarea  placeholder='Deixe seu motivo pela consulta' 
                                    onChange={(e) => setMotivation(e.target.value)}
                                cols="6" rows="4"></textarea>
                            </div>
                            
                            <div className='confir'>
                                <input className='gree' type='button' value='Confirmar' 
                                    onClick={(e) => Consulta(e)}
                                />
                                <Link to='/agendar'><input className='ree' type='button' value='Cancelar' /></Link>
                            </div>
                        </div>
                    </BkConsul>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Consulta
