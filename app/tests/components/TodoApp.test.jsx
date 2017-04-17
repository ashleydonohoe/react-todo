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
});