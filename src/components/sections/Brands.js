import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="mission" accent>
        <StyledContainer>
          <div>
            <h1>Our Mission:</h1>
            <br></br>
            <p>
              Gulp’s purpose is to provide a solution, to helping people find the best available deals, 
              while empowering businesses to gain more customers and to work towards zero waste. 
              Gulp helps businesses connect with existing and potential customers and enables them to directly 
              communicate promotions based upon their needs and convenience such as surplus ingredients and 
              slower hours. While doing so, our aim is to help people enjoy the best deals their city has to offer, 
              from familiar places that feel like home to new gems hidden in plain sight. Gulp not only intends 
              to allow people and businesses to access and manage ever-changing deals or daily specials that are 
              hard to keep track of, but to also promote a drinking and dining culture of modesty, quality, 
              and frugality:<span class="highlight"><em><b> To help everyone find their happiest hour.</b></em></span>
            </p>
            <br></br>
            <br></br>
            <p>
                <StyledExternalLink href="https://gulpsf.com">
                  Claim your business here &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
  margin-top: 80px;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

const Art = styled.figure`
  width: 400px;
  position: absolute;
  top: -92%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
