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
        <h1>Hi I'm</h1>
        <h1>Nahian Alam</h1>
        {/* <img
          src={process.env.PUBLIC_URL + "/download.png"}
          className="avatar"
          alt="logo"
        />{" "} */}
        <br></br>{" "}
        <div className="iconss">
          <a
            className="links icons"
            href="https://drive.google.com/file/d/12OQGWA2xhcvQalJH7RzREoRMG7yGkGKl/view?usp=sharing"
          >
            <FilePdfFilled style={{ color: "red", padding: "0.2em" }} />
          </a>

          <a className="links icons" href="https://github.com/nahianalam18">
            <GithubFilled style={{ color: "#333", padding: "0.2em" }} />{" "}
          </a>
          <br />
          <a
            className="links icons"
            href="https://www.instagram.com/nahian_alam/"
          >
            <InstagramFilled style={{ color: "#fb3958", padding: "0.2em" }} />
          </a>

          <a
            className="links icons"
            href="https://www.linkedin.com/in/nahianalam/"
          >
            <LinkedinFilled style={{ color: "#0e76a8", padding: "0.2em" }} />{" "}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
