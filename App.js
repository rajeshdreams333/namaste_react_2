/*
      what is bundler?
      help optimize code delivery, improve performance, and enable the use of advanced JavaScript features.

        HOT MODULE REPLACEMENT (HMR) =>IT USE WHEN EVER WE CHANCE IN CSS OR HTML CHANGES TAKE PLACE.
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
        port number
        Consistent Hashing algorithm
        Zero Config
        Tree shaking -- remove unwanted code

        Transitive Deopendencies
*/
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key:"h1",
//   },
//   "Hi Rajesh...."
// );
// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key:"h2",
//   },
//   "Hello Frnds...."
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );
// console.log(container);
// const heading=React.createElement(
//   "h1",
//   {
//     id:"title",
//     key:"h1"
//   },
//   "Namaste Rajesh...."
// );

// =================================================
const heading2 = (
  <h1 id="id1" key="h1">
    Hello Everyone....
  </h1>
);

// React component
// functional component  -- New
// class based component -- Old
const HeaderComponent1 = () => (
  <div>
  <h1>
    I will try my level best....
  </h1>
  </div>
);

const HeaderComponent = () => {
  return (
    <div>
      <HeaderComponent1 />
      {HeaderComponent1()}
      {heading2} 
      <h1>Hi Friends.... This is a functional component</h1>
      <h1>This is my heading2</h1>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);


// When we try to render the component make it as tags ==><component_name />
