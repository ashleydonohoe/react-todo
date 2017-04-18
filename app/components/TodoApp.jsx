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
                    text: "First todo"
                },
                {
                    id: uuid(),
                    text: "Second todo"
                },
                {
                    id: uuid(),
                    text: "Third todo"
                },
                {
                    id: uuid(),
                    text: "Fourth todo"
                }
            ]
        };

    },
    handleAddTodo: function(text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid() ,
                   text: text
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