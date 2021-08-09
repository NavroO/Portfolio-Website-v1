import React from 'react';
import styled from 'styled-components';
import {ProjectData} from "../../../ProjectData";

const StyledPortfolioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


const PortfolioSection = () => {

    return(
        <StyledPortfolioSection id="portfolio">
                <h2>Portfolio</h2>
                <div>

                </div>
        </StyledPortfolioSection>
    )
}

export default PortfolioSection;
