import styled from 'styled-components'

export const Container = styled.button`  

    width: 100%;
    background-color: ${( { theme }) => theme.COLORS.RED };
    color: ${( { theme }) => theme.COLORS.WHITE };
    border: 0;
    border-radius: 5px;
    height: 48px;
    

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    &:disabled {
        opacity: 0.5;
    }
`