import styled from "styled-components"
import bgImage from "../../assets/images/bgTips.svg"

// export const TipPageContainer = styled.div`
//     max-height: 100vh;
// `

export const TipsSection = styled.div`
    height: 100vh;
    background: url(${bgImage});
    background-size: cover;
    background-position: 50% 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h4 {
        /* margin: 72px 0 77px 0; */
        font-weight: 700;
        font-size: 38px;
        line-height: 120%;
    }
`

export const TipsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 328px);
    grid-template-rows: repeat(3, auto);
    column-gap: 107px; 
    row-gap: 32px;
    margin-bottom: 200px;
`

export const TipItem = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    p {
        width: 192px;
        height: 100%;
        display: flex;
        align-items: center;
    }
`

export const Drop = styled.div`
    width: 112px;
    height: 112px;
    background-color: #6DCBFF;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Recycling = styled.div`
    width: 112px;
    height: 112px;
    background-color: #5CF499;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;

`
export const Grape = styled.div`
    width: 112px;
    height: 112px;
    background-color: #A08DFF;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Trash = styled.div`
    width: 112px;
    height: 112px;
    background-color: #FFC572;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Lamp = styled.div`
    width: 112px;
    height: 112px;
    background-color: #FFEF63;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Tree = styled.div`
    width: 112px;
    height: 112px;
    background-color: #A2E76C;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Paper = styled.div`
    width: 112px;
    height: 112px;
    background-color: #F0C3FF;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Plastic = styled.div`
    width: 112px;
    height: 112px;
    background-color: #FFA6A6;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
export const Bike = styled.div`
    width: 112px;
    height: 112px;
    background-color: #6CFCEB;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
`
