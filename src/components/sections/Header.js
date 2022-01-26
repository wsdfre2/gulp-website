import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import apple from './../../../public/icons/apple.svg'
import google from './../../../public/icons/google.png'
import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_gulpscreen2: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "gulpscreen2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img 
                fluid={data.art_gulpscreen2.childImageSharp.fluid}
                style={{ width: "75%", top: -0, left: 120,}} 
              />
            </Art>
            <Text>
              <h1>
                <span class = "black">
                <em>Find your </em>
                <span class="highlight"><em> happiest</em></span> <em>hour.</em>
                </span>
              </h1>
              <br />
              <h3>
                We're building a happy hour directory:
                <br />
                For users & vendors alike
              </h3>
              <br />
              <br />
              <img src={apple} width="21%" margin_right="5px"/>
              <img src={google} width="23.5%" />
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -14.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
