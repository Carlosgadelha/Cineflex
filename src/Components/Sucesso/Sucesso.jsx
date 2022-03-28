import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sucesso(){

    const {state} = useLocation();
    const navigate = useNavigate();
    const { titulo, data, assentos, comprador, CPF } = state;
    
    return (
        <Container>
            <Titulo>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1>
            </Titulo>
            <Filme>
                <h2>Filme e sessão</h2>
                <p>{titulo}</p>
                <p>{data}</p>
            </Filme>

            <Ingressos>
                <h2>Ingressos</h2>
                {assentos.map( assento => <p key={assento}>{`Assento ${assento+1}`}</p> )}
            </Ingressos>
            <Comprador>
                <h2>Comprador</h2>
                <p>{`NOME: ${comprador}`}</p>
                <p>{`CPF: ${CPF}`}</p>
            </Comprador>
            <button  onClick ={()=> navigate('/')}>Voltar pra Home</button>

        </Container>
 
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 7px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 70px;
        background: #E8833A;
        border-style: none;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }

`

const Titulo = styled.h1`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-top: 67px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;

`
const Filme = styled.div`
    width: 317px;
    height: 110px;
    margin-top: 25px;
    margin-bottom: 10px;
`
const Ingressos = styled.div`
    width: 317px;
    margin-bottom: 20px;
`

const Comprador = styled.div`
    width: 317px;
    height: 110px;
    margin-bottom: 10px;
`
