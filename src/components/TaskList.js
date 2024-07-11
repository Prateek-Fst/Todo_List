import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/actions';
import { List, ListItem, ListItemText, IconButton, TextField, Button, Box } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [currentTask, setCurrentTask] = useState('');
    const handleEditTask = (id, task) => {
        setIsEditing(id);
        setCurrentTask(task);
    };
    const handleSaveTask = (id) => {
        dispatch(editTask(id, currentTask));
        setIsEditing(null);
        setCurrentTask('');
    };
    return (
        <List>
            {tasks.map((task) => (
                <ListItem
                    key={task.id}
                    sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    secondaryAction={
                        <>
                            <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => handleEditTask(task.id, task.task)}
                            >
                                <Edit />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => dispatch(deleteTask(task.id))}
                            >
                                <Delete />
                            </IconButton>
                        </>
                    }
                >
                    {isEditing === task.id ? (
                        <Box display="flex" alignItems="center">
                            <TextField
                                variant="outlined"
                                value={currentTask}
                                onChange={(e) => setCurrentTask(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSaveTask(task.id)}
                                sx={{ mr: 2 }}
                            />
                            <IconButton
                                edge="end"
                                aria-label="save"
                                onClick={() => handleSaveTask(task.id)}
                            >
                                <Save />
                            </IconButton>
                        </Box>
                    ) : (
                        <ListItemText
                            primary={task.task}
                            onClick={() => dispatch(toggleTaskCompletion(task.id))}
                        />
                    )}
                </ListItem>
            ))}
        </List>
    );
};
export default TaskList;
