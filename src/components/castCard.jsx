import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const CastCard = ({ actor, role, media }) => {
  return (
    <div className="item-listing-container-skrn">
      <a href="#!">
        {media && media.childImageSharp && <Img {...media.childImageSharp} />}
      </a>
      <div className="item-listing-text-skrn item-listing-movie-casting">
        <h6>
          <a href="#!">{actor}</a>
        </h6>
        <div className="movie-casting-sub-title">{role}</div>
      </div>
    </div>
  );
};

export default CastCard;

export const query = graphql`
  fragment MovieCastCard on MoviesYamlCasts {
    actor {
      name
    }
    role
    media {
      childImageSharp {
        fluid(maxWidth: 430, maxHeight: 570) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
