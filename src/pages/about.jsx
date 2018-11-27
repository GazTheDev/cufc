import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Img from "gatsby-image";


const Text = styled.div`
    margin: 2rem 10rem;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">We pride ourselves in interacting with our local community. </Header>
    <Container center={center}>
      <Text>
        <h3>
          Welcome to Coggeshall United Football Club. We play in the Thurloww Nunn League Easton Counties. We was founded in 2017 by former professional footballer Cliff Akurang.

          <br />
          <br />
          <img alt="Coggeshall United Football Club" src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543348122/team_2018.jpg" />
        </h3>

        <br />
        <h1>Coaching Staff</h1>
        <hr />
        <h1 style={{ textAlign: `center` }}>Cliff Akurang</h1>
        <i style={{ textAlign: `center` }}>Chairman</i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349098/cliff_akurang.jpg" />
        <br />

        <h1 style={{ textAlign: `center` }}>Brian Sawyer</h1>
        <i style={{ textAlign: `center` }}>Assistant Coach</i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349304/faceless.jpg" />   <br />

        <h1 style={{ textAlign: `center` }}>Hannah Travell</h1>
        <i style={{ textAlign: `center` }}>Physio</i>
        <br />
        <img src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.15752-9/46440638_560236621085770_4966849409733099520_n.jpg?_nc_cat=105&_nc_ht=scontent-lhr3-1.xx&oh=4f4471b923b99f9a09f69b77ded8b1a5&oe=5CA2A6D0" />   <br />

        <h1 style={{ textAlign: `center` }}>Liam Aves</h1>
        <i style={{ textAlign: `center` }}>Coach</i>
        <br />
        <img src="https://pbs.twimg.com/profile_images/687620253052989440/uq4m-SQb_400x400.jpg" />
        <br />
        <hr />
        <h1>
          Club Board
        </h1>
        <hr />
        <h1 style={{ textAlign: `center` }}>Andrew Douglas</h1>
        <i style={{ textAlign: `center` }}>Club Presidant</i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349630/andrew.jpg" />
        <br />
        <h1 style={{ textAlign: `center` }}>Gareth Davies</h1>
        <i style={{ textAlign: `center` }}>Media Manager / Producer</i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349721/gareth.jpg" />

        <h1 style={{ textAlign: `center` }}>Stuart Fennell</h1>
        <i style={{ textAlign: `center` }}>Turnstile Operator/ Steward  </i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349721/faceless.jpg" />

        <h1 style={{ textAlign: `center` }}>Graham Hilder</h1>
        <i style={{ textAlign: `center` }}>Steward / Catering  </i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349721/faceless.jpg" />

        <h1 style={{ textAlign: `center` }}>Mel Pyne</h1>
        <i style={{ textAlign: `center` }}>Bar Staff  </i>
        <br />
        <img src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543349721/faceless.jpg" />







      </Text>
    </Container >
  </Layout >
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
      file(relativePath: {eq: "https://res.cloudinary.com/b2b-webmasters/image/upload/v1543348122/team_2018.jpg" }) {
      childImageSharp {
    # Specify the image processing specifications right in the query.
    # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
      ...GatsbyImageSharpFixed
    }
    }
  }
}
`