import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

import { BacLogin } from './LoginSt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../assets/logo_Projeto_Final.png';

import Loading from '../../Loading/Loading';

import { api } from '../../Service/Api';

function LoginM() {
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

    const LoginDoctor = async (e) => {
        e.preventDefault();
        await api.post("/doctor/login", {
            "email": email,
            "password": password
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            history("/medico")
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

                    <BacLogin>
                        <div className='head-logo'>
                            <img src={Logo} alt='Logo' />
                        </div>

                        <form className="card">
                            <div className="header-card">
                                <h2>Faça seu Login</h2>
                            </div>

                            <div className="card-content">
                                <div className="card-content-area">
                                    <label for="usuario">E-mail</label>
                                    <input type="text" id="usuario"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='E-mail' autocomplete="off" />
                                </div>

                                <div className="card-content-area">
                                    <label for="password">Senha</label>
                                    <input type="password" id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Senha' autocomplete="off" />
                                </div>

                                <div className="card-footer">
                                    <input type="button"
                                        onClick={(e) => LoginDoctor(e)}
                                        value="Entrar" class="submit" />
                                </div>

                                <div className="butao">
                                    <a class="criar conta">Ainda não possui uma conta?</a>
                                    <Link to='/cadastro-medico'>
                                        <button name="button">Criar conta</button>
                                    </Link>
                                </div>
                                <div className='senha'>
                                    <a>Esqueceu sua Senha?</a>
                                </div>
                            </div>
                        </form>
                    </BacLogin>

                    <Footer />
                </div>
            )}
        </div>
    )
}

export default LoginM;