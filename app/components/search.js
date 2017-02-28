var React = require('react');

var Search = React.createClass({

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
                        <div className="form-group">
                            <label htmlFor="search">Search Term:</label>
                            <input className="form-control" id="searchTerm" value="dogs" type="text" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pwd">Number of Records to Retrieve:</label>
                            <select className="form-control" id="numRecordsSelect">
                                <option value="1">1</option>
                                <option value="5" selected="selected">5</option>
                                <option value="10">10</option>
                            </select>			  
                        </div>

                        <div className="form-group">
                            <label htmlFor="startYear">Start Year (Optional):</label>
                            <input className="form-control" id="startYear" value="2016" type="text" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endYear">End Year (Optional):</label>
                            <input className="form-control" id="endYear" value="2017" type="text" />
                        </div>

                        <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                        <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

					</form>
				</div>
			</div>
		</div>
    </div>

        );
    }

/*
    getInitialState: function() {
        return {counter: 0};
    },


    handleClick: function(event) {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        var divStyle = {border: "1px solid red"};
        return(
            <div style={divStyle}>
                I am a student {this.props.name} | {this.props.age} | {this.props.occupation}
                <button onClick={this.handleClick}>Click counter {this.state.counter}</button>
                <hr/>
                <PersonalStatement id={this.props.name} />
            </div>
        );
    }
*/
});

module.exports = Search;

