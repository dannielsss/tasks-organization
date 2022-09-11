import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Footer,
  FooterItem,
  FooterItemButton,
  TasksBox,
} from './TasksElements';

import { deleteTasks, deleteCompletedTasks } from '../../reducers/tasksReducer';
import Task from '../Task';

function Tasks() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <TasksBox>
      {tasks.map((task) => (
        <Task
          text={task.task}
          completed={task.completed}
          key={task.id}
          id={task.id}
        />
      ))}
      <Footer>
        <FooterItem>{tasks.length} items left</FooterItem>
        <FooterItemButton onClick={() => dispatch(deleteCompletedTasks())}>
          Clear Completed
        </FooterItemButton>
        <FooterItemButton onClick={() => dispatch(deleteTasks())}>
          Clear All
        </FooterItemButton>
      </Footer>
    </TasksBox>
  );
}

export default Tasks;
