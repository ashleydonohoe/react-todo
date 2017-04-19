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

    describe("filterTodos", () => {
        let todos = [
            {
            id: 1,
            text: "Some text here",
            completed: true
            },
            {
                id: 2,
                text: "Other text here",
                completed: false
            },
            {
                id: 3,
                text: "Some text here",
                completed: true
            },
        ];

        it("should return all items if showCompleted is true", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodos.length).toBe(3);
        });

        it("should return only incomplete todos when showCompleted is false", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, "");
            expect(filteredTodos.length).toBe(1);
        });

        it("should sort by completed status", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodos[0].completed).toBe(false);
        });

        it("should show all todos if searchtext is empty and showCompleted is true", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodos.length).toBe(3);
        });

        // provide search text and return only todos that match
        it("should show only matching todos if searchText has search term and showCompleted is true", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, "other");

            expect(filteredTodos.length).toBe(1);
        });
    });
});