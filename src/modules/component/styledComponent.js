import styled from 'styled-components';

export const ComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

ComponentContainer.Title = styled.span`
    font-weight: bold;
    margin: 10px 0;
    font-size: 30px;
`

ComponentContainer.Button = styled.button`
    min-width: 300px;
    min-height: 45px;
    padding: 10px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background: #0f99e2;
`;