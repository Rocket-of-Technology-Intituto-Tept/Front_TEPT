import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

import { BackP, SideBar, Usuario } from './PacienteSt';

import Perfil from '../assets/perfil.png'

import Loading from '../../Loading/Loading';
import NavLogin from '../../NavBarLo/NavLogin';

// import { api } from '../../Service/Api';

function Paciente() {
  const [Carregando, setCarregando] = useState(true)
  // const [users, setUsers] = useState([])

  let navigate = useNavigate();

  // useEffect(() => {
  //   api.post("/user/find/user").then((res) => {
  //     setUsers(res.data.Users)
  //     console.log(res.data.Users)
  //   })
  // }, []);

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
          <BackP>
            <SideBar>
              <div className='bar'>
                <FaUserCircle />
                <Link to='/paciente'><h2>Perfil</h2></Link>
              </div>
              <div className='bar'>
                <BsCalendar3 />
                <Link to='/agendar'><h2>Agendamentos</h2></Link>
              </div>
              <div className='bar'>
                <AiOutlineClose />
                <button onClick={() => {
                  localStorage.removeItem('token');
                  navigate("/")
                }}>
                  Sair
                </button>
              </div>
            </SideBar>

            {/* {users.map((user) =>
              
            )} */}

            <Usuario>
              <div className='perfil'>
                <img src={Perfil} alt='Usuario' />
              </div>

              <div className='nome'>
                <h1>Nome Completo</h1>
              </div>
            </Usuario>
          </BackP>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Paciente