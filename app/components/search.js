var React = require('react');

var Result = require('./result.js');

var ITEMQTYCHOICES = ['1', '5', '10', '15', '20'];

var Search = React.createClass({

    getInitialState: function() {
        console.log('getInitialState.....')
        return {errors: {}, submitted: null}
    },

    isValid: function() {

        var fields = ['searchTerm', 'numItemsSelect', 'startDate', 'endDate']

        var errors = {}
        fields.forEach(function(field) {
            var value = this.refs[field].value.replace(/^\s+|\s+$/g, '')
            if(!value) {
                errors[field] = 'This field is required'
            }
        }.bind(this))
        this.setState({errors: errors})

        var isValid = true

        for (var error in errors) {
            isValid = false
            break
        }

        return isValid
    },

    getFormData: function() {
        var data = {
            searchTerm: this.refs.searchTerm.value,
            numItemsSelect: this.refs.numItemsSelect.value,
            startDate: this.refs.startDate.value,
            endDate: this.refs.endDate.value
        }
        return data
    },

    handleSubmit: function() {
        if (this.isValid()) {
            console.log('setting state.....')
            this.setState({submitted: this.getFormData(), items: ['item1', 'item2', 'item3', 'item4'], count: 4})
        }
    },

    handleClear: function() {
        this.refs.searchTerm.value = ''
        this.refs.numItemsSelect.value = ITEMQTYCHOICES[0]
        this.refs.startDate.value = ''
        this.refs.endDate.value = ''
        console.log('clearing state.....')
        this.setState({submitted: null, items: [], count: 0})
    },

    render: function() {
        return(
        <div>
            <div className="row">
                <div className="col-sm-12">
                <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>    Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                {this.renderTextInput('searchTerm', 'Search Term:'+this.props.count)}
                                {this.renderSelect('numItemsSelect', 'Number of Items to Retrieve:', ITEMQTYCHOICES)}
                                {this.renderTextInput('startDate', 'Start Date (YYYYMMDD):')}
                                {this.renderTextInput('endDate', 'End Date (YYYYMMDD):')}
                                <br />
                                <button type="button" className="btn btn-default" id="runSearch" onClick={this.handleSubmit}><i className="fa fa-search"></i> Search</button>
                                <button type="button" className="btn btn-default" id="clearAll" onClick={this.handleClear}><i className="fa fa-trash"></i> Clear Results</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Result items={this.state.items} count={this.state.count}/>
        </div>
        )
    },

    renderResults: function() {
        <Result items={this.items} count={this.count}/>
    },

    renderTextInput: function(id, label) {
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    },

    renderSelect: function(id, label, values) {
        var options = values.map(function(value) {
            return <option key={value} value={value}>{value}</option>
        })
        return this.renderField(id, label,
            <select className="form-control" id={id} ref={id}>
                {options}
            </select>
        )
    },

    renderField: function(id, label, field) {
        return (
            <div className='form-group'>
                <label htmlFor={id}>{label}</label>
                {field}
            </div>
        )
    }
});

module.exports = Search;

