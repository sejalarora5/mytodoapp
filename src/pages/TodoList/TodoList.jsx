import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../../components/TodoItem/TodoItem'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/todo/${id}`); 
    };

    return (
        <div className='flex bg-[#000000] m-10'>
            <ul className={styles.ul}>
                {
                    todos.map(todo => (
                        <li key={todo.id} onClick={() => handleClick(todo.id)} className='m-10'>
                            <TodoItem id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
