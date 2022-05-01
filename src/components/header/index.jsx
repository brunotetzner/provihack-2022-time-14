import { StyledHeader, StyledNavegation } from "./style";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <img src={Logo} target="logo" />
      </div>

      <StyledNavegation>
        <nav onClick={() => navigate(`/${type}`)}>Oportunidades</nav>
        <nav onClick={() => navigate(`/${type}/info`)}>Material de apoio</nav>
        <nav onClick={() => navigate(`/${type}/editals`)}>Editais</nav>
      </StyledNavegation>
      <div id="logout" onClick={() => navigate("/")}>
        <RiLogoutBoxRLine />
      </div>
    </StyledHeader>
  );
};
export default Header;
