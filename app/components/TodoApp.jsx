let React = require("react");
let TodoList = require("TodoList");
let AddTodo = require("AddTodo");
let TodoSearch = require("TodoSearch");
let uuid = require("node-uuid");

let TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    text: "First todo",
                    completed: false
                },
                {
                    id: uuid(),
                    text: "Second todo",
                    completed: true
                },
                {
                    id: uuid(),
                    text: "Third todo",
                    completed: false
                },
                {
                    id: uuid(),
                    text: "Fourth todo",
                    completed: true
                }
            ]
        };

    },
    handleAddTodo: function(text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text,
                   completed: false
               }
           ]
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map(function(todo) {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;