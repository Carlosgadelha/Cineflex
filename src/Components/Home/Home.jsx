import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

import Titulo from "../Titulo/Titulo"

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
                {filmes.map( filme => <Filme imagem={filme.posterURL} id={filme.id} key={filme.id}/>)}      
            </Filmes>
        </div> 
        
    )

    function Filme(props){
        
        return(
            <Link to={`/sessoes/${props.id}`}>
                <Borda>
                     <Imagem src={props.imagem}/>
                </Borda>
            </Link>
            
        )
    }
}

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
