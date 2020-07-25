import React, { Component } from "react";
import { Card } from "antd";
import { DataManager } from "../stateManager";
import QueueAnim from "rc-queue-anim";
import CardContent from "./inCard";

class Project extends Component {
  static contextType = DataManager;
  state = {};
  changeStep = (value) => {
    this.context.changeStep(value);
  };

  renderingFunction = (stage) => {
    const { Meta } = Card;
    if (stage === 0)
      return (
        <React.Fragment>
          <div className="queue-demo">
            <p className="buttons" style={{ marginBottom: 20 }}></p>
            <QueueAnim type={["right", "left"]} className="demo-content">
              <QueueAnim
                className="demo-page"
                key="page"
                type="bottom"
                delay={200}
              >
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
    else
      return (
        <React.Fragment>
          <CardContent index={this.context.step}></CardContent>
        </React.Fragment>
      );
  };

  render() {
    return this.renderingFunction(this.context.step);
  }
}

export default Project;
