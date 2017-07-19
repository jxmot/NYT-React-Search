/* ************************************************************************ */
/*
    This portion is the form and the child that contains the search results.
*/
var React = require('react');

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// this component's children
var Result = require('./result.js');
var Saved = require('./saved.js');

// only 3 choices, NYT seems to return a max of 10
var ITEMQTYCHOICES = ['1', '5', '10'];

var Search = React.createClass({

    getInitialState: function() {
        console.log('SEARCH - getInitialState');
        return {errors: {}, submitted: null, items: []}
    },

    isValid: function() {

        // the form fields we will validate
        var fields = ['searchTerm', 'numItemsSelect', 'startDate', 'endDate']

        var errors = {}
        fields.forEach(function(field) {
            var value = this.refs[field].value.replace(/^\s+|\s+$/g, '')
            if(!value) {
                errors[field] = 'This field is required'
            }
        }.bind(this))

        this.setState({errors: errors})

        // set it now, the test will reset it if necessary
        var isValid = true

        // if any errors were detected and saved then reset
        // the valid flag to false and stop checking errors
        for (var error in errors) {
            isValid = false
            console.log(errors)
            break
        }
        return isValid
    },

    getFormData: function() {
        var data = {
            searchTerm: this.refs.searchTerm.value,
            numItemsSelect: this.refs.numItemsSelect.value,
            startDate: this.refs.startDate.value.replace(/-/g, ''),
            endDate: this.refs.endDate.value.replace(/-/g, '')
        }
        return data
    },

    handleSubmit: function() {
        if(this.isValid()) {
            helpers.runQuery(this.getFormData())
            .then(function(data) {
                console.log('got stuff????')
                console.log(data.length)
                var items = JSON.parse(JSON.stringify(data))
                this.setState({items: data, count: items.length});
            }.bind(this));
        } else {
            console.log('oops!')
            console.log(this.state.errors)
            console.log(this.props.errors)
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

    componentWillReceiveProps: function(nextProps) {
        console.log('SEARCH - componentWillReceiveProps')
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
                                {this.renderTextInput('searchTerm', 'Search Term:')}
                                {this.renderSelect('numItemsSelect', 'Number of Items to Retrieve:', ITEMQTYCHOICES)}
                                {this.renderDateInput('startDate', 'Start Date :')}
                                {this.renderDateInput('endDate', 'End Date :')}
                                <br />
                                <button type="button" className="btn btn-default" id="runSearch" onClick={this.handleSubmit}><i className="fa fa-search"></i> Search</button>
                                <button type="button" className="btn btn-default" id="clearAll" onClick={this.handleClear}><i className="fa fa-trash"></i> Clear Results</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Result items={this.state.items} count={this.state.count}/>
            <Saved />
        </div>
        )
    },

    renderTextInput: function(id, label) {
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    },

    renderDateInput: function(id, label) {
        
        var today = new Date()
        var zeropadM = ''
        var zeropadD = ''
        if((today.getMonth() + 1) < 10) zeropadM = '0'
        if(today.getDate() < 10) zeropadD = '0'
        var defdate = '' + today.getFullYear() + '-' + zeropadM + (today.getMonth() + 1) + '-' + zeropadD + today.getDate()

        if(id === 'endDate') {
            return this.renderField(id, label,
                <input type="date" className="form-control" id={id} ref={id} defaultValue={defdate} max={defdate}/>
            )
        } else {
            return this.renderField(id, label,
                <input type="date" className="form-control" id={id} ref={id} max={defdate}/>
            )
        }
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

