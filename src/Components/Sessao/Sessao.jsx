import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import { useParams } from 'react-router-dom';


export default function Home(){

    const [assentos, setAssentos] = useState([]);
    const [infos, setInfos] = useState({});
    const {idSessao} = useParams();
    const tipos =   [{
                        'tipo':'',
                        'nome':'Selecionado'
                    },{
                        'tipo':'Disponivel',
                        'nome':'Disponível'
                    },{
                        'tipo':'indisponivel',
                        'nome':'Indisponível'
                    }]

    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        .then(response =>{
             setAssentos(response.data.seats);
             console.log(response.data)
             setInfos({titulo:response.data.movie.title})
        })
        .catch(err => console.log(err))
 
     },[])

     

    return(
        <Container>  
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <Assentos>
                {assentos.map( (assento, index) => (index < 9)? <Assento ocupado ={assento.isAvailable}>{`0${assento.name}`}</Assento>: <Assento>{assento.name}</Assento>)}
            </Assentos>
            <Legenda>
                {tipos.map(item => 
                    <Opcao key={item.nome}>
                        <Item tipo={item.tipo}></Item>
                        <p>{item.nome}</p>
                    </Opcao>
               )}
            </Legenda>
        </Container>
       
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Assentos = styled.div`
    width: 323px;
    display: flex;
    flex-wrap: wrap;
    
`

const Assento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;
    background: ${props => props.ocupado?'#FBE192':'#C3CFD9'};
    border: ${props => props.ocupado?'1px solid #F7C52B':'1px solid #808F9D;'};
    box-sizing: border-box;
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;

    &:nth-child(10n){ margin-right: 0px}
`
const Legenda = styled.div`
    width: 323px;
    display: flex;
    justify-content: space-around;
`
const Titulo = styled.h1`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;

`
const Opcao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 15px;
        margin-top:7px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

const Item = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => (props.tipo === 'indisponivel')?'#FBE192':(props.tipo === 'Disponivel')?'#C3CFD9':'#8DD7CF'};
    border: ${props => (props.tipo === 'indisponivel')?'1px solid #F7C52B':(props.tipo === 'Disponivel')?'1px solid #7B8B99':'1px solid #1AAE9E'};
    box-sizing: border-box;
    border-radius: 17px;
`