import styled from "styled-components";
import { theme } from "../../themes";
import BackCard1 from '../../assets/images/backgroundNewsCard1.svg'
import BackCard2 from '../../assets/images/backgroundNewsCard2.svg'
import BackCard3 from '../../assets/images/backgroundNewsCard3.svg'

export const NewsSectionContainer = styled.div`
    width: 100%;
    height: 896px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TitleSection = styled.p`
    font-weight: 400;
    font-size: 51px;
    line-height: 110%;
    padding-bottom: 72px;
`
export const ListInfo = styled.div`
  display: flex;
  gap:30px;
`
export const ContainerFirstCard = styled.div`
    display: grid;
    max-width: 380px;
    max-height: 512px;
    background: url(${BackCard1});
    background-position: 90%;
    border-radius: 15px;
   
    div{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        a{
            cursor: pointer;
            text-decoration: underline;
            padding-right: 32px;
            padding-bottom: 40px;
        }
    }
    p{
        padding-top: 95px;
    }
`
export const ContainerSecondCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 380px;
    max-height: 512px;
    padding-bottom: 32px;
    background: url(${BackCard2});
    background-position: 90%;
    border-radius: 15px;
    div{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        a{
            cursor: pointer;
            text-decoration: underline;
            padding-right: 32px;
        }
    }
    p{
        padding-top: 32px;
        padding-bottom: 80px;
    }
`
export const ContainerThirdCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 380px;
    max-height: 512px;
    background: url(${BackCard3});
    background-position: 90%;
    border-radius: 15px;
    div{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        a{
            cursor: pointer;
            text-decoration: underline;
            padding-right: 32px;
            padding-bottom: 32px;
        }
    }
    p{
        padding-top: 60px;
        padding-bottom: 65px;
        padding-right: 10px;
    }
`
export const TitleInfo = styled.h6`
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    padding-left: 32px;
    padding-top: 136px;
    padding-right: 29px;
`
export const InfoContent = styled.p`
   font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color:${theme.secondary.darkPurple};
    padding-left: 32px;
    padding-bottom:60px;
`


