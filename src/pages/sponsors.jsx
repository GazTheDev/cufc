import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import '../styles/bootstrap.min.css';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>

      <Header title="Sponsors">Coggeshall United Football Club</Header>
      <div class="container">
        <h1 style={{ textAlign: `center` }}

        >Sponsors</h1>

        <i>CUFC are greatful for any sponsorships coming through. We rely heavily on sponsors to function as a Football Club.</i>

        <img class=" img-responsive" width="550" height="600" src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543353507/MO_LOGO.png" />
        <hr />

        <img class="img-responsive" src="https://irp-cdn.multiscreensite.com/83e154ae/dms3rep/multi/mobile/Logo.png" />
        <hr />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dl-clubs-logo_rgb.png/220px-Dl-clubs-logo_rgb.png" class="img-responsive" />

      </div>
      <div class="container">


        <h1 class="lead">Want to get involved? Drop us a message below</h1>

        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="form-group">
            <input class="form-control" name="name" placeholder="Your Name" type="text" />
            <input class="form-control" name="email" placeholder="name@name.com" type="email" />
            <textarea class="form-control" name="message" />
            <button>Send</button>
          </div>
        </form>

      </div>
    </Layout >
  );
}


export default Index;




export const query = graphql`
  query {
        allMarkdownRemark(
          limit: 8
      sort: {order: DESC, fields: [frontmatter___date] }
    ) {
        edges {
      node {
        id
          excerpt(pruneLength: 75)
          frontmatter {
        title
            path
      tags
      date(formatString: "MM.DD.YYYY")
            cover {
        childImageSharp {
      fluid(
        maxWidth: 1000
        quality: 90
                  traceSVG: {color: "#2B2B2F" }
                ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      }
    }
  }
}
}
}
}
`;
