let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let AddTodo = require("AddTodo");


describe("AddTodo", () => {
    it("should exist", () => {
        expect(AddTodo).toExist();
    });

    it("should call onAddTodo prop with valid data", () => {
        let todoText = "check mail";
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(todoText);

    });

    it("should not call onAddTodo prop with invalid data", () => {
        let todoText = "";
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();

    });
});