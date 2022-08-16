import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Loading from '../../Loading/Loading';
import NavBar from '../../NavBar/NavBar';

import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from './ContatoSt';

import { api } from '../../Service/Api';

function Contato() {
  const [Carregando, setCarregando] = useState(true)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [opinion, setOpinion] = useState("")

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

  const sendContato = async (e) => {
    e.preventDefault();
    await api.post("/contact", {
      "name": name,
      "email": email,
      "phone": phone.replaceAll("-", "").replaceAll("(", "").replaceAll(")", "").replaceAll(" ", ""),
      "opinion": opinion
    }).then(res => {
      if(res.data.message.errors){
        return notify("Falha ao Enviar a Mensagem")
    }
    return notify("Mensagem Enviada com Sucesso")
    })
      .catch(res => {
        return notify("Erro ao Tentar Enviar a Mensagem")
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
            <div className="back-form">
              <div className="titu">
                <h1>Entre em contato</h1>
              </div>
              <div className="info">

                <div className="nome">
                  <label for="nome">Nome Completo</label>
                  <input type="text" id="nomeid"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Nome Completo'
                    required="required"
                    name="nome" />
                </div>

                <div className="nome">
                  <label for="fone">Telefone</label>
                  <InputMask type="tel" id="foneid"
                    mask="(99) 9 9999-9999"
                    value={phone} required
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Telefone'
                    name="fone" />
                </div>

                <div className="nome">
                  <label for="email">E-mail</label>
                  <input type="email" id="emailid"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail' name="email" />
                </div>

              </div>

              <div className="nome">
                <label for="text">Deixe a sua Opinião</label>
                <textarea placeholder='Deixe a sua Opinião'
                  onChange={(e) => setOpinion(e.target.value)}
                  cols="6" rows="7"></textarea>
              </div>

              <div className="enviar">
                <input type="submit" className="enviar"
                  onClick={(e) => sendContato(e)}
                  value="Enviar" />
              </div>
            </div>
          </Form>
          
          <Footer />
        </div >
      )}
    </div>
  )
}

export default Contato;