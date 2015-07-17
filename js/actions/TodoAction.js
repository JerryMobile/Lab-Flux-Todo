var AppDispatcher = require("../dispatcher/AppDispatcher");

var TodoAction = {
	createTodo: function(inTodoText){
		AppDispatcher.dispatch({
			actionType: "CreateTodo",
			text: inTodoText
		});
	}
};

module.exports = TodoAction;