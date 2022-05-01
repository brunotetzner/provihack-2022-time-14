import LogoBird from "../../assets/images/bird.svg"
import { ButtonsContainer, Header, LoginButton } from "./style"

const HeaderHome = () => {
    return (
        <Header>
            <img src={LogoBird} alt="Logomarca" />
            <ButtonsContainer>
                <LoginButton>Login</LoginButton>
            </ButtonsContainer>
        </Header>
    )
}

export default HeaderHome