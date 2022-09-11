import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: JSON.parse(window.localStorage.getItem('tasks')) || [],
  error: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      if (!action.payload || action.payload === '') {
        state.error = 'Text null';
        return;
      }

      const newTask = {
        completed: false,
        task: action.payload,
        id: uuidv4(),
      };

      state.tasks.push(newTask);
      state.error = '';
      window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTasks: (state) => {
      window.localStorage.removeItem('tasks');
      state.tasks = [];
    },
    deleteCompletedTasks: (state) => {
      const tasks = state.tasks.filter((task) => task.completed !== true);
      state.tasks = tasks;
      window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    isCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.completed = !task.completed;

      window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { createTask, deleteTasks, isCompleted, deleteCompletedTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
