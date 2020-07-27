import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import { GithubFilled } from "@ant-design/icons";
import { Button } from "antd";
import { DataManager } from "../stateManager";
class CardContent extends Component {
  static contextType = DataManager;
  state = {};
  changeStep = (value) => {
    this.context.changeStep(value);
  };
  render() {
    return (
      <div className="App-header">
        <QueueAnim delay={200} className="App">
          <div key="a">
            <h1>{this.context.description[this.props.index - 1]}</h1>
          </div>
        </QueueAnim>
        <QueueAnim delay={800} className="App">
          <div key="b">
            <h1>{this.context.tools[this.props.index - 1]}</h1>
          </div>
        </QueueAnim>
        <QueueAnim delay={1500} className="App">
          <div key="c">
            <p>{this.context.teamMembers[this.props.index - 1]}</p>
          </div>
        </QueueAnim>
        <a
          className="iconss"
          href={this.context.githubLink[this.props.index - 1]}
        >
          <GithubFilled style={{ color: "#333", padding: "0.2em" }} />{" "}
        </a>
        <br></br>
        <Button
          type="danger"
          onClick={() => {
            this.changeStep(0);
          }}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default CardContent;
