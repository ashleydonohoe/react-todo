let React = require("react");

let AddTodo = React.createClass({
    onAddTodo: function(e) {
        e.preventDefault();
        let todoText = this.refs.todo.value;
        if(todoText.length > 0) {
            this.refs.todo.value = "";
            this.props.handleAddTodo(todoText);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onAddTodo}>
                    <input type="text" ref="todo" placeholder="Add a new todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;