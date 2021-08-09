import React from 'react';
import styled from 'styled-components';
import laptop from '../../../assets/img/laptop.svg';
import pencile from '../../../assets/img/pencile.svg';
import key from '../../../assets/img/maintenance.svg';
import separatorBlack from '../../../assets/img/separatorBlack.svg';
import pdf from './resume.pdf';
import react from '../../../assets/img/react.svg';
import css from '../../../assets/img/css.svg';
import js from '../../../assets/img/js.svg';
import git from '../../../assets/img/git.svg';
import sass from '../../../assets/img/sass.svg';
import eng from '../../../assets/img/eng.svg';
import figma from '../../../assets/img/figma.svg';
import node from '../../../assets/img/node.svg';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';



const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledExpSection = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
        list-style: none;
        text-align: center;
        margin: 10px;
    }

    @media(min-width: 481px) {
        li {
            margin: 50px;
        }
    }
`;

const StyledNumber = styled.p`
    font-weight: bold;
    font-size: 20px;
`;

const StyledMainWrapper = styled.div`
    margin: 10px 15px 10px 15px;
    width: 240px;
    height: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 100px;
      height: 400px;
    }
`;

const StyledItem = styled.div`
    width: 160px;
    height: 280px;
    position: relative;
    margin: 30px 15px 10px 15px;

    h3 {
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-size: 13px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }

    img {
        position: absolute;
        top: -5%;
        left: -20%
    }
  
    @media (min-width: 1024px) {
      h3 {
        font-size: 20px;
      }
      
      p {
        font-size: 15px;
      }
    }
`;

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SkillsWrapper = styled.div`
    margin-bottom: 20px;


    @media (min-width: 1024px) {
        width: 1000px;
        height: 330px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        h2 {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`;

const SkillItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    p {
        margin-top: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 24px;
    }

    @media(min-width: 1024px) {
        display: inline-block;
        text-align: center;
        margin-right: 60px;
    }
`;

const MainSkillSecection = () => {

    return (
        <>
            <StyledAboutMe id="aboutMe">
                <SectionTitle>ABOUT ME</SectionTitle>
                <Paragraph>
                    I am Tom, I am 21 years old. I love working in a group,
                    I feel good working with other people and thus gain new knowledge.
                    I consider myself an organized person and I learn from my mistakes, which is why I try to solve the problems I encounter.
                    I am an empathetic, sincere and honest person. I treat my work as a pleasure, not an obligation.
                </Paragraph>
                <StyledExpSection>
                    <li>
                        <StyledNumber>04+</StyledNumber>
                        <p>Years experience</p>
                    </li>
                    <li>
                        <StyledNumber>06+</StyledNumber>
                        <p>Completed projects</p>
                    </li>
                    <li>
                        <StyledNumber>00+</StyledNumber>
                        <p>Companies worked</p>
                    </li>
                </StyledExpSection>
                <Button>
                    <a href={pdf} target="_blank">RESUME</a>
                </Button>
                <img src={separatorBlack} />
                <StyledMainWrapper>
                    <StyledItem>
                        <img src={pencile} />
                        <h3>DESIGN</h3>
                        <p>
                            I can design the website based on your needs and suggestions.
                            I can also create it from scratch by consulting with you during work.
                        </p>
                    </StyledItem>
                    <StyledItem>
                        <img src={key} />
                        <h3>DEVELOPMENT</h3>
                        <p>Based on a project created by me or another one, sent by you,
                            I can program the website to be fully functional and responsive.</p>
                    </StyledItem>
                    <StyledItem>
                        <img src={laptop} />
                        <h3>MAINTENANCE</h3>
                        <p>In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
                    </StyledItem>
                </StyledMainWrapper>
                <img src={separatorBlack} />
            </StyledAboutMe>
            <StyledSkills id="skills">
                <SectionTitle>SKILLS</SectionTitle>
                <SkillsWrapper>
                    <h2>USING NOW:</h2>
                    <SkillItem>
                        <img src={react} />
                        <p>React</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={css} />
                        <p>CSS</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={js} />
                        <p>JavaScript</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={git} />
                        <p>Git</p>
                    </SkillItem>
                </SkillsWrapper>
                <SkillsWrapper>
                    <h2>LEARNING:</h2>
                    <SkillItem>
                        <img src={sass} />
                        <p>Sass</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={node} />
                        <p>Node.js</p>
                    </SkillItem>
                </SkillsWrapper>
                <SkillsWrapper>
                    <h2>OTHER SKILLS:</h2>
                    <SkillItem>
                        <img src={eng} />
                        <p>English B2</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={figma} />
                        <p>Figma</p>
                    </SkillItem>
                </SkillsWrapper>
            </StyledSkills>
        </>
    );
}

export default MainSkillSecection;
