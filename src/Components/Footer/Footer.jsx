import styled from 'styled-components';

export default function Footer(props){
    return(
        <Container>
            <Borda>
                <Imagem src={props.imagem}/>
            </Borda>
            <Titulo> 
                {props.titulo}
            </Titulo>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    display: flex;
    align-items:center;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
`
const Titulo = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    margin-left: 14px;
    align-items: center;
    color: #293845;
`
const Borda = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
`

const Imagem = styled.img`
    width: 48px;
    height: 72px;
`