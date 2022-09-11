import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ContainerTasks } from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';

function App() {
  const error = useSelector((state) => state.tasks.error);

  return (
    <Container className="App">
      <Header />
      <ContainerTasks>
        {error ? <ErrorMessage error={error} /> : null}
        <NewTask />
        <Tasks />
      </ContainerTasks>
    </Container>
  );
}

export default App;
