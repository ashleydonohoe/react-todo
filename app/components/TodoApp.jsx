let React = require("react");
let TodoList = require("TodoList");

let TodoApp = React.createClass({
    getInitialState: function() {
        return {
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
    render: function () {
        let {todos} = this.state;


        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }

});

module.exports = TodoApp;