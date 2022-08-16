import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

import Psicologo from '../assets/pexels-shvets-production-7176026.jpg';
import Psquiatra from '../assets/pexels-cottonbro-4098152.jpg';
import Servico from '../assets/pexels-ron-lach-9869650.jpg';
import Teleatendimento from '../assets/teleatendimento.png';

import Loading from '../../Loading/Loading';

import { 
  Container, 
  Lay, 
  Tele 
} from './HomeSt';

function Home() {
  const [Carregando, setCarregando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 1000)
  });

  return (
    <div className='back-home'>
      {Carregando ? <Loading /> : (
        <div>
          <NavBar />
          <Lay>
            <div className='icon'>
              <img src='./logo_Projeto_Final.png' alt='Instituto TEPT' />
            </div>

            <div className='text'>
              <h1>Instituto TEPT</h1>
            </div>
          </Lay>

          <Container>
            <div className='con-t'>
              <h1>Especialidades</h1>
            </div>
            <div className='container-back'>
              <div className='container-wrapper'>
                <img src={Psicologo} alt='Psicólogo' />
                <h2>Psicólogo</h2>
                <p>A partir da escuta ativa e acolhedora, o profissional traça um diagnóstico e pode aplicar psicoterapias com vistas ao bem estar do paciente, a partir da reabilitação de sua saúde mental.</p>
              </div>

              <div className='container-wrapper'>
                <img src={Psquiatra} alt='Psiquiatra' />
                <h2>Psiquiatra</h2>
                <p>A psiquiatria costuma chegar a um diagnóstico médico por meio do diálogo, de exames e testes clínicos e neurológicos, como, por exemplo, os exames de imagem e a avaliação do histórico médico do paciente.</p>
              </div>

              <div className='container-wrapper'>
                <img src={Servico} alt='Assistente Social' />
                <h2>Assistente Social</h2>
                <p>Analisa e presta apoio à pacientes e seus familiares enquanto membros de uma sociedade, assegurando a eles seus direitos civis. Atua conectando pessoas em situações de vulnerabilidade e exclusão social.</p>
              </div>
            </div>
          </Container>

          <Tele>
            <div className="tele-img">
              <img src={Teleatendimento} alt="Teleatendimento" />
            </div>

            <div className="tele-txt">
              <h1>Teleconsulta</h1>
              <p>A teleconsulta é a possibilidade de realizar uma consulta médica de forma remota, 
                por meio de tecnologias seguras de comunicação online, 
                como videoconferência ou aplicativos de vídeo-chamadas, 
                utilizando computadores, tablets ou smartphones para a função.
              </p>
            </div>
          </Tele>
          <Footer />
        </div>
      )};
    </div>
  )
}

export default Home;