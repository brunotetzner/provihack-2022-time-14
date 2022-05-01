import LogoBird from "../../assets/images/bird.svg"
import { ButtonsContainer, Header, JoinButton, LoginButton } from "./style"

const HeaderHome = () => {
    return (
        <Header>
            <img src={LogoBird} alt="Logomarca" />
            <ButtonsContainer>
                <LoginButton>Login</LoginButton>
                <JoinButton>Faça parte</JoinButton>
            </ButtonsContainer>
        </Header>
    )
}

export default HeaderHome