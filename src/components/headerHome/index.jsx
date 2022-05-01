import LogoBird from "../../assets/images/bird.svg";
import { ButtonsContainer, Header, JoinButton, LoginButton } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderHome = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <img src={LogoBird} alt="Logomarca" />
      <ButtonsContainer>
        <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
      </ButtonsContainer>
    </Header>
  );
};

export default HeaderHome;
