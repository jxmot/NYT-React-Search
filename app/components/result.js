var React = require('react');

var Result = React.createClass({

    getInitialState: function() {
        return {items: [], count: null}
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('RESULT - componentWillReceiveProps')
        console.log(nextProps.items)
        console.log(nextProps.count)
        if(nextProps.count === 0) clearResults()
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
            var list = items.map(function(item) {
                return item[0].outerHTML
            })
            var tmp = list.join('<br />')
            return <div dangerouslySetInnerHTML={{__html:tmp}}> </div>
        } else {
            return <h3>I got nuttin</h3>
        }
    },

    renderItem: function(html) {
        return (
            <div>
                {html}
            </div>
        )
    }

});

module.exports = Result;
