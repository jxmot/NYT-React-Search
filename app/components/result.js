/* ************************************************************************ */
/*
    This portion is a child of the search component. It renders the search 
    results.
*/
var React = require('react');

var Result = React.createClass({

    getInitialState: function() {
        return {items: [], count: null}
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('RESULT - componentWillReceiveProps')
        console.log(nextProps.items)
        console.log(nextProps.count)
        if(nextProps.count === 0) this.clearArticles()
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
                        {this.renderArticles(this.props.items, this.props.count)}
                    </div>
                </div>
            </div>
        )
    },

    getFormData: function() {
        var data = {
            headline: this.refs.headline.value,
            byline: this.refs.byline.value,
            sectionName: this.refs.sectionName.value,
            pubDate: this.refs.pubDate.value,
            webURL: this.refs.webURL.value
        }
        return data
    },

    handleSave: function() {
        console.log(this.getFormData())
    },

    renderArticles: function(items, count) {
        var articles = items.map(function(article) {
            var id = 'articleWell-' + article.tagCounter
            var numberStyle = {padding: "2px"};
            return (
                <div className="well" id={id} key={article.tagCounter}>
                    <h3><span className="label label-success" style={numberStyle}>{article.tagCounter}</span><strong>{article.headline}</strong></h3>
                    <h5>{article.byline}</h5>
                    <h5>{article.sectionName}</h5>
                    <h5>{article.pubDate}</h5>
                    <a target="_blank" href={article.webURL}>{article.webURL}</a>
                    <form role="form">
                        {this.renderHiddenInput('headline', article.headline)}
                        {this.renderHiddenInput('byline', article.byline)}
                        {this.renderHiddenInput('sectionName', article.sectionName)}
                        {this.renderHiddenInput('pubDate', article.pubDate)}
                        {this.renderHiddenInput('webURL', article.webURL)}
                        <button type="button" className="btn btn-success" id="runSave" onClick={this.handleSave}>Save</button>
                    </form>
                </div>
            )
        }.bind(this));
        return (
            <div className="panel-body" id="wellSection">
                {articles}
            </div>
        )
    },

    renderHiddenInput: function(id, value) {
        return (
            <input type="hidden" id={id} ref={id} value={value}/>
        )
    },

    clearArticles: function() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>    Top Articles</strong></h3>
                        </div>
                        <div className="panel-body" id="wellSection">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Result;
