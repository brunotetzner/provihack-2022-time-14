import { CardContainer, Button, CausesContainer, CausesLisContainer, IconContainer, Container, BackHeader, BackInfo, Title, Top, Address, Mail } from "./style"
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { useRef, useState } from 'react';
import { theme } from "../../themes";
import { IoSchoolSharp } from 'react-icons/io5'
import { MdPeople, MdSmartphone, MdMailOutline, MdLocationOn } from 'react-icons/md'



const CardOngOrSchool = (props) => {
    const [flip, setFlip] = useState()
    const ref = useRef();

    return (

        <CardContainer>
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                isFlipped={flip}
                flipDirection="horizontal"
                ref={ref}
                style={{  minHeight: '416px', maxWidth:'376px', minWidth:'260px' }}
            >
                <FrontSide style={{ backgroundColor: `${theme.white.third}`, padding: '20px 24px', height: '100%', width: '100%', borderRadius: '30px', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)' }} animationDuration={1000}>
                    <Container>
                        {props.type === 'escola' ? <IconContainer><IoSchoolSharp /></IconContainer> : <IconContainer><MdPeople /></IconContainer>}
                        <div>
                            <Title>{props.user.name}</Title>
                            <span>{props.user.description}</span>
                            <p>Interesses:</p>
                            <CausesLisContainer>

                                <CausesContainer>
                                    {props.user.causes[0]}
                                </CausesContainer>
                                <CausesContainer>
                                    {props.user.causes[1]}
                                </CausesContainer>

                            </CausesLisContainer>
                        </div>

                        <Button color={props.type} onClick={() => setFlip(true)}>
                            Ver contato
                        </Button>
                    </Container>

                </FrontSide>
                <BackSide style={{ backgroundColor: `${theme.white.third}`, borderRadius: '30px', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)', padding: '0px' }} animationDuration={1000}>
                    <BackHeader>
                        <p>{props.user.name}</p>
                    </BackHeader>
                    <BackInfo>
                        <Title>{props.user.professional}</Title>
                        <p>{props.user.profession}</p>
                        <Address>
                            <Top><MdLocationOn /></Top>
                            <p>{props.user.address}<br />{props.user.state}</p>
                        </Address>

                        <div>
                            <span><MdSmartphone /> </span>
                            <p>{props.user.cellphone}</p>
                        </div>

                        <Mail>
                            <span><MdMailOutline /> </span>
                            <p>{props.user.email}</p>
                        </Mail>
                        <Button color={props.type} onClick={() => setFlip(false)}>
                            Voltar
                        </Button>
                    </BackInfo>
                </BackSide>
            </Flippy>


        </CardContainer>
    )
}

export default CardOngOrSchool