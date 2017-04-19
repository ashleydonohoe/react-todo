let expect = require("expect");
let TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {

    beforeEach(() => {
       localStorage.removeItem("todos");
    });

    it("should exist", () => {
       expect(TodoAPI).toExist();
    });

    describe("set todos", () => {
        it("should set valid todos array", () => {
            let todos = [{
                id: 1,
                text: "test",
                completed: false
            }];

            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem("todos"));

            expect(actualTodos).toEqual(todos);
        });

        it("should not set invalid todos array", () => {
            let badTados = {a: "b"};
            TodoAPI.setTodos(badTados);

            expect(localStorage.getItem("todos")).toBe(null);
        });

    });

    describe("get todos", () => {
        it("should return empty array for bad localStorage data", () => {
            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it("should return array of todos for good localStorage data", () => {
            let todos = [{
                id: 1,
                text: "test",
                completed: false
            }];

            localStorage.setItem("todos", JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);


        });

    });
});