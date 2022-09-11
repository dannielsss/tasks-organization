import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../../reducers/tasksReducer';
import { Input } from './NewTaskElements';

function NewTask() {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createTask(task));

    setTask('');
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input
        type="text"
        name="task"
        placeholder="Create a new task"
        autoComplete="off"
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
}

export default NewTask;
