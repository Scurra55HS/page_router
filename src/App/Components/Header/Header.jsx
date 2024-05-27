
import { NavBar , LinkStyled, Logo} from "../../Style/Header/Header";

const Header = () => {
    return(
        <NavBar>
            <Logo>sdasdasdsa</Logo>
            <LinkStyled to={'/'}>Home</LinkStyled>
            <span>|</span>
            <LinkStyled to={'/sobre'}>Sobre</LinkStyled>
            <span>|</span>
            <LinkStyled to={'/contato'}>Contato</LinkStyled>
        </NavBar>
    )
}

export default Header;