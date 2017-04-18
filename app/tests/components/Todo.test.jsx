let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let Todo = require("Todo");

describe("Todo", () => {
    it("should exist", () => {
        expect(Todo).toExist();
    });

    it("should call onToggle prop with id on click", () => {
        let todoData = {
            id: 199,
            text: "test text",
            completed: true
        };

        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find("input")[0]);

        expect(spy).toHaveBeenCalledWith(199);

    });
});