import React from 'react';
import { useDispatch } from 'react-redux';
import { isCompleted } from '../../reducers/tasksReducer';
import { CheckCompleted, TaskBox } from './TaskElements';

function Task({ text, completed, id }) {
  const dispatch = useDispatch()

  const onCompleted = () => {
    dispatch(isCompleted(id));
  };

  return (
    <TaskBox completed={completed}>
      <CheckCompleted
        type="checkbox"
        defaultChecked={completed}
        onClick={onCompleted}
      />
      <p>{text}</p>
    </TaskBox>
  );
}

export default Task;
