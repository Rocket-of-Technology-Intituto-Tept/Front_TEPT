import React, { useState, useEffect } from 'react';
import Footer from '../../../Footer/Footer';
import NavBar from '../../../NavBar/NavBar';

import Loading from '../../Loading/Loading';

function EsqueceuS() {
    const [Carregando, setCarregando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setCarregando(false)
        }, 1000)
    });

    return (
        <>
            {Carregando ? <Loading/> : (
                <div>
                    <NavBar/>
                        <h1>RECUPERAR SENHA</h1>

                        
                    <Footer/>
                </div>
            )}
        </>
    )
}

export default EsqueceuS
