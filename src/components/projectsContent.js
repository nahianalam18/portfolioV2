import React, { Component } from "react";
import { Button, Card } from "antd";
import { DataManager } from "../stateManager";

class Project extends Component {
  static contextType = DataManager;
  state = {};
  changeStep = (value) => {
    this.context.changeStep(value);
  };
  render() {
    const { Meta } = Card;
    switch (this.context.step) {
      case 1:
        return (
          <React.Fragment>
            <h1>This is case 1</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <h1>This is case 2</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <h1>This is case 3</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <h1>This is case 4</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 5:
        return (
          <React.Fragment>
            <h1>This is case 5</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 6:
        return (
          <React.Fragment>
            <h1>This is case 6</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      case 7:
        return (
          <React.Fragment>
            <h1>This is case 7</h1>
            <Button
              type="danger"
              onClick={() => {
                this.changeStep(99);
              }}
            >
              Back
            </Button>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            {this.context.project.map((element) => (
              <div
                onClick={() => {
                  this.changeStep(element.index);
                }}
              >
                <Card
                  hoverable
                  style={{ width: 340 }}
                  cover={
                    <img
                      alt=""
                      src={process.env.PUBLIC_URL + element.picture}
                    />
                  }
                >
                  <Meta title={element.name} description={element.date} />
                </Card>
                <br />
              </div>
            ))}
          </React.Fragment>
        );
    }
  }
}

export default Project;
