import styled from "styled-components";

export default function Titulo(props){
    return(
      <Header>{props.children}</Header>
    )
}

const Header = styled.h1`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    margin-top: 67px;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
`
