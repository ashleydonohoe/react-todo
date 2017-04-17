let React = require("react");
let TodoList = require("TodoList");
let AddTodo = require("AddTodo");
let TodoSearch = require("TodoSearch");

let TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: 1,
                    text: "First todo"
                },
                {
                    id: 2,
                    text: "Second todo"
                },
                {
                    id: 3,
                    text: "Third todo"
                },
                {
                    id: 4,
                    text: "Fourth todo"
                }
            ]
        };

    },
    handleAddTodo: function(text) {
        alert("New Todo " + text);
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;