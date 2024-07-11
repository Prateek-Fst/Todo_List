export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
});

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
});

export const editTask = (id, newTask) => ({
    type: 'EDIT_TASK',
    payload: { id, newTask },
});

export const toggleTaskCompletion = (id) => ({
    type: 'TOGGLE_TASK_COMPLETION',
    payload: id,
});
