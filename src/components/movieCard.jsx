import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Rating from "./raiting";

const MovieCard = ({ title, rating, media, fields: { slug } }) => {
  return (
    <div className="item-listing-container-skrn">
      <Link to={`/movies/${slug}`}>
        {media && media.childImageSharp && <Img {...media.childImageSharp} />}
      </Link>
      <div className="item-listing-text-skrn">
        <div className="item-listing-text-skrn-vertical-align">
          <h6>
            <Link to={`/movies/${slug}`}>{title}</Link>
          </h6>
          <Rating className="circle-rating-pro" rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

export const query = graphql`
  fragment MovieCard on MoviesYaml {
    title
    rating: userRating
      fields{
          slug
      }
    media: poster {
      childImageSharp {
        fluid(maxWidth: 430, maxHeight: 570) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
