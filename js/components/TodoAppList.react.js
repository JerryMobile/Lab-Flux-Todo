var React = require("react");

var Todolist = React.createClass({
	render: function(){
		function itemElement(inTodoText,index){
			return <li key={index}>{inTodoText}</li>
		};
		return(<ul>{this.props.Items.map(itemElement)}</ul>);
	}
});

module.exports = Todolist;