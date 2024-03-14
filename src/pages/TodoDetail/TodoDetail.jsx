import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTodo } from '../../redux/slices/todoSlice';
function TodoDetail() {
    const { id } = useParams();
    const todo = useSelector((state) => state.todos.find(todo => todo.id === parseInt(id)));
    const [title, setTitle] = useState(todo?.title || '');
    const [description, setDescription] = useState(todo?.description || '');
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateTodo({ id: parseInt(id), title, description }));
    };

    // if (!todo) {
    //     return <div>No todo found with id {id}</div>;
    // }

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default TodoDetail


