import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
// import { GithubFilled } from "@ant-design/icons";
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
      <React.Fragment>
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
            <h1>{this.context.teamMembers[this.props.index - 1]}</h1>
          </div>
        </QueueAnim>

        <Button
          type="danger"
          onClick={() => {
            this.changeStep(0);
          }}
        >
          Back
        </Button>
      </React.Fragment>
    );
  }
}

export default CardContent;
