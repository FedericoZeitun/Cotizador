import React, { useState } from 'react';
import Header from './Components/Header'
import styled from '@emotion/styled'
import Formulario from './Components/Formulario'
import Resumen from './Components/resumen'
import Resultado from './Components/resultado'
import Spinner from './Components/spinner'

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`

const ContenedorFormulario = styled.div`
    background-color: #fafafa;
    padding: 3rem;
`


function App(){ 

    const [resumen, guardarResumen] = useState({
        cotizacion: 0,
        datos: {
            marca:'',
            year:'',
            plan:''
        }
    })

    const [ cargando, guardarCargando] = useState(false)

    const { cotizacion, datos} = resumen;

  return (
    <Contenedor>
        <Header
            titulo= "Cotizador de seguros"
        />

        <ContenedorFormulario>
            <Formulario
                guardarResumen={guardarResumen}
                guardarCargando={guardarCargando}
            />


        {cargando ? <Spinner/> : null}

        <Resumen
            datos= {datos}
        />
        {!cargando ?
        <Resultado
            cotizacion={cotizacion}
        /> :
        null
        }

        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
