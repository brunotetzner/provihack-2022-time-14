import { MdPeople, MdOutlineSchool } from 'react-icons/md'
import { RiHandHeartLine } from 'react-icons/ri'
import { People,ListInfo, Ong, School, Icons, TitleInfo, InfosContainer, TitleSection, JoinSectionContainer } from './style'


const Join = () => {
    return (
        <JoinSectionContainer>
            <TitleSection>Junte-se a nossa rede de Passarinhos</TitleSection>
            <ListInfo>

                <InfosContainer>
                    <People>
                        <Icons> <RiHandHeartLine /></Icons>
                       
                    </People>
                    <div>
                        <TitleInfo>5.020</TitleInfo>
                        <p>pessoas impactadas</p>
                    </div>

                </InfosContainer>
                <InfosContainer>
                    <Ong>
                        <Icons><MdPeople /></Icons>
                    </Ong>
                    <div>
                        <TitleInfo>380</TitleInfo>
                        <p>ONGs cadastradas</p>
                    </div>

                </InfosContainer>
                <InfosContainer>
                    <School>
                        <Icons><MdOutlineSchool /></Icons>
                    </School>
                    <div>
                        <TitleInfo>152</TitleInfo>
                        <p>escolas cadastradas</p>
                    </div>

                </InfosContainer>
            </ListInfo>
        </JoinSectionContainer>
    )
}

export default Join