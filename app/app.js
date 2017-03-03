/* ************************************************************************ */
/*
    Starting point for the REACT page (see /public/index.html)
*/
// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// 
var Main = require('./components/main.js');

// this is where the REACT content will be rendered
var where = document.getElementById('app');

ReactDOM.render(
    <div className="container">
        <Main />
    </div>
, where);
