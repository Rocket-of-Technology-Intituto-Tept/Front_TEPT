import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { MenUCont } from './MenuMobSt';

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    return (
        <MenUCont isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <div className='menu-mob'>
                <ul>
                    <Link to='/'><li><h3>Home</h3></li></Link>
                    <Link to='/contato' ><li><h3>Contato</h3></li></Link>
                    <Link to='/acessar-conta'><li><input type="button" value="Acessar Conta" /></li></Link>
                </ul>
            </div>
        </MenUCont>
    )
}