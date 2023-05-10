const heading = React.createElement("h1", { id: "title" }, "Namaste React");
const paragraph = React.createElement(
  "p",
  { id: "paragraph" },
  "Assignment 1 Completed."
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  paragraph,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
