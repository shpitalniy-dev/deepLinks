import styled from 'styled-components';

export const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

App.Component = styled.div`
    min-width: 50%;
    min-height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    height: 100px;
    width: 100px;
    margin: 10px 0;
`

export const Name = styled.span`
    font-weight: bold;
    margin: 10px 0;
`

export const Button = styled.button`
    min-width: 300px;
    min-height: 45px;
    padding: 10px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background: #0f99e2;
`;