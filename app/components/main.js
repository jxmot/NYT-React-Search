/* ************************************************************************ */
/*
    This portion wraps the form and its children (result.js)
*/
var React = require('react');

// the search component, contains the form and it's children
var Search = require('./search.js');

var Main = React.createClass({
    render: function render() {
        var jumboStyle = {backgroundColor: "#20315A", color:"white"};
        return(
            <div>
                <div className="jumbotron" style={jumboStyle}>
                    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>    New York Times Search</strong></h1>
                    <h3 className="text-center">A Node/Express/React/Mongoose/Socket.io Application</h3>
                </div>
                <Search />
            </div>
        );
    }
});

module.exports = Main;
