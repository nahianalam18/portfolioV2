import React, { Component } from "react";
import { Button, Card } from "antd";
import { DataManager } from "../stateManager";
import QueueAnim from "rc-queue-anim";

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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[0]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[0]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={1500} className="App">
              <div key="c">
                <h1>{this.context.teamMembers[0]}</h1>
              </div>
            </QueueAnim>

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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[1]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[1]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={1500} className="App">
              <div key="c">
                <h1>{this.context.teamMembers[1]}</h1>
              </div>
            </QueueAnim>
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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[2]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[2]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={1500} className="App">
              <div key="c">
                <h1>{this.context.teamMembers[2]}</h1>
              </div>
            </QueueAnim>
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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[3]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[3]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={1500} className="App">
              <div key="c">
                <h1>{this.context.teamMembers[3]}</h1>
              </div>
            </QueueAnim>
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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[4]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[4]}</h1>
              </div>
            </QueueAnim>
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
            <QueueAnim delay={200} className="App">
              <div key="a">
                <h1>{this.context.description[5]}</h1>
              </div>
            </QueueAnim>
            <QueueAnim delay={800} className="App">
              <div key="b">
                <h1>{this.context.tools[5]}</h1>
              </div>
            </QueueAnim>

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
            <div className="queue-demo">
              <p className="buttons" style={{ marginBottom: 20 }}></p>
              <QueueAnim type={["right", "left"]} className="demo-content">
                <QueueAnim className="demo-page" key="page" type="bottom">
                  {/* <h1 key="h1" />
                  <p key="p" /> */}
                  <div key="box" className="box">
                    <QueueAnim type="bottom" component="ul">
                      <div>
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
                              <Meta
                                title={element.name}
                                description={element.platform}
                              />
                            </Card>
                            <br />
                          </div>
                        ))}
                      </div>
                    </QueueAnim>
                  </div>
                </QueueAnim>
              </QueueAnim>
            </div>
          </React.Fragment>
        );
    }
  }
}

export default Project;
