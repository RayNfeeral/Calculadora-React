import React from 'react';
import styled from 'styled-components'

const Tela = styled.div`
    width: 200px;
    padding-top: 20px;
    background-color: black;
    color: white;
    font-size: 60px;
    text-align: right;
    font-weight: bold;
    min-height: 80px
`

function Visor(props){
    return <Tela>{props.resultado}</Tela>;
}

export default Visor;