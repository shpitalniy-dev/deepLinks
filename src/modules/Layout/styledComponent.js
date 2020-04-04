import styled from 'styled-components';
import background from '../../../asserts/background.jpg';

export const App = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${background});
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
`;

export const Button = styled.button`
    min-width: 300px;
    min-height: 100px;
    padding: 5px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    font-family: Verdana;
    border: none;
    border-radius: 10px;
    background: #20bf6b;
`;