import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1>Hello, React!</h1>

// React Functional Component
const Title = () => {
  return (
    <h1 id="title" className="title">React Functional Component</h1>
  )
}

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Hello, React!</h1>
      <Title />
    </div>
  )
}

console.log(heading); // Object representation of the React element

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Create a root for rendering
root.render(<HeadingComponent />); // Render the React element to the DOM - it converts to HTML and displays it on the webpage
