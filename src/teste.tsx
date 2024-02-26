import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '36px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`
function Teste() {
  return (
    <>
      <Botao fontSize="26px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal>
        Botao Perigo
      </BotaoPerigo>
    </>
  )
}
export default Teste
