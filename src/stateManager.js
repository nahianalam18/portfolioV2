import React, { Component, createContext } from "react";

export const DataManager = createContext();

class StateManager extends Component {
  state = {
    step: 0,
    project: [
      {
        index: 1,
        name: "UTA Ride",
        picture: "/ride1.PNG",
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
        picture: "/teatool.PNG",
        platform: "Website - ReactJS, ExpressJS",
      },
      {
        index: 5,
        name: "Park Spot",
        picture: "/parkSpot.jpg",
        platform: "Mobile Application - Flutter - Dart",
      },
      {
        index: 6,
        name: "Maverick Shell",
        picture: "/shell.jpg",
        platform: "Shell Application - C",
      },
      {
        index: 7,
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
      "Application that shows available parking spots",
      "A minimal shell for Maverick Students",
      "A FAT32 File System",
    ],
    githubLink: [
      "https://github.com/nahianalam18",
      "https://github.com/nahianalam18/Reknit-Frontend",
      "https://github.com/nahianalam18",
      "https://github.com/nahianalam18/teatool",
      "https://github.com/nahianalam18/ParkSpot",
      "https://github.com/nahianalam18",
      "https://github.com/nahianalam18",
    ],
    teamMembers: [
      "Jonah Bui, Bishesh Shrehsta, Reid Yeager & Mao Zhang",
      "Gulnaz Khabibullina, Alexis Lueckenhoff, Sam Thomas & Ruben Rodriguez",
      "James Brady, Jonathan Marek, Andrew Miller",
      "Sujan Shreshtha, Tausif Zaman",
      "Nadir Afridi Azmi, Hugh Boy, Sam Thomas",
    ],
    tools: [
      "Unity 3D - C#",
      "ReactJS, Python Flask",
      "Unity 3D - C#",
      "ReactJS, ExpressJS, Google Firebase",
      "Flutter, Python Flask",
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
