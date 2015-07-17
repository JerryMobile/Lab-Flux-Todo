var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';
var todoItems = ["Do something"];
 
function createTodo(inTodoText){
	todoItems = todoItems.concat(inTodoText);
}


var TodoStore = assign({},EventEmitter.prototype,{
	getTodoItems: function(){
		return todoItems;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}
});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case "CreateTodo":
			createTodo(action.text);
			TodoStore.emitChange();
			break;
		
		default:
	}
});


module.exports = TodoStore;