import { useNavigate } from 'react-router-dom'
import {ListInfo, TitleInfo, TitleSection, NewsSectionContainer, InfoContent, ContainerFirstCard, ContainerThirdCard, ContainerSecondCard } from './style'


const News = () => {
    const navigate = useNavigate()
    return (
        <NewsSectionContainer>
            <TitleSection>Ajude a salvar o nosso planeta!</TitleSection>
            <ListInfo>

                <ContainerFirstCard>
                <TitleInfo>7 cidades brasileiras que podem ficar submersas</TitleInfo>
                    
                     
                        <InfoContent>Um aumento de apenas 3° C na temperatura global pode levar os oceanos a cobrirem 50 cidades em todo o mundo</InfoContent>
                 
                    <div><a onClick={()=>navigate('/tips')}>+ saiba mais</a></div>
                </ContainerFirstCard>
                <ContainerSecondCard>
                    <TitleInfo>Temperaturas recordes reforçam urgência de encarar mudanças climáticas</TitleInfo>
                    
                    
                    <InfoContent>Dobrou os dias com calor acima de 50ºC no mundo em 40 anos</InfoContent>
                
                    <div><a onClick={()=>navigate('/tips')}>+ saiba mais</a></div>
                </ContainerSecondCard>
                <ContainerThirdCard>
                    <TitleInfo>A produção de alimentos será afetada pelas mudanças climáticas</TitleInfo>
                    
                        <InfoContent>A produção de arroz pode cair em 6%, a de trigo 21%, e a de milho em 10% com altas emissões.</InfoContent>
                 
                        <div><a onClick={()=>navigate('/tips')}>+ saiba mais</a></div>
                </ContainerThirdCard>
            </ListInfo>
        </NewsSectionContainer>
    )
}

export default News