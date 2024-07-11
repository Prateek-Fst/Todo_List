import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          To-Do List
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
