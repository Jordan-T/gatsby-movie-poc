import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Rating from "../components/raiting";
import Rate from "../components/rate";
import Review from "../components/review";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const reviews = [
  {
    name: "Dan Cederholm",
    date: "2017-10-27",
    rating: 8.6,
    content: `<p>They don&apos;t make many Sci-Fi films these days. This was a
      pleasant surprise all throughout the film. I really like
      this film.</p>`,
    withSpoiler: true
  },
  {
    name: "Jeff Seid",
    date: "2017-10-18",
    rating: 5.3,
    content: `<p>Coming out of the theatres following my viewing of this
                      film, I was confused. I couldn&apos;t decide whether I liked it
                      or not.</p>`
  },
  {
    name: "Christian De Guzman",
    date: "2017-08-26",
    rating: 7.2,
    content: `<p>I have been a cinema lover for years, read a lot of
                      reviews on SKRN and everywhere, and never found the right
                      movie to write my first review. I always thought I would
                      wait for the movie.</p>
                      <p>And this is it!</p>`
  },
  {
    name: "Jennifer Thomas",
    date: "2017-08-15",
    rating: 9,
    content: `<p>&apos;Oblivion&apos; was incredible. The visuals, the score, the
                      acting, were all amazing. The plot is definitely one of
                      the most original I&apos;ve seen in a while</p>`
  }
];

const baseVideos = [
  { id: 1, title: "Trailer" },
  { id: 2, title: "Interview" },
  { id: 3, title: "Movie Stills" }
];
const baseCasts = [
  { id: 1, name: "Robert Downey Jr.", movieName: "Tony Stark" },
  { id: 2, name: "Scarlett Johansson", movieName: "Black Widow" },
  { id: 3, name: "Chris Hemsworth Thor", movieName: "Tony Stark" }
];
const baseMovies = [
  { id: 1, title: "Bad Neighbors 2", rating: 7.2 },
  { id: 2, title: "Star Wars: Rogue One", rating: 8.6 },
  { id: 3, title: "The Imitation Game", rating: 6 }
];

class MoviePage extends PureComponent {
  render() {
    const { data } = this.props;

    const videos = data.videos.edges.map(
      ({ node: { childImageSharp } }, i) => ({
        childImageSharp,
        ...baseVideos[i]
      })
    );

    const casts = data.casts.edges.map(({ node: { childImageSharp } }, i) => ({
      childImageSharp,
      ...baseCasts[i]
    }));

    const movies = data.movies.edges.map(
      ({ node: { childImageSharp } }, i) => ({
        childImageSharp,
        ...baseMovies[i]
      })
    );

    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Movie | ${config.siteTitle}`} />
          <>
            <div id="content-sidebar-pro">
              <div id="content-sidebar-image">
                <Img {...data.mainImage.childImageSharp} alt="Movie Poster" />
              </div>

              <div className="content-sidebar-section">
                <h2 className="content-sidebar-sub-header">True Blood</h2>
                <ul className="progression-studios-slider-rating">
                  <li>PG-13</li>
                  <li>HD</li>
                </ul>
              </div>

              <div className="content-sidebar-section">
                <h4 className="content-sidebar-sub-header">Release Date</h4>
                <div className="content-sidebar-short-description">
                  2 October, 2017 (USA)
                </div>
              </div>

              <div className="content-sidebar-section">
                <h4 className="content-sidebar-sub-header">Length</h4>
                <div className="content-sidebar-short-description">
                  2 hr 43 min
                </div>
              </div>

              <div className="content-sidebar-section">
                <h4 className="content-sidebar-sub-header">Director</h4>
                <div className="content-sidebar-short-description">
                  James Wan
                </div>
              </div>

              <div className="content-sidebar-section">
                <h2 className="content-sidebar-sub-header adjusted-recent-reviews">
                  Recent Reviews
                </h2>
                <ul id="sidebar-reviews-pro">
                  {reviews.map((review, i) => (
                    <Review key={i} {...review} />
                  ))}
                </ul>
                <a href="#!" className="btn btn-green-pro btn-sm">
                  See All Reviews
                </a>
              </div>
            </div>
            <main id="col-main-with-sidebar">
              <div id="movie-detail-header-pro">
                <Img
                  className="movie-detail-header-image"
                  {...data.mainMedia.childImageSharp}
                  alt=""
                />

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
                      {videos.map(video => (
                        <div
                          key={videos.id}
                          className="col-6 col-md-4 col-lg-4"
                        >
                          <a
                            className="movie-detail-media-link afterglow"
                            href="#VideoLightbox-1"
                          >
                            <div className="movie-detail-media-image">
                              <Img backgroundColor {...video.childImageSharp} />
                              <span>
                                <i className="fas fa-play" />
                              </span>
                              <h6>{video.title}</h6>
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
                      <h5>Rate True Blood</h5>

                      <Rate />
                    </div>
                    <div className="col-sm">
                      <h6>User Rating</h6>
                      <Rating className="circle-rating-pro" rating={8.6} big />
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="movie-details-section">
                  <h2>Storyline</h2>
                  <p>
                    Mae Holland (Emma Watson) seizes the opportunity of a
                    lifetime when she lands a job with the world&apos;s most
                    powerful technology and social media company. Encouraged by
                    the company&apos;s founder (Tom Hanks), Mae joins a
                    groundbreaking experiment that pushes the boundaries of
                    privacy, ethics and personal freedom. Her participation in
                    the experiment, and every decision she makes soon starts to
                    affect the lives and futures of her friends, family and that
                    of humanity.
                  </p>
                </div>

                <div className="movie-details-section">
                  <h2>The Cast</h2>
                  <div className="row">
                    {casts.map(cast => (
                      <div
                        key={cast.id}
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                      >
                        <div className="item-listing-container-skrn">
                          <a href="#!">
                            <Img {...cast.childImageSharp} />
                          </a>
                          <div className="item-listing-text-skrn item-listing-movie-casting">
                            <h6>
                              <a href="#!">{cast.name}</a>
                            </h6>
                            <div className="movie-casting-sub-title">
                              {cast.movieName}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="movie-details-section">
                  <h2>Similar Movies</h2>
                  <div className="row">
                    {movies.map(movie => (
                      <div
                        key={movie.id}
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                      >
                        <div className="item-listing-container-skrn">
                          <a href="dashboard-movie-profile.html">
                            <Img {...movie.childImageSharp} />
                          </a>
                          <div className="item-listing-text-skrn">
                            <div className="item-listing-text-skrn-vertical-align">
                              <h6>
                                <a href="dashboard-movie-profile.html">
                                  {movie.title}
                                </a>
                              </h6>
                              <Rating
                                className="circle-rating-pro"
                                rating={movie.rating}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </>
        </div>
      </Layout>
    );
  }
}

export default MoviePage;

export const pageQuery = graphql`
  query MovieQuery {
    mainImage: file(relativePath: { eq: "movie-detail-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 620) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mainMedia: file(relativePath: { eq: "dashboard-movie-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1460) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    videos: allFile(
      filter: {
        relativePath: {
          in: [
            "holly-mandarich-236721-unsplash.jpg"
            "jonathan-pendleton-6555-unsplash.jpg"
            "zachary-shea-577599-unsplash.jpg"
          ]
        }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    casts: allFile(
      filter: {
        relativePath: { in: ["cast-1.jpg", "cast-2.jpg", "cast-3.jpg"] }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 430, maxHeight: 570) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    movies: allFile(
      filter: {
        relativePath: {
          in: ["listing-4.jpg", "listing-5.jpg", "listing-6.jpg"]
        }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 430, maxHeight: 570) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
