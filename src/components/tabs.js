import React, { Component } from "react";
import { Tabs } from "antd";
import Project from "./projectsContent";
const { TabPane } = Tabs;

class Tab extends Component {
  state = {};
  render() {
    return (
      <Tabs className="tabStyle">
        <TabPane tab="Home" key="1" className="blurr-text">
          <h1>Content 1</h1>
        </TabPane>
        <TabPane tab="Projects" key="2" className="blurr-text">
          <Project></Project>
        </TabPane>
      </Tabs>
    );
  }
}

export default Tab;
