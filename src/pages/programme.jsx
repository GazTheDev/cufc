import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import '../styles/bootstrap.min.css';
import { Image, Video, Transformation, CloudinaryContext, File } from 'cloudinary-react';



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

      <Header title="Matchday Programme.">Coggeshall United Football Club</Header>
      <div class="container">
        <h1 style={{ textAlign: `center` }}

        >We are pleased to say our matchday programme is now available to download.</h1>

        <br />
        <center>
          <a href="https://res.cloudinary.com/b2b-webmasters/image/upload/v1543406270/coggershall-united/Match-Day-Programme.pdf"><button>Download</button></a>
        </center>
        <br />


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
