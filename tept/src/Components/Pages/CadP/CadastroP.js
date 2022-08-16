import React, { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";

import { Forms, FormsWrap } from "./CadPSt";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from "../../Loading/Loading";

import Logo from '../assets/logo_Projeto_Final.png';

import { api } from '../../Service/Api';

function CadastroP() {
    const [Carregando, setCarregando] = useState(true)
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
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
        api.post("/user/register", {
            "name": name,
            "cpf": cpf.replaceAll("-", "").replaceAll(".", ""),
            "birth": birth.replaceAll("/", "").replaceAll("/", ""),
            "phone": phone.replaceAll("-", "").replaceAll("(", "")
                .replaceAll(")", "").replaceAll(" ", ""),
            "email": email,
            "password": password

        }).then((res) => {
            if(res.data.message.errors){
                return notify("Falha ao cadastrar Usuario")
            }
            return notify("Usuario Cadastrado com Sucesso")
        })
            .catch((err) => {
               return notify("Usuario Não Cadastrado")
            })
    }

    useEffect(() => {
        setTimeout(() => {
            setCarregando(false)
        }, 1000)
    });

    return (
        <div className="body">
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
                    
                    <Forms>
                        <div className='head-logo'>
                            <img src={Logo} alt='Logo' />
                        </div>

                        <FormsWrap>
                            <div className="form-logo">
                                <h1>Crie Sua Conta</h1>
                            </div>

                            <div className="body-form">
                                <div className="inp">
                                    <h3>Nome Completo</h3>
                                    <input type="text" name="Nome"  
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nome Completo"
                                        required
                                    />
                                </div>

                                <div className="inp">
                                    <h3>CPF</h3>
                                    <InputMask type="cpf"
                                        name="CPF"
                                        mask='999.999.999-99'
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        placeholder="CPF"
                                        required
                                    />
                                </div>

                                <div className="inp">
                                    <h3>Data Nascimento</h3>
                                    <InputMask type="text" name="Data"
                                        mask="99/99/9999"
                                        value={birth} 
                                        onChange={(e) => setData(e.target.value)}
                                        placeholder="Data Nascimento"
                                        required={true}
                                    />
                                </div>

                                <div className="inp">
                                    <h3>Telefone</h3>
                                    <InputMask type="telefone" name="Telefone"
                                        mask="(99) 9 9999-9999"
                                        value={phone} 
                                        onChange={(e) => setTelefone(e.target.value)}
                                        placeholder="Telefone"
                                    />
                                </div>

                                <div className="inp">
                                    <h3>E-mail</h3>
                                    <input type="email" name="E-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="E-mail"
                                    />
                                </div>

                                <div className="inp">
                                    <h3>Senha</h3>
                                    <input type="password" name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Senha"
                                    />
                                </div>

                                <div className="botao">
                                    <button onClick={(e) => postUser(e)}>
                                        Criar Conta
                                    </button>
                                </div>
                            </div>
                        </FormsWrap>
                    </Forms>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default CadastroP;