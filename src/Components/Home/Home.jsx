import imagem from "./image.png";
import "./style.css"


export default function Filmes(){
    return(
        <div className="home">
            <div className="titulo">
                <h1>Selecione o filme</h1>
            </div>
            <div className="filmes">
               <div className="filme">
                   <img src={imagem}/>
               </div>
               <div className="filme">
                   <img src={imagem}/>
               </div>
               <div className="filme">
                   <img src={imagem}/>
               </div>
               <div className="filme">
                   <img src={imagem}/>
               </div>
            </div>
        </div> 

        
        
    )
}