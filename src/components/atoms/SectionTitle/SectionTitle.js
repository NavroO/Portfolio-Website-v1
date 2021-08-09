import styled from 'styled-components';


const SectionTitle = styled.h1`
    width: 200px;
    height: 65px;
    margin: 50px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    padding: 15px;
    border: 5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(min-width: 480px) {
        font-size: 18px;
        width: 300px;
    }

    @media(min-width: 765px) {
        font-size: 29px;
        width: 400px;
        height: 100px;
        font-size: 25px;
    }

    @media(min-width: 1025px) {
        font-size: 30px;
        width: 404px;
        height: 107px;
    }

    @media(min-width: 1200px) {
        font-size: 30px;
        width: 404px;
    }

    @media(min-width: 1800px) {
        font-size: 35px;
    }

`;

export default SectionTitle;