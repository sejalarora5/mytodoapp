import React from 'react'
import styles from './styles.module.css'
type props = {
    id: number,
    title: string, 
    description: string, 
    completed: boolean
}
function TodoItem({ id, title, description, completed }: props) {
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className={styles.spanStyle} key={id}>
                    <input type='checkbox' className='mr-3' checked={completed}></input>
                    {title}
                </span>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem