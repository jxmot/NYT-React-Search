var React = require('react');

var ITEMQTYCHOICES = ['1', '5', '10', '15', '20'];

var Search = React.createClass({

    getInitialState: function() {
        return {errors: {}}
    },

    isValid: function() {
        var fields = ['searchTerm', 'numRecordsSelect', 'startYear', 'endYear']

        var errors = {}
        fields.forEach(function(field) {
            var value = trim(this.refs[field].getDOMNode().value)
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
        }
        return data
    },

    render: function() {
        return(
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
                                {this.renderSelect('numRecordsSelect', 'Number of Records to Retrieve:', ITEMQTYCHOICES)}
                                {this.renderTextInput('searchTerm', 'Start Date (Optional):')}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
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
            //<div className={$c('form-group', {'has-error': id in this.state.errors})}>
            <div className='form-group'>
                <label htmlFor={id}>{label}</label>
                {field}
            </div>
        )
    }

});

var trim = function() {
    var TRIM_RE = /^\s+|\s+$/g
    return function trim(string) {
        return string.replace(TRIM_RE, '')
    }
}()

function $c(staticClassName, conditionalClassNames) {
    var classNames = []
    if (typeof conditionalClassNames == 'undefined') {
        conditionalClassNames = staticClassName
    }
    else {
        classNames.push(staticClassName)
    }
    for (var className in conditionalClassNames) {
        if (!!conditionalClassNames[className]) {
            classNames.push(className)
        }
    }
    return classNames.join(' ')
}


module.exports = Search;

