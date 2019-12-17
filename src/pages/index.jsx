import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <main id="col-main">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="dashboard-container">
            <h1 className="my-5">
              <Link to="/movie">&gt; Test movie page &lt;</Link>
            </h1>
            <hr />
            <h1 className="my-5">Movies</h1>
            <ul>
              <li>
                <Link to="/movies/true-blood">True Blood</Link>
              </li>
            </ul>
            <hr />

            <PostListing postEdges={postEdges} />
          </div>
        </main>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
