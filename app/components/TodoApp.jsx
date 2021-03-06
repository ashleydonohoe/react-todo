let React = require("react");
let TodoList = require("TodoList");
let AddTodo = require("AddTodo");
let TodoSearch = require("TodoSearch");
let uuid = require("node-uuid");
let moment = require("moment");
let TodoAPI = require("TodoAPI");

let TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: "",
            todos: TodoAPI.getTodos()
        };

    },
    componentDidUpdate:function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text,
                   completed: false,
                   createdAt: moment().unix(),
                   completedAt: undefined
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
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo handleAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;