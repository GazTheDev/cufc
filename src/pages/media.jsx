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

      <Header title="Media">Coggeshall United Football Club</Header>
      <div class="container">
        <h1 style={{ textAlign: `center` }}

        >At Coggeshall United we run a very extensive matchday production</h1>

        <p>With help from our sponsors Modus Operandi Sports our media production has been increased by a mile this season. On matchdays we have a camera team film the match along with post match footage.

          We feel very proud of our work and our YouTube channel has 100's of views and likes. We love to keep our audiences informed.

          We even got the chance to interview Hashtag United chairman Spencer Owen.
<br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/60kqRv8nns0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </p>
      </div>
      <div class="container">

        We are always looking for help with our media. Drop us a message and we will get back to you.



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
