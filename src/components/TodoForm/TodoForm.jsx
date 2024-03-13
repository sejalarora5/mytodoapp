import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice';
import styles from './styles.module.css'
export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({title: title, description: description}))
        console.log('i am called', todos)
        setTitle('');
        setDescription('')
    }
  return (
    <form  className={styles.formContainer} onSubmit={handleSubmit}>
        <p className={styles.title}>Todo Form</p>
        <input type='text' placeholder='title'  className={styles.inputField} value={title} onChange={(e)=> {
            setTitle(e.target.value)
        }}/>
        <textarea placeholder='description'  className={styles.inputField}  value={description} onChange={(e)=> {
            setDescription(e.target.value)
        }}/>
        <button type="submit" className={styles.button}>Submit</button>
    </form>
  )
}
