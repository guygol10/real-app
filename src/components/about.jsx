import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="About Real App" />
        <div className="row">
          <div className="col-12">
            <p>Our company is the best ever!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
