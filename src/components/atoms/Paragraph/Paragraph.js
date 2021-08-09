import styled from 'styled-components';

const Paragraph = styled.p`
    margin: 10px 15px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    width: 170px;
    height: 225px;
    text-align: justify;
    margin-bottom: 40px;

    @media(min-width: 480px) {
        font-size: 18px;
        width: 300px;
    }

    @media(min-width: 765px) {
        font-size: 25px;
        width: 400px;
        height: 400px;
    }

    @media(min-width: 1025px) {
        font-size: 30px;
        width: 763px;
        height: 350px;
    }

    @media(min-width: 1200px) {
        font-size: 15px;
        width: 763px;
        height: 47px;
        text-align: center;
    }   

    @media(min-width: 1800px) {
        font-size: 18px;
    }
`;


export default Paragraph;