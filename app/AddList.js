var React = require('react');

var AddList = React.createClass({
  getInitialState: function () {
    return {
      listName: ''
    }
  },
  handleChange: function(e) {
    this.setState({
      listName: e.target.value
    })
  },
  handleSubmit: function(e) {
    // if(e.keyCode === 13) {
      this.props.add(this.state);
      this.setState({
        listName: ''
      });
    // }
  },
  render: function() {
    return (
      <div className="col-sm-6">
        <h3 className="text-center"> Create New List </h3>
        List Name:
        <input type="text" 
          className="form-control"
          value={this.state.listName}
          onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleSubmit}/>
      </div>
    )
  }
})

module.exports = AddList;