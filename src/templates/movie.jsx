import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import CastCard from "../components/castCard";
import MovieCard from "../components/movieCard";
import dayjs from "../plugins/dayjs";
import Rating from "../components/raiting";
import Rate from "../components/rate";
import Review from "../components/review";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default class MoviePage extends PureComponent {
  render() {
    const { data } = this.props;
    const { moviesYaml: movie } = data;

    console.log("AAA", data);

    return (
      <Layout>
        <>
          <Helmet title={`${movie.title} | ${config.siteTitle}`} />
          <div id="content-sidebar-pro">
            <div id="content-sidebar-image">
              <Img {...movie.poster.childImageSharp} alt="Movie Poster" />
            </div>

            <div className="content-sidebar-section">
              <h2 className="content-sidebar-sub-header">{movie.title}</h2>
              <ul className="progression-studios-slider-rating">
                {movie.ratings.map(rating => (
                  <li key={rating}>{rating}</li>
                ))}
              </ul>
            </div>

            <div className="content-sidebar-section">
              <h4 className="content-sidebar-sub-header">Release Date</h4>
              <div className="content-sidebar-short-description">
                {dayjs(movie.realised.date).format("LL")}
                {movie.realised.country && ` (${movie.realised.country})`}
              </div>
            </div>

            <div className="content-sidebar-section">
              <h4 className="content-sidebar-sub-header">Length</h4>
              <div className="content-sidebar-short-description">
                2 hr 43 min
                {movie.length}
              </div>
            </div>

            <div className="content-sidebar-section">
              <h4 className="content-sidebar-sub-header">Director</h4>
              <div className="content-sidebar-short-description">
                {movie.director}
              </div>
            </div>

            <div className="content-sidebar-section">
              <h2 className="content-sidebar-sub-header adjusted-recent-reviews">
                Recent Reviews
              </h2>
              <ul id="sidebar-reviews-pro">
                {movie.reviews.map(review => (
                  <Review key={review.id} {...review} />
                ))}
              </ul>
              <a href="#!" className="btn btn-green-pro btn-sm">
                See All Reviews
              </a>
            </div>
          </div>
          <main id="col-main-with-sidebar">
            <div id="movie-detail-header-pro">
              {movie.mainMedia && (
                <Img
                  className="movie-detail-header-image"
                  {...movie.mainMedia.childImageSharp}
                  alt=""
                />
              )}

              <div className="progression-studios-slider-more-options">
                <i className="fas fa-ellipsis-h" />
                <ul>
                  <li>
                    <a href="#!">Add to Favorites</a>
                  </li>
                  <li>
                    <a href="#!">Add to Watchlist</a>
                  </li>
                  <li>
                    <a href="#!">Add to Playlist</a>
                  </li>
                  <li>
                    <a href="#!">Share...</a>
                  </li>
                  <li>
                    <a href="#!">Write A Review</a>
                  </li>
                </ul>
              </div>

              <a
                className="movie-detail-header-play-btn afterglow"
                href="#VideoLightbox-1"
              >
                <i className="fas fa-play" />
              </a>

              <div id="movie-detail-header-media">
                <div className="dashboard-container">
                  <h5>Media</h5>
                  <div className="row">
                    {movie.medias.map(media => (
                      <div key={media.id} className="col-6 col-md-4 col-lg-4">
                        <a
                          className="movie-detail-media-link afterglow"
                          href="#VideoLightbox-1"
                        >
                          <div className="movie-detail-media-image">
                            {media && media.childImageSharp && (
                              <Img backgroundColor {...media.childImageSharp} />
                            )}
                            <span>
                              <i className="fas fa-play" />
                            </span>
                            <h6>{media.title}</h6>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="movie-detail-gradient-pro" />
            </div>

            <div id="movie-detail-rating">
              <div className="dashboard-container">
                <div className="row">
                  <div className="col-sm">
                    <h5>{`Rate ${movie.title}`}</h5>
                    <Rate />
                  </div>
                  <div className="col-sm">
                    <h6>User Rating</h6>
                    <Rating
                      className="circle-rating-pro"
                      rating={movie.userRating}
                      big
                    />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-container">
              <div className="movie-details-section">
                <h2>Storyline</h2>
                <div dangerouslySetInnerHTML={{ __html: movie.storyLine }} />
              </div>

              <div className="movie-details-section">
                <h2>The Cast</h2>
                <div className="row">
                  {movie.casts.map(cast => (
                    <div
                      key={cast.id}
                      className="col-12 col-md-6 col-lg-6 col-xl-4"
                    >
                      <CastCard {...cast} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="movie-details-section">
                <h2>Similar Movies</h2>
                <div className="row">
                  {movie.relatedMovies.map(({childMoviesYaml: relatedMovie}) => (
                    <div
                      key={relatedMovie.id}
                      className="col-12 col-md-6 col-lg-6 col-xl-4"
                    >
                      <MovieCard {...relatedMovie} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query MovieBySlug($slug: String!) {
    moviesYaml(fields: { slug: { eq: $slug } }) {
      title
      poster {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 620) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      ratings
      realised {
        date
        country
      }
      length
      director
      reviews {
        id
        ...MovieReview
      }
      mainMedia {
        childImageSharp {
          fluid(maxWidth: 1460) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      medias {
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      userRating
      storyLine
      casts {
        ...MovieCastCard
        id
      }
      relatedMovies {
        childMoviesYaml {
          ...MovieCard
          id
        }
      }
    }
  }
`;
