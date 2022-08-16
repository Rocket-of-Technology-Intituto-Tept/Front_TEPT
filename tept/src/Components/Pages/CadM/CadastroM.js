import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

import { Form, FormBack } from './CadSt';
import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../assets/logo_Projeto_Final.png';

import Loading from '../../Loading/Loading';

import { api } from '../../Service/Api';

function CadastroM() {
    const [Carregando, setCarregando] = useState(true)
    const [name, setName] = useState("")
    const [org, setOrg] = useState()
    const [cod, setCod] = useState("")
    const [birth, setData] = useState("")
    const [phone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    const postUser = (e) => {
        e.preventDefault();
        api.post("/doctor/register", {
            "name": name,
            "org": org,
            "cod": cod,
            "birth": birth.replaceAll("/", "").replaceAll("/", ""),
            "phone": phone.replaceAll("-", "").replaceAll("(", "")
                .replaceAll(")", "").replaceAll(" ", ""),
            "email": email,
            "password": password
        }).then((res) => {
            if(res.data.message.errors){
                return notify("Falha ao cadastrar Medico")
            }
            return notify("Medico Cadastrado com Sucesso")
        }).catch((err) => {
            return notify("Medico Não Cadastrado")
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
                    
                    <Form>
                        <div className='head-logo'>
                            <img src={Logo} alt='Logo' />
                        </div>

                        <FormBack>
                            <div className="logo-form">
                                <h1>Crie Sua Conta</h1>
                            </div>

                            <div className='bf'>
                                <div className="pni">
                                    <h3>Nome Completo</h3>
                                    <input type="nome"
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Nome Completo' />
                                </div>

                                <div className="pni">
                                    <h3>Órgão Emissor</h3>
                                </div>

                                <div className="orgao-emissor">
                                    <input type="button"
                                        onClick={() => setOrg("CRP")}
                                        value="CRP" />
                                    <input type="button"
                                        onClick={() => setOrg("CRM")}
                                        value="CRM" />
                                    <input type="button"
                                        onClick={() => setOrg("RQE")}
                                        value="RQE" />
                                    <input type="button"
                                        onClick={() => setOrg("CFESS")}
                                        value="CFESS" />
                                </div>

                                <div className="pni">
                                    <h3>Código do Órgão Emissor</h3>
                                    <input type="text"
                                        onChange={(e) => setCod(e.target.value)}
                                        placeholder='Código do Órgão Emissor' />
                                </div>

                                <div className="pni">
                                    <h3>Data Nascimento</h3>
                                    <InputMask type="text"
                                        mask="99/99/9999"
                                        value={birth} 
                                        onChange={(e) => setData(e.target.value)}
                                        placeholder='Data Nascimento' />
                                </div>

                                <div className="pni">
                                    <h3>Telefone</h3>
                                    <InputMask type="telefone"
                                        mask="(99) 9 9999-9999"
                                        value={phone} 
                                        onChange={(e) => setTelefone(e.target.value)}
                                        placeholder='Telefone' />
                                </div>

                                <div className="pni">
                                    <h3>E-mail</h3>
                                    <input type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='E-mail' />
                                </div>

                                <div className="pni">
                                    <h3>Senha</h3>
                                    <input type="password" name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Senha' />
                                </div>

                                <div className="btn">
                                    <button onClick={(e) => postUser(e)}>
                                        Criar Conta
                                    </button>
                                </div>
                            </div>
                        </FormBack>
                    </Form>
                    
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default CadastroM;