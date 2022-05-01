import HeaderHome from "../headerHome"
import { Content, SectionPlanB, SeeHowButton } from "./style"


const PlanBSection = () => {
    return (
        <SectionPlanB>
            <HeaderHome />
            <Content>
                <h2>Não existe um planeta B</h2>
                <h6>Todos os cenários analisados pelo IPCC apontam para uma mesma conclusão: é  preciso cortar emissões e cortá-las o mais rápido possível.</h6>
                <SeeHowButton>Saiba como</SeeHowButton>
            </Content>
        </SectionPlanB>
    )
}

export default PlanBSection