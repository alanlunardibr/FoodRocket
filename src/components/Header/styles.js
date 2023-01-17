import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    height: 104px;
    width: 100%;

    padding: 24px 123px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    background-color: ${( { theme }) => theme.COLORS.BACKGROUND_H };
    flex-direction: row;

    > span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #E1E1E6;
        
    }

`

export const PolygonCont = styled.div`

    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: center;

    > img {
        width: 29.2px;
        height: 29.2px;
    }

    > span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        color: ${( { theme }) => theme.COLORS.WHITE };
        font-size: 25.1109px;
    }
`

export const SearchFood = styled.div` 

    display: flex;
    background: #0D1D25;
    border-radius: 5px; 
    padding: 12px 14px;
    gap: 14px;
    > img {
        width: 24px;
        height: 24px;
    }

    > input {
        color: #7C7C8A;
        background: #0D1D25;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        border: 0;
        width: 344px;
    }

`

export const SignOut = styled.button`

    border: none;
    outline: none;
    background-color: ${( { theme }) => theme.COLORS.BACKGROUND_H };
    >img{
        width: 32px;
        height: 32px;

    }

`

