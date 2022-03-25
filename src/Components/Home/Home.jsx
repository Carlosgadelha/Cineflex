// import "./style.css"

import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";

export default function Home(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

       axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
       .then(response =>{
            setFilmes(response.data);
       })
       .catch(err => console.log(err))

    },[])

    return(
        <div className="home">
            <Titulo>Selecione o filme</Titulo>
            <Filmes>
                {filmes.map( filme => <Filme imagem={filme.posterURL} key={filme.id}/>)}      
            </Filmes>
        </div> 
        
    )

    function Filme(props){
        return(
            <Borda>
                <Imagem src={props.imagem}/>
            </Borda>
        )
    }
}

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

const Filmes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`

const Borda = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`

const Imagem = styled.img`
    width: 129px;
    height: 193px;
`
