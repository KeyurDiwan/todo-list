import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm'
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })

    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : '  todo-row'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons" style={{
                display: "flex",

            }}>
                <h6
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                > delete </h6>
                <h5> ----------- </h5>
                <h6
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                > edit </h6>
            </div>

        </div>
    ))
}

export default Todo
