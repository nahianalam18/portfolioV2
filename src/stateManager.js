import React, { Component, createContext } from "react";

export const DataManager = createContext();

class StateManager extends Component {
  state = {
    step: 99,
    project: [
      {
        index: 1,
        name: "UTA Ride",
        picture: "/ride1.png",
        date: "June 2020",
      },
      {
        index: 2,
        name: "Reknit",
        picture: "/reknit.png",
        date: "May 2020",
      },
      {
        index: 3,
        name: "Road Rage Unlimited",
        picture: "/RRU.jpg",
        date: "April 2019",
      },
      {
        index: 4,
        name: "Maverick Shell",
        picture: "/shell.jpg",
        date: "Septemer 2019",
      },
      {
        index: 5,
        name: "Maverick File System",
        picture: "/filesystem.png",
        date: "November 2019",
      },
    ],
  };
  changeStep = (val) => {
    this.setState({ step: val });
  };
  render() {
    return (
      <DataManager.Provider
        value={{
          ...this.state,
          changeStep: this.changeStep,
        }}
      >
        {this.props.children}
      </DataManager.Provider>
    );
  }
}

export default StateManager;
