import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class MoviePage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <>
            <div id="content-sidebar-pro">
              <div id="content-sidebar-image">
                <img
                  src="http://progression-studios.com/skrn/images/demo/movie-detail-poster.jpg"
                  alt="Movie Poster"
                />
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
                  <li>
                    <div
                      className="circle-rating-pro"
                      data-value="0.86"
                      data-animation-start-value="0.86"
                      data-size="32"
                      data-thickness="3"
                      data-fill='{
				          "color": "#42b740"
				        }'
                      data-empty-fill="#def6de"
                      data-reverse="true"
                    >
                      <span style={{color:'#42b740'}}>8.6</span>
                    </div>
                    <h6>Dan Cederholm</h6>
                    <div className="sidebar-review-time">October 22, 2017</div>
                    <div className="spoiler-review">Contains Spoiler</div>
                    <p>
                      They don&laps;t make many Sci-Fi films these days. This was a
                      pleasant surprise all throughout the film. I really like
                      this film.
                    </p>
                  </li>
                  <li>
                    <div
                      className="circle-rating-pro"
                      data-value="0.53"
                      data-animation-start-value="0.53"
                      data-size="32"
                      data-thickness="3"
                      data-fill='{
				          "color": "#ff4141"
				        }'
                      data-empty-fill="#ffe1e1"
                      data-reverse="true"
                    >
                      <span style={{color:'#ff4141'}}>5.3</span>
                    </div>
                    <h6>Jeff Seid</h6>
                    <div className="sidebar-review-time">October 18, 2017</div>
                    <p>
                      Coming out of the theatres following my viewing of this
                      film, I was confused. I couldn&laps;t decide whether I liked it
                      or not.
                    </p>
                  </li>
                  <li>
                    <div
                      className="circle-rating-pro"
                      data-value="0.72"
                      data-animation-start-value="0.72"
                      data-size="32"
                      data-thickness="3"
                      data-fill='{
				          "color": "#42b740"
				        }'
                      data-empty-fill="#def6de"
                      data-reverse="true"
                    >
                      <span style={{color:'#42b740'}}>7.2</span>
                    </div>
                    <h6>Christian De Guzman</h6>
                    <div className="sidebar-review-time">August 26, 2017</div>
                    <div className="spoiler-review">Contains Spoiler</div>
                    <p>
                      I have been a cinema lover for years, read a lot of
                      reviews on SKRN and everywhere, and never found the right
                      movie to write my first review. I always thought I would
                      wait for the movie.
                    </p>
                    <p>And this is it!</p>
                  </li>
                  <li>
                    <div
                      className="circle-rating-pro"
                      data-value="0.9"
                      data-animation-start-value="0.9"
                      data-size="32"
                      data-thickness="3"
                      data-fill='{
				          "color": "#42b740"
				        }'
                      data-empty-fill="#def6de"
                      data-reverse="true"
                    >
                      <span style={{color:'#42b740'}}>9.0</span>
                    </div>
                    <h6>Jennifer Thomas</h6>
                    <div className="sidebar-review-time">August 15, 2017</div>
                    <p>
                      &laps;Oblivion&laps; was incredible. The visuals, the score, the
                      acting, were all amazing. The plot is definitely one of
                      the most original I&laps;ve seen in a while
                    </p>
                  </li>
                </ul>
                <a href="#!" className="btn btn-green-pro btn-sm">
                  See All Reviews
                </a>
              </div>
            </div>
            <main id="col-main-with-sidebar">
              <div
                id="movie-detail-header-pro"
                style={{backgroundImage: `url('http://progression-studios.com/skrn/images/demo/dashboard-movie-poster.jpg')`}}
              >
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

                <video
                  id="VideoLightbox-1"
                  poster="http://progression-studios.com/files/View_From_A_Blue_Moon_Trailer-HD.jpg"
                  width="960"
                  height="540"
                >
                  <source
                    src="http://progression-studios.com/files/View_From_A_Blue_Moon_Trailer-576p.mp4"
                    type="video/mp4"
                  />
                </video>

                <div id="movie-detail-header-media">
                  <div className="dashboard-container">
                    <h5>Media</h5>
                    <div className="row">
                      <div className="col-6 col-md-4 col-lg-4">
                        <a
                          className="movie-detail-media-link afterglow"
                          href="#VideoLightbox-1"
                        >
                          <div className="movie-detail-media-image">
                            <img src="http://progression-studios.com/skrn/images/demo/holly-mandarich-236721-unsplash.jpg" />
                            <span>
                              <i className="fas fa-play" />
                            </span>
                            <h6>Trailer</h6>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-4 col-lg-4">
                        <a
                          className="movie-detail-media-link afterglow"
                          href="#VideoLightbox-1"
                        >
                          <div className="movie-detail-media-image">
                            <img src="http://progression-studios.com/skrn/images/demo/jonathan-pendleton-6555-unsplash.jpg" />
                            <span>
                              <i className="fas fa-play" />
                            </span>
                            <h6>Interview</h6>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-4 col-lg-4">
                        <a className="movie-detail-media-link" href="#!">
                          <div className="movie-detail-media-image">
                            <img src="http://progression-studios.com/skrn/images/demo/zachary-shea-577599-unsplash.jpg" />
                            <span>
                              <i className="fas fa-play" />
                            </span>
                            <h6>Movie Stills</h6>
                          </div>
                        </a>
                      </div>
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

                      <div className="rating-pro">
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="10"
                            title="10 stars"
                          />{" "}
                          10
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="9"
                            title="9 stars"
                          />{" "}
                          9
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="8"
                            title="8 stars"
                          />{" "}
                          8
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="7"
                            title="7 stars"
                          />{" "}
                          7
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="6"
                            title="6 stars"
                          />{" "}
                          6
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="5"
                            title="5 stars"
                          />{" "}
                          5
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="4"
                            title="4 stars"
                          />{" "}
                          4
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="3"
                            title="3 stars"
                          />{" "}
                          3
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="2"
                            title="2 stars"
                          />{" "}
                          2
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="rating-pro"
                            value="1"
                            title="1 star"
                          />{" "}
                          1
                        </label>
                      </div>
                    </div>
                    <div className="col-sm">
                      <h6>User Rating</h6>
                      <div
                        className="circle-rating-pro"
                        data-value="0.86"
                        data-animation-start-value="0.86"
                        data-size="40"
                        data-thickness="3"
                        data-fill='{
					          "color": "#42b740"
					        }'
                        data-empty-fill="#def6de"
                        data-reverse="true"
                      >
                        <span style={{color:'#42b740'}}>8.6</span>
                      </div>
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
                    lifetime when she lands a job with the world&laps;s most powerful
                    technology and social media company. Encouraged by the
                    company&laps;s founder (Tom Hanks), Mae joins a groundbreaking
                    experiment that pushes the boundaries of privacy, ethics and
                    personal freedom. Her participation in the experiment, and
                    every decision she makes soon starts to affect the lives and
                    futures of her friends, family and that of humanity.
                  </p>
                </div>

                <div className="movie-details-section">
                  <h2>The Cast</h2>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="#!">
                          <img src="http://progression-studios.com/skrn/images/demo/cast-1.jpg" alt="Cast" />
                        </a>
                        <div className="item-listing-text-skrn item-listing-movie-casting">
                          <h6>
                            <a href="#!">Robert Downey Jr.</a>
                          </h6>
                          <div className="movie-casting-sub-title">
                            Tony Stark
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="#!">
                          <img src="http://progression-studios.com/skrn/images/demo/cast-2.jpg" alt="Cast" />
                        </a>
                        <div className="item-listing-text-skrn item-listing-movie-casting">
                          <h6>
                            <a href="#!">Scarlett Johansson</a>
                          </h6>
                          <div className="movie-casting-sub-title">
                            Black Widow
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="#!">
                          <img src="http://progression-studios.com/skrn/images/demo/cast-3.jpg" alt="Cast" />
                        </a>
                        <div className="item-listing-text-skrn item-listing-movie-casting">
                          <h6>
                            <a href="#!">Chris Hemsworth Thor</a>
                          </h6>
                          <div className="movie-casting-sub-title">
                            Tony Stark
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="movie-details-section">
                  <h2>Similar Movies</h2>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="dashboard-movie-profile.html">
                          <img src="http://progression-studios.com/skrn/images/demo/listing-4.jpg" alt="Listing" />
                        </a>
                        <div className="item-listing-text-skrn">
                          <div className="item-listing-text-skrn-vertical-align">
                            <h6>
                              <a href="dashboard-movie-profile.html">
                                Bad Neighbors 2
                              </a>
                            </h6>
                            <div
                              className="circle-rating-pro"
                              data-value="0.72"
                              data-animation-start-value="0.72"
                              data-size="32"
                              data-thickness="3"
                              data-fill='{
								          "color": "#42b740"
								        }'
                              data-empty-fill="#def6de"
                              data-reverse="true"
                            >
                              <span style={{color:'#42b740'}}>7.2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="dashboard-movie-profile.html">
                          <img src="http://progression-studios.com/skrn/images/demo/listing-5.jpg" alt="Listing" />
                        </a>
                        <div className="item-listing-text-skrn">
                          <div className="item-listing-text-skrn-vertical-align">
                            <h6>
                              <a href="dashboard-movie-profile.html">
                                Star Wars: Rogue One
                              </a>
                            </h6>
                            <div
                              className="circle-rating-pro"
                              data-value="0.86"
                              data-animation-start-value="0.86"
                              data-size="32"
                              data-thickness="3"
                              data-fill='{
								          "color": "#42b740"
								        }'
                              data-empty-fill="#def6de"
                              data-reverse="true"
                            >
                              <span style={{color:'#42b740'}}>8.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="item-listing-container-skrn">
                        <a href="dashboard-movie-profile.html">
                          <img src="http://progression-studios.com/skrn/images/demo/listing-6.jpg" alt="Listing" />
                        </a>
                        <div className="item-listing-text-skrn">
                          <div className="item-listing-text-skrn-vertical-align">
                            <h6>
                              <a href="dashboard-movie-profile.html">
                                The Imitation Game
                              </a>
                            </h6>
                            <div
                              className="circle-rating-pro"
                              data-value="0.6"
                              data-animation-start-value="0.6"
                              data-size="32"
                              data-thickness="3"
                              data-fill='{
								          "color": "#ff4141"
								        }'
                              data-empty-fill="#ffe1e1"
                              data-reverse="true"
                            >
                              <span style={{color:'#ff4141'}}>6.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
