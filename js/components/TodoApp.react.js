var React = require("react");
var TodoAppList = require("./TodoAppList.react");
var TodoStore = require("../stores/TodoStore");
var TodoAction = require("../actions/TodoAction");

var TodoApp = React.createClass({
	getInitialState: function(){
		return{todoItems:TodoStore.getTodoItems()};
	},
	componentDidMount: function(){
		TodoStore.addChangeListener(this.changeHandler);
	},
	componentWillUnmount: function(){
		TodoStore.removeChangerListener(this.changeHandler);
	},
	changeHandler: function(){
		this.setState({todoItems:TodoStore.getTodoItems()});
	},
	handleAddTodo: function(){
		var newTodo = React.findDOMNode(this.refs.txtTodo).value.trim();
		TodoAction.createTodo(newTodo);
		React.findDOMNode(this.refs.txtTodo).value = '';
	},
	render: function(){
		return(
			<div>
				<h1>Todo</h1>
				<input type='text' ref='txtTodo'/>
				<button onClick={this.handleAddTodo}>Add</button>
				<TodoAppList Items={this.state.todoItems}/>
			</div>
			);
	}
});

module.exports = TodoApp;