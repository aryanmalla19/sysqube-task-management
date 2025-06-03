import React, { useState, useEffect } from 'react';
import useCreateTask from '../hooks/useCreateTask';
import toast from 'react-hot-toast';
import useUpdateTask from '../hooks/useUpdateTask';
import useDeleteTask from '../hooks/useDeleteTask';

function Modal({ onClose, taskData }) {
    const { mutate: createTask  } = useCreateTask();
    const { mutate: updateTask  } = useUpdateTask();
    const { mutate: deleteTask  } = useDeleteTask();
    const [form, setForm] = useState({
        title: '',
        description: '',
        deadline: '',
        priority: 'low',
        status: 'todo'
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (taskData) {
            setForm(taskData);
        }
    }, [taskData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors({});
        if(!taskData){
            createTask(form, {
                onSuccess: () => {
                    toast.success('Task created!');
                    onClose();
                },
                onError: (error) => {
                    toast.error('Failed to save task.');
                    if (error.response?.status === 422) {
                        setFormErrors(error.response.data.errors);
                    }
                }
            });
        }else{
            updateTask({
                id:taskData.id,
                updatedTask: form
            }, {
                onSuccess: () => {
                    toast.success('Task updated!');
                    onClose();
                },
                onError: (error) => {
                    toast.error('Failed to save task.');
                    if (error.response?.status === 422) {
                        setFormErrors(error.response.data.errors);
                    }
                }
            })
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteTask(taskData.id, {
                onSuccess: () => {
                    toast.success('Task deleted!');
                    onClose();
                },
                onError: () => {
                    toast.error('Failed to delete task.');
                }
            });
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white w-[90vw] md:w-[50vw] rounded-md p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{taskData ? 'Edit Task' : 'Create Task'}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl font-bold">×</button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter a title"
                            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                        />
                          {formErrors.title && <p className="text-red-500 text-xs mt-1">{formErrors.title[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Enter a description"
                            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                        />
                          {formErrors.description && <p className="text-red-500 text-xs mt-1">{formErrors.description[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                        <input
                            type="datetime-local"
                            name="deadline"
                            value={form.deadline}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                        />
                          {formErrors.deadline && <p className="text-red-500 text-xs mt-1">{formErrors.deadline[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                        <select
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                          {formErrors.priority && <p className="text-red-500 text-xs mt-1">{formErrors.priority[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                          {formErrors.status && <p className="text-red-500 text-xs mt-1">{formErrors.status[0]}</p>}
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                       
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded"
                        >
                            Cancel
                        </button>
                         {taskData ? <button
                            type="button"
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 text-sm rounded"
                        >
                            Delete
                        </button>: ''}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                            {taskData ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
