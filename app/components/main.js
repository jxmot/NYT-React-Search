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
                </div>
                <Search />
            </div>
        );
    }
});

module.exports = Main;
