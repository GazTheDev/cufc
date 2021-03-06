import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { Player } from 'video-react';
import '../styles/video.css';

import { Image, Video, Transformation, CloudinaryContext, File } from 'cloudinary-react';


const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin: 4rem 5rem 1rem 4rem;
  @media (max-width: 100px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 100px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (

    <Layout>



      <Header>
        <Image cloudName="b2b-webmasters" publicId="coggershall-united/Coggeshall-United-FC-logo-new" />
      </Header>


      <br />


      <center>
        <h1>Last Result</h1>
      </center>
      <center>
        <i>Sat 24/11/18 15:00

</i>
        <h2>Little Oakley&nbsp;<span class="score">2 - 3 (</span><strong>HT 0 - 2)&nbsp;</strong>Coggeshall United</h2>
      </center>
      <hr />
      <center>
        <iframe width="800" height="700" src="https://www.youtube.com/embed/KCh-1Pq8iwA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
      <hr />




      <h1 style={{ textAlign: `center` }}
      >Recent News</h1>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}

      </PostWrapper>




    </Layout>

  );
};


export default Index;


Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

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
