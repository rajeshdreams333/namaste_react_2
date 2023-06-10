/*
        HOT MODULE RELOADING (HMR) =>IT USE WHEN EVER WE CHANCE IN CSS OR HTML CHANGES TAKE PLACE.
        File Watcher algorithm => (which type of file is this.) - C++.
        Bundling
        Minify
        Cleaning our code
        Dev and Production Build
        Super Fast build algorithm
        Image Optimization
        Caching while development
        Compression
        Compatble with older version of browser
        Https on dev
        
*/



import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title", 
  },
  "Hi Rajesh...."
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello Frnds...."
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
