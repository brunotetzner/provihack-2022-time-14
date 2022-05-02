import LogoBird from "../../assets/images/bird.svg";
import { ButtonsContainer, Header, LoginButton } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderHome = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <img 
        src={LogoBird}
        alt="Logomarca"
        onClick={() => navigate("/")}
      />
      <ButtonsContainer>
        <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
      </ButtonsContainer>
    </Header>
  );
};

export default HeaderHome;
