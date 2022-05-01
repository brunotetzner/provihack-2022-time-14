import styled from "styled-components"
import backgroundOng from '../../assets/images/backgroundOngs.svg'
import { theme } from "../../themes"

export const Title = styled.div`

    color: ${theme.secondary.darkPurple};
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    
      
`
export const TextNotFound = styled.h1`
    text-align: center;
    font-weight: 400;
    font-size: 38px;
    line-height: 120%;
    padding: 40px 120px;
`
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows:auto;
    row-gap: 25px;
    column-gap: 25px;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundOng});
    background-size: cover;
    padding: 112px 20px;
`
export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconContainer = styled.span`
    font-size: 1.3rem;
`
export const CardsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 127px;
`
