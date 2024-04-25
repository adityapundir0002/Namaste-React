/*

<div id="parent">
  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>;

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);
console.log("parent", parent);
ReactDOM.render(parent, document.getElementById("root"));
