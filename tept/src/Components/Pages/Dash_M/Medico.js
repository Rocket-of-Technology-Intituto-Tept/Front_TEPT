import React, { useState, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavLogin from '../../NavBarLo/NavLogin';

import { SideBack } from './MedicoSt';

import Perfil from '../assets/perfil.png';

import Loading from '../../Loading/Loading';

// import { api } from '../../Service/Api';

function Medico() {
  const [Carregando, setCarregando] = useState(true)
  // const [doctors, setDoctors] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 1000)
  });

  // useEffect(() => {
  //   api.get("/doctor/list").then((res) => {
  //     setDoctors(res.data.Doctor)
  //     console.log(res.data.Doctor)
  //   })
  // }, []);

  return (
    <div>
      {Carregando ? <Loading /> : (
        <div>
          <NavLogin />
          <SideBack>
            <div className='back-side'>
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
            </div>

            {/* {doctors.map((doctor) =>
              
            )} */}

            <div className='perfil-m'>
              <div className='foto'>
                <img src={Perfil} alt='Perfil' />
              </div>
              <div className='nome-m'>
                <h1>Nome Completo</h1>
              </div>
            </div>
          </SideBack>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Medico