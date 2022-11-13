import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
    const [todos, setTodos] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    };

    return (
        <form id="form" onSubmit={submitForm}>
            <label htmlFor="todo">To do</label>
            <input type="text" id="todo" value={todos} onChange={(e) => setTodos(e.target.value)} />
            <input type="submit" />
        </form>
    );
};

export default AddNewTodo;