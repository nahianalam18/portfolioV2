import React, { Component } from "react";
import {
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  FilePdfFilled,
} from "@ant-design/icons";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="space">
          <p>Hi,</p>
          <p style={{ color: "royalblue" }}>I'm Nahian</p>

          <div className="iconss">
            <a
              href="https://github.com/nahianalam18/portfolioV2/blob/master/src/components/Nahian_Alam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdfFilled style={{ color: "red", padding: "0.2em" }} />
            </a>

            <a
              href="https://github.com/nahianalam18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubFilled style={{ color: "#333", padding: "0.2em" }} />{" "}
            </a>
            <br />
            <a
              href="https://www.instagram.com/nahian_alam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled style={{ color: "#fb3958", padding: "0.2em" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/nahianalam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled style={{ color: "#0e76a8", padding: "0.2em" }} />{" "}
            </a>
          </div>
          <p>Computer Science - Class of 2021</p>
          <p>At</p>
          <p>
            <a
              href="http://www.uta.edu"
              style={{ color: "#F5AA14" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              The University of Texas at Arlington
            </a>
          </p>
          <p style={{ font: "5px" }}>
            Email me at{" "}
            <a
              href="mailto:alam.nahian18@gmail.com"
              style={{ color: "purple" }}
            >
              alam.nahian18@gmail.com
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
