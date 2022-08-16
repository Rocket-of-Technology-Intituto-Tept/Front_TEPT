import React, { useState, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import NavLogin from '../../../NavBarLo/NavLogin';
import Footer from '../../../Footer/Footer';

import { BackSide, AgendA } from './AgendaSt';

import Loading from '../../../Loading/Loading';
import Calendario from '../../../Calendario/Calendario';

function Agenda() {
  const [Carregando, setCarregando] = useState(true)
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 1000)
  });

  return (
    <div>
      {Carregando ? <Loading /> : (
        <div>
          <NavLogin />
          <AgendA>
            <BackSide>
              <div className='emo'>
                <FaUserCircle />
                <Link to='/medico'><h2>Perfil</h2></Link>
              </div>
              <div className='emo'>
                <BsCalendar3 />
                <Link to='/agenda'><h2>Agenda</h2></Link>
              </div>
              <div className='emo'>
                <AiOutlineClose />
                <button onClick={() => {
                  localStorage.removeItem('token')
                  navigate("/")
                }}>
                  Sair
                </button>
              </div>
            </BackSide>
            <div className='calen'>
              <Calendario/>
            </div>
          </AgendA>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Agenda
