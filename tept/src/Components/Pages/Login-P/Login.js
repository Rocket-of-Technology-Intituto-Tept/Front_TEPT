import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

import { BacLoginP } from './LoginPSt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../assets/logo_Projeto_Final.png';

import Loading from '../../Loading/Loading';

import { api } from '../../Service/Api';

function Login() {
    const [Carregando, setCarregando] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useNavigate()

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

    const loginUser = async (e) => {
        e.preventDefault();
        await api.post("/user/login", {
            "email": email,
            "password": password
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            history("/paciente")
        })
            .catch(res => {
                <>
                    {notify("Usuario Não Encontrado")}
                </>
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

                    <NavBar />

                    <BacLoginP>
                        <div className='head-logo'>
                            <img src={Logo} alt='Logo' />
                        </div>
                        
                        <div className="card-back">
                            <div className="card-header">
                                <h2>Faça seu Login</h2>
                            </div>

                            <div className='card-wraper'>
                                <div className="card-con">
                                    <div className="card-con-ar">
                                        <label for="email">E-mail</label>
                                        <input type="text" id="usuario"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='E-mail' autocomplete="off" />
                                    </div>

                                    <div className="card-con-ar">
                                        <label for="password">Senha</label>
                                        <input type="password" id="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Senha' autocomplete="off" />
                                    </div>
                                </div>

                                <div className="foo">
                                    <input type="submit"
                                        onClick={(e) => loginUser(e)}
                                        value="Entrar" />
                                </div>

                                <div className="butt">
                                    <a class="criar conta">Ainda não possui uma conta?</a>
                                    <Link to='/cadastro-paciente'><button name="button">Criar conta</button></Link>
                                </div>

                                <div className='esnha'>
                                    <a>Esqueceu sua Senha?</a>
                                </div>
                            </div>
                        </div>
                    </BacLoginP>
                    
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Login