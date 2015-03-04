var React = require('react'),
	ListContainer = require('./ListContainer'),
	AddList = require('./AddList');

var App = React.createClass({
	getInitialState: function() {
		return {
			lists: []
		}
	},
	addNewList: function(newList) {
		this.setState({
			lists: this.state.lists.concat([{newTitle: newList.listName, index: this.state.lists.length}])
		})
	},
	handleRemoveList: function(index) {
		var arrayToSplice = this.state.lists;
		arrayToSplice.splice(index, 1);
		this.setState({
			lists: arrayToSplice
		})
	},
	render: function() {
		var componentList = this.state.lists.map(function(item, index) {
			console.log(item)
			return (
				<ListContainer title={item.newTitle} key={item.index} remove={this.handleRemoveList} index={index} />
			)
		}.bind(this))
		return (
			<div className="container">
				<div className="row">
					<AddList add={this.addNewList} />
					{componentList}
				</div>
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
