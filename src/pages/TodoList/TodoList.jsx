import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import TodoItem from '../../components/TodoItem/TodoItem'
import { useNavigate } from 'react-router-dom'

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/todo/${id}`); // Navigate to todoform page with todo id as URL parameter
    };

    return (
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id} onClick={() => handleClick(todo.id)} className='flex m-10'>
                        <TodoItem id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
 {/*  */}