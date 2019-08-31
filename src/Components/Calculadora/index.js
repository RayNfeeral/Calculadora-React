import React from 'react';
import Visor from '../Visor'
import Botao from '../Botão'
import styled from 'styled-components'



const botoes = [
  {
    valor: 'AC',
    colorido: true,
    largo: true
  },
  {
    valor: '%',
    colorido: true,
    largo: false
  },
  {
    valor: '/',
    colorido: true,
    largo: false
  },
  {
    valor: '7',
    colorido: false,
    largo: false
  },
  {
    valor: '8',
    colorido: false,
    largo: false
  },
  {
    valor: '9',
    colorido: false,
    largo: false
  },
  {
    valor: '*',
    colorido: true,
    largo: false
  },
  {
    valor: '4',
    colorido: false,
    largo: false
  },
  {
    valor: '5',
    colorido: false,
    largo: false
  },
  {
    valor: '6',
    colorido: false,
    largo: false
  },
  {
    valor: '-',
    colorido: true,
    largo: false
  },
  {
    valor: '1',
    colorido: false,
    largo: false
  },
  {
    valor: '2',
    colorido: false,
    largo: false
  },
  {
    valor: '3',
    colorido: false,
    largo: false
  },
  {
    valor: '+',
    colorido: true,
    largo: false
  },
  {
    valor: '0',
    colorido: false,
    largo: true
  },
  {
    valor: '.',
    colorido: false,
    largo: false
  },
  {
    valor: '=',
    colorido: true,
    largo: false
  },
]

const Teclado = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 200px
`

function Calculadora() {
  const [state, setState] = React.useState({ resultado: '' });

  return (
    <div>
      <Visor resultado={state.resultado} />
      <Teclado>
      {botoes.map(btn => {
        return <Botao 
          colorido={btn.colorido}
          largo={btn.largo}
          valor={btn.valor}
          onClick={() => {
            if(btn.valor === 'AC'){
              setState({resultado: '' })
            } else if (btn.valor === '='){
              setState({resultado: eval(state.resultado)})
            } else {
              setState({resultado: state.resultado + btn.valor})
            }
            }
          }
        />
      })}
      </Teclado>
    </div>
  );
}

export default Calculadora;
