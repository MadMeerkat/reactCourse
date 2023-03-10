import { useReducer, useEffect } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};


export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);



	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: "[TODO] add",
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		dispatch({
			type: "[TODO] remove",
			payload: id,
		});

	};

	const handleToggleTodo = (id) => {
		dispatch({
			type: "[TODO] done",
			payload: id,
		});
	};
	



    return {
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todos,
		pendingTodos: todos.filter(todo => !todo.done).length,
		doneTodos: todos.filter(todo => todo.done).length,
    }
}
