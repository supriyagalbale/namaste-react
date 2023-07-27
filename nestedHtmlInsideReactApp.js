{
  /* <div id="parent">
    <div id="child">
        <h1>This is nested HTML</h1>
        <h2>second child</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { }, "This is nested HTML"),
    React.createElement("h2", {}, "second child"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
