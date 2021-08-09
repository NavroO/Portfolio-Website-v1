import styled from 'styled-components';

const MessageInput = styled.input`
    width: 240px;
    height: 40px;
    font-size: 12px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin: 30px;
    border: none;
    outline: none;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
    padding-left: 8px;
    color: #8B8B8B;
    background: transparent;

    @media (min-width: 1024px) {
        height: 48px;
        width: 609px;
    }
`;



export default MessageInput;
