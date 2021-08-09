import React from 'react';
import styled from 'styled-components';
import StyledSocialItem from '../../atoms/SocialItem/SocialItem';
import baselinedoublearrow from '../../../assets/img/baseline-double-arrow.svg';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1A1A1A;
    color: white;
`;

const StyledFooterParagraph = styled.p`
    margin-top: 7px;
    margin-bottom: 45px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
`;

const StyledFooterEndText = styled.p`
    margin-top: 45px;
    margin-bottom: 7px;
    font-size: 11px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    span {
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

const StyledImg = styled.img`
    margin-top: 45px;
    cursor: pointer;
`;

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const date = new Date;
    const year = date.getFullYear();

    return (
        <StyledFooter>
            <StyledImg src={baselinedoublearrow} alt="" onClick={scrollTop}></StyledImg>
            <StyledFooterParagraph onClick={scrollTop}>BACK TO TOP</StyledFooterParagraph>
            <div>
                <StyledSocialItem><a href="https://www.facebook.com/tomek.nawrocki.568/" target="_blank"><i class="fab fa-facebook-square"></i></a></StyledSocialItem>
                <StyledSocialItem><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank"><i class="fab fa-linkedin"></i></a></StyledSocialItem>
            </div>
            <StyledFooterEndText><span>@{year} Tomasz Nawrocki</span> All Rights Reserved.</StyledFooterEndText>
        </StyledFooter>
    );
}

export default Footer;
