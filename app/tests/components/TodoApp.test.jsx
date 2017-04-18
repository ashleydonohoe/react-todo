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
});