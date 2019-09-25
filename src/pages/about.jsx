import React, { Component } from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <main id="col-main">
          <Helmet title={`About | ${config.siteTitle}`} />
          <div className="dashboard-container">
            <About />
          </div>
        </main>
      </Layout>
    );
  }
}

export default AboutPage;
