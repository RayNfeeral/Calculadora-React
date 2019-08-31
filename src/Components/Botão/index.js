import React from 'react'
import styled from 'styled-components'

const BotaoCustomizado = styled.button`
    background-color: ${(props) => props.colorido ? 'orange' : 'lightgray'};
    width: ${(props) => props.largo ? '100px' : '50px'};
    height: 50px;
    border: 1px solid white;
    border-radius: 4px
`

function Botao(props) {
    return (
        <BotaoCustomizado
            colorido={props.colorido}
            largo={props.largo}
            onClick={props.onClick}
        >
        {props.valor}
        </BotaoCustomizado>    
    );        
}

export default Botao;