import LogoBird from "../../assets/images/bird.svg"
import { Header, JoinButton, LoginButton } from "./style"

const HeaderHome = () => {
    return (
        <Header>
            <img src={LogoBird} alt="Logomarca" />
            <div>
                <LoginButton>Login</LoginButton>
                <JoinButton>Faça parte</JoinButton>
            </div>
        </Header>
    )
}

export default HeaderHome