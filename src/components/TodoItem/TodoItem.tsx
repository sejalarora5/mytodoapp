import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css'
import { deleteTodo, toggleComplete } from '../../redux/slices/todoSlice';
type props = {
    id: number,
    title: string, 
    description: string, 
    completed: boolean
}
function TodoItem({ id, title, description, completed }: props) {
    const dispatch = useDispatch();
    const handleCompleteToggle = () => {
		dispatch(toggleComplete({ id: id, completed: !completed }));
	}
    const handleDeleteTodo = () => {
		dispatch(deleteTodo({ id: id}));
	}
    return (
        <li className={`listItem ${completed ? 'completed' : ''}`}>
            <div className={styles.container}>
                <span className={styles.spanStyle} key={id}>
                    <input type='checkbox' className={styles.inputField} checked={completed} onChange={handleCompleteToggle}/>
                    {title}
                </span>
                <button className='btn btn-secondary' onClick={handleDeleteTodo}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem