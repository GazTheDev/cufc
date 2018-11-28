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

      <Header title="Fixtures">Coggeshall United Football Club</Header>
      <h1 style={{ textAlign: `center` }}

      >Fixtures</h1>
      <i style={{ textAlign: `center` }}>Our fixtures tend to change so please make sure to check out our  <a href="/blog"> Blog</a></i>

      <table class="table table-striped">

        <thead><tr><th scope="row">DATE/ TIME</th><th>HOME TEAM</th><th scope="row">AWAY TEAM</th><th scope="row">COMPETITION</th><th scope="row">Competition</th><th> </th></tr></thead><tbody>
          <tr><td>ESC</td><td>TBC</td><td>Benfleet</td><td>Leyton Athletic</td><td>Essex Senior Cup</td><td> </td><td> </td></tr>
          <tr><td>LCC</td><td>27/11/18 19:45</td><td>FC Clacton</td><td>White Ensign</td><td>Challenge Cup 2018 - 2019</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>28/11/18 19:45</td><td>Hackney Wick</td><td>May & Baker</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDKO</td><td>28/11/18 19:45</td><td>Benfleet</td><td>Coggeshall United</td><td>First Division Knockout Cup 2018 - 2019</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>Coggeshall United</td><td>Frenford</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>Fire United</td><td>Benfleet</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>Hackney Wick</td><td>Burnham Ramblers</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>Halstead Town</td><td>Little Oakley</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>White Ensign</td><td>Holland</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>01/12/18 15:00</td><td>Wivenhoe Town</td><td>May & Baker</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>LST</td><td>01/12/18 14:00</td><td>New Salamis</td><td>Lopes Tavares</td><td>London Senior Trophy</td><td> </td><td> </td></tr>
          <tr><td>LST</td><td>01/12/18 15:00</td><td>Bridon Ropes</td><td>Hashtag United</td><td>London Senior Trophy</td><td> </td><td> </td></tr>
          <tr><td>HSCT</td><td>01/12/18 15:00</td><td>Wormley Rovers</td><td>FC Broxbourne Borough</td><td>Herts Senior Centenary Trophy</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>04/12/18 19:45</td><td>Hashtag United</td><td>Lopes Tavares</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>08/12/18 15:00</td><td>Braintree Town Res</td><td>Holland</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>08/12/18 15:00</td><td>Brightlingsea Regent Res</td><td>Fire United</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>08/12/18 15:00</td><td>Coggeshall United</td><td>Wivenhoe Town</td><td>First Division South</td><td> </td><td> </td></tr>
          <tr><td>FDS</td><td>08/12/18 15:00</td><td>Hackney Wick</td><td>White Ensign</td><td>First Division South</td><td> </td><td> </td></tr>
        </tbody></table>;

    </Layout >
  );
}


export default Index;




export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 8
      sort: { order: DESC, fields: [frontmatter___date] }
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
                  traceSVG: { color: "#2B2B2F" }
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
