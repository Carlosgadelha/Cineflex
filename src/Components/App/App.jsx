import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Sessoes from "../Sessoes/Sessoes"

import "./reset.css"
import "./style.css"

export default function App(){
    return (
        <BrowserRouter>
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
            </Routes>
        </BrowserRouter> 
    )
}