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
        platform: "Virtual Reality - Unity 3D, C#",
      },
      {
        index: 2,
        name: "Reknit",
        picture: "/reknit.png",
        platform: "Website - ReactJS, Python Flask",
      },
      {
        index: 3,
        name: "Road Rage Unlimited",
        picture: "/RRU.jpg",
        platform: "Multiplayer Game - Unity 3D, C#",
      },
      {
        index: 4,
        name: "Tea Tool",
        picture: "/teatool.png",
        platform: "Website - ReactJS, ExpressJS",
      },
      {
        index: 5,
        name: "Maverick Shell",
        picture: "/shell.jpg",
        platform: "Shell Application - C",
      },
      {
        index: 6,
        name: "Maverick File System",
        picture: "/filesystem.png",
        platform: "Shell Application - C",
      },
    ],
    description: [
      "Virtual Reality Application",
      "Website for knitting competition",
      "A 3D Multiplayer Game",
      "A tool for teachers to keep track",
      "A minimal shell for Maverick Students",
      "A FAT32 File System",
    ],
    githubLink: ["", ""],
    teamMembers: [
      "Jonah Bui, Bishesh Shrehsta, Reid Yeager & Mao Zhang",
      "Gulnaz Khabibullina, Alexis Lueckenhoff, Sam Thomas & Ruben Rodriguez",
      "James Brady, Jonathan Marek, Andrew Miller",
      "Sujan Shreshtha, Tausif Zaman",
    ],
    tools: [
      "Unity 3D - C#",
      "ReactJS, Python Flask",
      "Unity 3D - C#",
      "ReactJS, ExpressJS, Google Firebase",
      "C",
      "C",
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
