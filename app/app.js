// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Main = require('./components/main.js');

var where = document.getElementById('app');

ReactDOM.render(
    <div className="container">
        <Main />
    </div>
, where);
