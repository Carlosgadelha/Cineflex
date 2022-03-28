import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../Home/Home"
import Filme from "../Filme/Filme"
import Sessao from "../Sessao/Sessao"
import Sucesso from "../Sucesso/Sucesso"

import "./reset.css"
import "./style.css"

export default function App(){
    return (
        <BrowserRouter>
            <Link to="/" style={{textDecoration: 'none'}}>
                <header>
                    <h1>CINEFLEX</h1>
                </header>
            </Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Filme />} />
                <Route path="/assentos/:idSessao" element={<Sessao />} />
                <Route path="/assentos/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter> 
    )
}