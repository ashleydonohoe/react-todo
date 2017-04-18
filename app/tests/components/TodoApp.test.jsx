let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let TodoApp = require("TodoApp");

describe("TodoApp", () => {
    it("should exist", () => {
        expect(TodoApp).toExist();
    });

    it("should add a new todo item to todos state on handleAddTodo", () => {
        let todoText = "Test text";
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
           todos: []
        });

        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it("should toggle completed value when handleToggle called", () => {
        let todoData = {
            id: 11,
            text: "Test features",
            completed: false
        };

        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);

    });
});