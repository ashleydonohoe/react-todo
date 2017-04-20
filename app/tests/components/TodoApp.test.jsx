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

        // expect createdAt to be set to a number
        expect(todoApp.state.todos[0].createdAt).toBeA("number");
    });

    it("should toggle completed value when handleToggle called", () => {
        let todoData = {
            id: 11,
            text: "Test features",
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);

        // When task completed, the completedAt is set to a number
        expect(todoApp.state.todos[0].completedAt).toBeA("number");
    });

    it("should reset completedAt value to undefined when handleToggle called on completed task", () => {
        let todoData = {
            id: 11,
            text: "Test features",
            completed: true,
            createdAt: 0,
            completedAt: 1
        };

        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(true);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(false);

        // When task not completed, the completedAt is set to undefined
        expect(todoApp.state.todos[0].completedAt).toNotExist();

    });
});