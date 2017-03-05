/* ************************************************************************ */
/*
    This portion wraps the form and its children (result.js)
*/
var React = require('react');

// the search component, contains the form and it's children
var Search = require('./search.js');

var Main = React.createClass({
    render: function render() {
        var jumboStyle = {backgroundColor: "#20315A", color: "white", marginTop: "10px"};
        var linkStyle = {fontSize: "small"}
        return(
            <div>
                <div className="jumbotron" style={jumboStyle}>
                    <h2 className="text-center"><strong><i className="fa fa-newspaper-o"></i>    New York Times Search</strong></h2>
                </div>
                <div className="text-center">
                    <h4>A Node, Express, React, Mongoose, Socket.io Application</h4>
                    <a className="btn btn-link" style={linkStyle} target="_blank" href="https://github.com/jxmot/NYT-React-Search">Github Repository</a>
                </div>
                <Search />
            </div>
        );
    }
});

module.exports = Main;
