import React from 'react';
import { Link } from 'react-router-dom';
// import { CgMenu } from 'react-icons/cg';
import { MenuLogin } from './NavLoginSt';


function NavLogin() {
//   const [menuIsVisible, setMenuIsVisible] = useState(false)

//   useEffect(() =>{
//     document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
//   }, [menuIsVisible])

  return (
    <>
      <MenuLogin>
        <div className='imag'>
          <Link to='/'><img src='./logo_Projeto_Final.png' alt='Logo' /></Link>
          <h1>Instituto TEPT</h1>
        </div> 
        
        {/* <MenuMobile 
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        /> */}
        {/* <CgMenu onClick={() => setMenuIsVisible(true)} /> */}

        <div className='menu-desk'>
          <ul>
            <Link to='/'><li><h3>Home</h3></li></Link>
            <Link to='/contato' ><li><h3>Contato</h3></li></Link>
            <Link to='/rocket-of-technology' ><li><h3>Sobre Nós</h3></li></Link>
          </ul>
        </div>
      </MenuLogin>
    </>
  )
}

export default NavLogin