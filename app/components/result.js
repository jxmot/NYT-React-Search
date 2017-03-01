var React = require('react');

var Result = React.createClass({

    getInitialState: function() {
        return {items: [], count: null}
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('RESULT - componentWillReceiveProps')
        console.log(nextProps.items)
        console.log(nextProps.count)
    },

    render: function() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>    Top Articles</strong></h3>
                        </div>
                        <div className="panel-body" id="wellSection">
                            {this.renderResults(this.props.items, this.props.count)}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    renderResults: function(items, count) {
        if(count > 0) {
            <h3>There are {count} matching items.</h3>
            var ulist = items.map(function(value) {
                return <li key={value}>{value}</li>
            })
            return <ul>{ulist}</ul>
        } else {
            return <h3>I got nuttin</h3>
        }
    }
});

module.exports = Result;
