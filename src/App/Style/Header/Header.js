import styled from "styled-components"
import { Link } from "react-router-dom";


export const NavBar = styled.nav`
    display: flex;
    background-color: aliceblue;
    height: 100px ;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    padding: 10px;
    color: red;
`

export const Logo = styled.h1`
    text-decoration: none;
    padding: 100px;
    color: blue;
`
