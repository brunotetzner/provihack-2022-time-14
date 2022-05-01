import {
  ContainerSignInPage,
  ContainerSignIn,
  ButtonSchool,
  ButtonOng,
} from "./style";
import logo from "../../assets/images/bird.svg";
import { MdPeople } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <ContainerSignInPage>
      <ContainerSignIn>
        <img src={logo} alt="logomarca" />
        <h1>Bem-vindo ao passarinhos</h1>
        <p>Faça o login para encontrar o seu parceiro pela sustentabilidade</p>
        <ButtonSchool onClick={() => navigate("/school")}>
          <label>
            <IoSchoolSharp />
          </label>
          Sou uma escola
        </ButtonSchool>
        <ButtonOng onClick={() => navigate("/ong")}>
          <label>
            <MdPeople />
          </label>
          Sou uma ONG
        </ButtonOng>
      </ContainerSignIn>
    </ContainerSignInPage>
  );
};

export default Signin;
