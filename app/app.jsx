let React = require("react");
let ReactDOM = require("react-dom");
let {Route, Router, IndexRoute, hashHistory} = require("react-router");
let TodoApp = require("TodoApp");

// Load Foundation
$(document).foundation();
// Load application styles
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <TodoApp/>,
    document.getElementById("app")
);
