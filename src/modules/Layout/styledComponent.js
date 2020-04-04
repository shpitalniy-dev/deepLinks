import styled from 'styled-components';

export const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

App.Component = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    min-width: 100px;
    min-height: 50px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    background: #31c352;
`;