import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import '../styles/bootstrap.min.css';
import Img from "gatsby-image";
import { Image, Video, Transformation, CloudinaryContext, File } from 'cloudinary-react';



const Text = styled.div`
    margin: 2rem 10rem;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'League Table - Thurlow Nunn'} />
    <Header title=" League Table">We currently play in the Easton Counties Division One. </Header>
    <Container center={center}>
      <Text>


        <br />
        <br />
        <Image cloudName="b2b-webmasters" publicId="team_2018" />


        <table class="table">
          <thead><tr class="tableizer-firstrow"><th>POS</th><th> </th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>PTS</th><th> </th></tr></thead><tbody>
            <tr><td>1</td><td>White Ensign</td><td>17</td><td>13</td><td>2</td><td>2</td><td>31</td><td>41</td><td>&nbsp;</td></tr>
            <tr><td>2</td><td>Halstead Town</td><td>18</td><td>13</td><td>2</td><td>3</td><td>20</td><td>41</td><td>&nbsp;</td></tr>
            <tr><td>3</td><td>Hashtag United</td><td>17</td><td>12</td><td>3</td><td>2</td><td>20</td><td>39</td><td>&nbsp;</td></tr>
            <tr><td>4</td><td>Harwich & Parkeston</td><td>16</td><td>9</td><td>3</td><td>4</td><td>14</td><td>30</td><td>&nbsp;</td></tr>
            <tr><td>5</td><td>May & Baker</td><td>12</td><td>9</td><td>1</td><td>2</td><td>15</td><td>28</td><td>&nbsp;</td></tr>
            <tr><td>6</td><td>Holland</td><td>16</td><td>9</td><td>1</td><td>6</td><td>12</td><td>28</td><td>&nbsp;</td></tr>
            <tr><td>7</td><td>Frenford</td><td>16</td><td>8</td><td>3</td><td>5</td><td>9</td><td>27</td><td>&nbsp;</td></tr>
            <tr><td>8</td><td>Hackney Wick</td><td>14</td><td>7</td><td>4</td><td>3</td><td>13</td><td>25</td><td>&nbsp;</td></tr>
            <tr><td>9</td><td>Benfleet</td><td>17</td><td>8</td><td>1</td><td>8</td><td>8</td><td>25</td><td>&nbsp;</td></tr>
            <tr><td>10</td><td>Coggeshall United</td><td>12</td><td>7</td><td>3</td><td>2</td><td>15</td><td>24</td><td>&nbsp;</td></tr>
            <tr><td>11</td><td>Little Oakley</td><td>16</td><td>5</td><td>5</td><td>6</td><td>-17</td><td>20</td><td>&nbsp;</td></tr>
            <tr><td>12</td><td>Wivenhoe Town</td><td>14</td><td>4</td><td>5</td><td>5</td><td>-5</td><td>17</td><td>&nbsp;</td></tr>
            <tr><td>13</td><td>Wormley Rovers</td><td>15</td><td>4</td><td>4</td><td>7</td><td>0</td><td>16</td><td>&nbsp;</td></tr>
            <tr><td>14</td><td>Burnham Ramblers</td><td>17</td><td>4</td><td>4</td><td>9</td><td>-12</td><td>16</td><td>&nbsp;</td></tr>
            <tr><td>15</td><td>Braintree Town Res</td><td>19</td><td>4</td><td>2</td><td>13</td><td>-28</td><td>14</td><td>&nbsp;</td></tr>
            <tr><td>16</td><td>Lopes Tavares</td><td>14</td><td>1</td><td>6</td><td>7</td><td>-17</td><td>9</td><td>&nbsp;</td></tr>
            <tr><td>17</td><td>Newbury Forest</td><td>16</td><td>2</td><td>3</td><td>11</td><td>-23</td><td>9</td><td>&nbsp;</td></tr>
            <tr><td>18</td><td>Fire United</td><td>16</td><td>2</td><td>1</td><td>13</td><td>-26</td><td>7</td><td>&nbsp;</td></tr>
            <tr><td>19</td><td>Brightlingsea Regent Res</td><td>16</td><td>1</td><td>1</td><td>14</td><td>-29</td><td>4</td><td></td></tr>
          </tbody></table>







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
