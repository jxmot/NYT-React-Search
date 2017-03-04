/* ************************************************************************ */
/*
    This portion is a child of the search component. It renders the search 
    results.
*/
var React = require('react');

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// will need a means to change this programmatically even 
// if the choices are hard coded - 
//
// development = http://localhost:3000
// production  = https://heroku-deploy-server
//
var socket = io.connect();

var Saved = React.createClass({

    getInitialState: function() {
        console.log('Saved getInitialState')
        return {saved: []}
    },

    componentDidMount: function () {
        console.log('Saved componentDidMount');

        socket.on('broadcast', function(data) {
            console.log('received a broadcast');
            this.setState({saved: data});
        }.bind(this));

        helpers.getArticles().then(function (response) {
            console.log('received a response');
            // do something
            //this.setState({saved: response.data});
            this.setState({saved: response});
            //this.forceUpdate();
        }.bind(this));
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('Saved - componentWillReceiveProps')
        console.log(nextProps.items)
        console.log(nextProps.count)
    },

    handleDelete: function(article, e) {
        helpers.delArticle(article)
    },

    render: function() {
        console.log('Saved render');
        return(
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>    Saved Articles</strong></h3>
                        </div>
                        {this.renderSaved(this.state.saved)}
                    </div>
                </div>
            </div>
        )
    },

    renderSaved: function(saved) {
        var articles = [];

        console.log('Saved renderSaved');
        console.log(saved);

        if(saved) {
            var articles = saved.map(function(article, index) {
                var id = 'savedWell-' + (index + 1);
                return (
                    <div className="well" id={id} key={id}>
                        <h3>{article.headline}</h3>
                        <h5>{article.dateSaved}</h5>
                        <br />
                        <br />
                        <form role="form">
                            <button type="button" className="btn btn-success" id="runSave" onClick={this.handleDelete.bind(this, article)}>Delete</button>
                        </form>
                    </div>
                )
            }.bind(this));
        }
        return (
            <div className="panel-body" id="wellSectionSaved">
                {articles}
            </div>
        )
    }

});

module.exports = Saved;

