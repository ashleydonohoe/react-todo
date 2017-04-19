let $ = require("jquery");

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        let stringTodos = localStorage.getItem("todos");
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e.message);
        }

        return $.isArray(todos) ? todos : [];

    }
};