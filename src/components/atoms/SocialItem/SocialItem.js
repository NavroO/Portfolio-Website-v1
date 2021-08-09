import styled from 'styled-components';

const SocialItem = styled.p`
    margin: 15px;
    display: inline-block;
    font-size: 20px;

    a {
        color: white;
    }

    @media(min-width: 480px) {
        font-size: 30px;
        margin: 20px
    }

    @media(min-width: 765px) {
        font-size: 35px;
        margin: 25px
    }

    @media(min-width: 1025px) {
        font-size: 40px;
        margin: 30px
    }

    @media(min-width: 1200px) {
        font-size: 45px;
        margin: 40px
    }
`;

export default SocialItem;