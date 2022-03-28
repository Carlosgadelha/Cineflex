import axios from "axios";
import {useEffect, useState} from "react";
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Titulo from "../Titulo/Titulo";

export default function Sessoes(){

    const [horario, setHorarios] = useState([]);
    const [infos, setInfos] = useState({});
    const {idFilme} = useParams();

    useEffect(() => {

       axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
       .then(response =>{
            setHorarios(response.data.days);
            setInfos({titulo:response.data.title, imagem: response.data.posterURL})
       })
       .catch(err => console.log(err))

    },[])

    return(
        <Container>
            <Titulo>Selecione o horário</Titulo>
            {horario.map(dia => <Sessao dia={dia.weekday} data={dia.date} horarios = {dia.showtimes} key={dia.id}/>)}
            <Footer imagem={infos.imagem} titulo={infos.titulo}/>
        </Container>
    )
}


function Sessao(props){
    return(
        <Data>
           <Dia>{props.dia} - {props.data}</Dia>
           <Horarios>
                {props.horarios.map(horario => 
                   <Link to={`/assentos/${horario.id}`} style={{textDecoration: 'none'}}>
                       <Horario key={horario.id} >{horario.name} </Horario>
                   </Link> 
                )}
           </Horarios>
        </Data>
    )
}

const Container = styled.div`
    margin-left: 24px;
`
const Data = styled.div`
    margin-bottom: 23px;
`
const Dia = styled.div`
    width: 280px;
    height: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    margin-bottom:22px;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
`
const Horarios = styled.div`
    display: flex;

`

const Horario = styled.div`
    width: 83px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
`
