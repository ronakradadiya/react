const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("div", { id: "child2" }, "I am child 2")
  )
);

const siblings = React.createElement(
  "div",
  { id: "siblings" },
  React.createElement("div", { id: "sibling1" }, "I am sibling 1"),
  React.createElement("div", { id: "sibling2" }, "I am sibling 2")
);

const complexParent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag")
    ]
  )
);

const heading = React.createElement(
  "div",
  {
    id: "heading",
  }, // props
  "Hello, React!" // children
);

console.log(heading); // Object representation of the React element

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Create a root for rendering
root.render(complexParent); // Render the React element to the DOM - it converts to HTML and displays it on the webpage
