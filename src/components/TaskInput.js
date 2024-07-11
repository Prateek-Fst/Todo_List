import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const timestamp = Date.now();
    const currentDate = new Date(timestamp);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
            localStorage.setItem(formattedDate, task);
        }
    };
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <TextField
                label="New Task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
                sx={{ ml: 2 }}
                size='large'
            >
                Add Task
            </Button>
        </Box>
    );
};
export default TaskInput;
