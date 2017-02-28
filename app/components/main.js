var React = require('react');

var Search = require('./search.js');
var Result = require('./result.js');

var Main = React.createClass({

    render: function render() {
        var jumboStyle = {backgroundColor: "#20315A", color:"white"};
        return(
            <div>
                <div className="jumbotron" style={jumboStyle}>
                    <h1 className="text-center">
                        <strong>
                            <i className="fa fa-newspaper-o">    </i>
                            New York Times Search
                        </strong>
                    </h1>
                </div>
                <Search />
                <Result />
            </div>
        );
    }

});

module.exports = Main;
