import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import TodoItem from '../../components/TodoItem/TodoItem'

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    return (
        <div>
        <p>hdhdh</p>
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
                    ))
                }
            </ul>
        </div>
    )
}
 {/*  */}