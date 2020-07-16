import React, { Component } from "react";
import { Tabs } from "antd";
import Project from "./projectsContent";
import HomePage from "./home";
const { TabPane } = Tabs;

class Tab extends Component {
  state = {};
  render() {
    return (
      <Tabs className="tabStyle">
        <TabPane tab="Home" key="1" className="blurr-text">
          <HomePage />
        </TabPane>
        <TabPane tab="Projects" key="2" className="blurr-text">
          <Project></Project>
        </TabPane>
      </Tabs>
    );
  }
}

export default Tab;
