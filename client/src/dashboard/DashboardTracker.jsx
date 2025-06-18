import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function DashboardTracker() {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    const {totalTasks, setTotalTasks,finished, setFinished, isAuth, setIsAuth} = useContext(AuthContext);

    function deleteTask(del_index) {
        const isFinished = tasks[del_index][1];
        let newtask = tasks.filter((value, index) => index !== del_index);
        setTasks(newtask);
        setTotalTasks(totalTasks - 1);
        if (isFinished) {
            setFinished(finished - 1);
        }
    }
    function finishTask(change_index) {
        let newtask = tasks.map((value, index) => {
            if (index === change_index) {
                return [value[0], !value[1]];
            }
            return value;
        });
        const newFinished = newtask.filter(task => task[1]).length;
        setTasks(newtask);
        setFinished(newFinished);
    }
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="w-3/5 md:w-2/3 lg:w-3/5 bg-white rounded-xl shadow-2xl shadow-gray-300 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Hi yash, Track your progress</h1>
                <div className="flex gap-4 mb-6">
                    <input
                        type="text"
                        value={value}
                        placeholder="Enter your task"
                        onChange={(e) => setValue(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        className="bg-gray-400 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md"
                        onClick={() => {
                            if (value.length !== 0) {
                                setTasks([...tasks, [value, false]]);
                                setTotalTasks(totalTasks + 1);
                            } else {
                                alert('Invalid task');
                            }
                            setValue('');
                        }}
                    >
                        Add
                    </button>
                </div>
                {tasks.length === 0 ? (
                    <h2 className="text-gray-400 text-xl text-center mb-4">Add some tasks</h2>
                ) : null}
                <ul className="space-y-4 mb-8">
                    {tasks?.map((task, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 shadow"
                        >
                            <span className={`text-gray-800 ${task[1] ? 'line-through opacity-60' : ''}`}>
                                {task[0]}
                            </span>
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={task[1]}
                                    onChange={() => finishTask(index)}
                                    className="accent-blue-700 w-5 h-5"
                                />
                                <button
                                    className="bg-gray-400 hover:bg-gray-700 text-white px-3 py-1 rounded shadow-md"
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md w-full">
                    <Link to="/dashboard/charts" className="block w-full h-full text-center text-white">
                        Track Progress
                    </Link>
                </button>
            </div>
        </div>
    )
}
