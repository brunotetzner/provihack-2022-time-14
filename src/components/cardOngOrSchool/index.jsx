import { CardContainer, Button, CausesContainer, CausesLisContainer, IconContainer, Container, BackHeader, BackInfo, Title, Top, Address, Mail } from "./style"
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { useRef, useState } from 'react';
import { theme } from "../../themes";
import { IoSchoolSharp } from 'react-icons/io5'
import { MdPeople, MdSmartphone, MdMailOutline, MdLocationOn } from 'react-icons/md'



const CardOngOrSchool = (props) => {
    const [flip, setFlip] = useState()
    const ref = useRef();

    const address =  props.org.address.split('-')

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
                <FrontSide style={{ backgroundColor: `${theme.white.third}`, padding: '20px 24px', minHeight: '416px', maxWidth:'376px', minWidth:'260px' , borderRadius: '30px', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)' }} animationDuration={1000}>
                    <Container>
                        {props.type === 'school' ? <IconContainer><IoSchoolSharp /><p>{address[1]} - {props.org.state}</p></IconContainer> : <IconContainer><MdPeople /><p>{address[1]} - {props.org.state}</p></IconContainer>}
                        <div>
                            <Title>{props.org.name}</Title>
                            
                            <span>{props.org.description}</span>
                            <div>
                                <p>Interesses:</p>
                                <CausesLisContainer>
                                    {
                                        props.org.cause.map((item, index)=>{
                                            return<CausesContainer key={index}>
                                                {item}
                                            </CausesContainer>
                                        })
                                    }
                                </CausesLisContainer>
                            </div>
                            </div>

                        <Button color={props.type} onClick={() => setFlip(true)}>
                            Ver contato
                        </Button>
                    </Container>

                </FrontSide>
                <BackSide style={{ backgroundColor: `${theme.white.third}`, borderRadius: '30px', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)', padding: '0px' }} animationDuration={1000}>
                    <BackHeader>
                        <p>{props.org.name}</p>
                    </BackHeader>
                    <BackInfo>
                        <div>
                            <Title>{props.org.namePrincipal}</Title>
                            <p>{props.org.office}</p>
                        </div>
                        <div>
                            <Address>
                                <Top><MdLocationOn /></Top>
                                <p>{address[0]}<br />{address[1]} - {props.org.state}</p>
                            </Address>

                            <div>
                                <span><MdSmartphone /> </span>
                                <p>{props.org.telephone}</p>
                            </div>

                            <Mail>
                                <span><MdMailOutline /> </span>
                                <p>{props.org.email}</p>
                            </Mail>
                        </div>
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