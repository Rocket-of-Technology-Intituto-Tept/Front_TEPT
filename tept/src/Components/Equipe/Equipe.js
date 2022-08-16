import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithubSquare,
  FaLinkedin
} from 'react-icons/fa';
import { 
  BackEquipe,
  Nomes 
} from './EquipeSt';

import Ananias from '../Equipe/Perfil/Ananias.jpg';
import Dayanny from '../Equipe/Perfil/Dayanny.jpeg';
import Erika from '../Equipe/Perfil/Erika.jpeg';
import Juliana from '../Equipe/Perfil/Juliana.jpeg';

import Loading from '../Loading/Loading';

function Equipe() {
  const [Carregando, setCarregando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 1000)
  });

  return (
    <div>
      {Carregando ? <Loading /> : (
        <BackEquipe>
          <div className='equipe'>
            <Link to='/'><h1>Participantes</h1></Link>
          </div>

          <Nomes>
            <div className='participantes'>
              <h1>Erika Ximenes</h1>
              <img src={Erika} alt='Erika' className='par-b' />
              <div className='rede'>
                <a href='https://github.com/Erikaximenes' className='git'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/erikax' className='lin'><FaLinkedin /></a>
              </div>
            </div>

            <div className='participantes'>
              <h1>Ananias Nicolau</h1>
              <img src={Ananias} alt='Ananias' className='par-g' />
              <div className='rede'>
                <a href='https://github.com/NaniasNic' className='git'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/naniasnic/' className='lin'><FaLinkedin /></a>
              </div>
            </div>

            <div className='participantes'>
              <h1>Julliana Vitória</h1>
              <img src={Juliana} alt='Julliana' className='par-b' />
              <div className='rede'>
                <a href='https://github.com/DevJulliana' className='git'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/julliana-santos-/' className='lin'><FaLinkedin /></a>
              </div>
            </div>

            <div className='participantes'>
              <h1>Dayanny Gyselly</h1>
              <img src={Dayanny} alt='Dayanny' className='par-g' />
              <div className='rede'>
                <a href='https://github.com/Dayanny1' className='git'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/dayanny-gyselly-957572235/' className='lin'><FaLinkedin /></a>
              </div>
            </div>
          </Nomes>
        </BackEquipe>
      )}
    </div>
  )
}

export default Equipe