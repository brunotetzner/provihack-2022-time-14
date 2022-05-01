import { FooterContainer, FooterContent } from "./style"
import LogoBird from "../../assets/images/bird.svg"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <img src={LogoBird} alt={"Logotipo Passarinhos"} />
                <p>Todos os direitos reservados © 2022</p>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer