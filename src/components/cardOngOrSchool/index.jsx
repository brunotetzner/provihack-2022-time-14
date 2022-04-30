import { CardContainer, Button, CausesContainer, CausesLisContainer, IconContainer, Container } from "./style"
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useRef, useState } from 'react';
import {IoSchoolSharp} from 'react-icons/io5'
import {MdPeople} from 'react-icons/md'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'


const CardOngOrSchool = (props) => {
    const [flip, setFlip] = useState()
    const ref = useRef();

    console.log(props)
    return (
        <CardContainer>
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                isFlipped={flip}
                flipDirection="horizontal" 
                ref={ref}
                style={{ width: '20vw', height: '50vh' }}
            >
                <FrontSide style={{ backgroundColor: '#b1aeae',padding: '10px', height: '100%', borderRadius:'10px', boxShadow: '2px 2px 10px black', }} animationDuration={1000}>
                    {props.user.type==='escola' ? <IconContainer><IoSchoolSharp /></IconContainer> : <IconContainer><MdPeople /></IconContainer>}
                    
                    <Container>
                        <h3>{props.user.name}</h3>
                        <span>{props.user.description}</span>
                        <p>Interesses:</p>
                        <CausesLisContainer>
                            {props.user.causes.map((item) => {

                                return <CausesContainer key={item}>
                                    {item}
                                </CausesContainer>
                            })}
                        </CausesLisContainer>

                        <Button onClick={()=>setFlip(true)}>
                            Ver contato
                        </Button>
                    </Container>

                </FrontSide>
                <BackSide style={{ backgroundcolor: '#3e3d3d', boxShadow: '2px 2px 10px black', color: '#3e3d3d', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px', padding: '8px' }} animationDuration={1000}>
                  <p>Contatos:</p>
                  <p>E-mail: <span>{props.user.email}</span></p>
                  <p>Telefone: <span>{props.user.cellphone}</span></p>
                  <p>Redes Socias:</p>
                  {
                      props.user.socialMedia.map((item)=>{
                          return <p key={item}>{item}</p>
                      })
                  }
                    <Button onClick={()=>setFlip(false)}>
                        Ver info
                    </Button>
                </BackSide>
            </Flippy>


        </CardContainer>
    )
}

export default CardOngOrSchool