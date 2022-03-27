import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import { useParams } from 'react-router-dom';

import Footer from "../Footer/Footer"

export default function Home(){

    const [assentos, setAssentos] = useState([]);
    const [infos, setInfos] = useState({});
    const [selecionado, setSelecionado] = useState([]);
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
             console.log(response.data.movie.title)
             setInfos({'titulo':response.data.movie.title, 'imagem':response.data.movie.posterURL, 'sessao':`${response.data.day.weekday} - ${response.data.name}`})
        })
        .catch(err => console.log(err))
 
     },[])

     function VerificarDisponibilidade(ocupado,index){
         if(ocupado){
             alert("assento não está disponível")
         }else{
            if(selecionado.includes(index)){
               selecionado.splice(selecionado.indexOf(index),1)
               setSelecionado([...selecionado])
            }else setSelecionado([...selecionado,index]);
         }
         
     }

    return(
        <Container>  
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <Assentos>
                {assentos.map( (assento, index) => 
                (index < 9)? <Assento ocupado ={selecionado.includes(index)? "":assento.isAvailable} onClick={()=> VerificarDisponibilidade(assento.isAvailable,index)}>{`0${assento.name}`}</Assento>: <Assento ocupado ={selecionado.includes(index)? "":assento.isAvailable} onClick={()=> VerificarDisponibilidade(assento.isAvailable,index)}>{assento.name}</Assento>)}
            </Assentos>
            <Legenda>
                {tipos.map(item => 
                    <Opcao key={item.nome}>
                        <Item tipo={item.tipo}></Item>
                        <p>{item.nome}</p>
                    </Opcao>
               )}
            </Legenda>
            <Cliente>
                <h1>Nome do comprador:</h1>
                <input placeholder="Digite seu nome..."></input>
                <h1>CPF do comprador:</h1>
                <input placeholder="Digite seu CPF..."></input>
            </Cliente>
            <button >Reservar assento(s)</button>
            <Footer titulo={infos.titulo} imagem ={infos.imagem} sessao ={infos.sessao}/>

        </Container>
       
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        width: 225px;
        height: 42px;
        margin-top: 57px;
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
    background: ${props => props.ocupado?'#FBE192':(props.ocupado === false )?'#C3CFD9':'#8DD7CF'};
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
        font-size: 14px;
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

const Cliente = styled.div`
    width: 327px;
    margin-top: 40px;

    h1{
        text-align: left;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;

        &:nth-of-type(2n){ margin-top: 7px}
    }

    input{
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-indent: 18px;
        align-items: center;
        color: #AFAFAF;
    }
`
