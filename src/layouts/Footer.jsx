import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <i>Website Created By Modus Operandi Sports | <img width="100" height="100" src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543353507/MO_LOGO.png" /></i>
      <ul style={{ listStyle: `none` }}>
        <li>
          <a href="/sponsors">Our Sponsors</a>



        </li>
        <li>
          <a href="/media">Media</a>

        </li>
      </ul>

    </Text>
  </Wrapper>
);
export default Footer;
