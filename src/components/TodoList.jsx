import React, { useState, useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [ todos, setTodos ] = useState([
         { text: 'Pay bills', id: 1 },
         { text: 'Do your homework', id: 2 },
         { text: 'Fees the dog', id: 3 }
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random() }
        ]);
    };

    useEffect(() => {
        console.log('use effect are working', todos);
    }, [todos]);

    useEffect(() => {
        console.log('UseEfferHook', count);
    }, [count]);

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo={addTodo} />
            <button onClick={(e) => setCount(count + 1)}>Score: {count} </button>
        </div>
    );
};

export default TodoList;