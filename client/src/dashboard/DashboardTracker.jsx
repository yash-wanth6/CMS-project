import React, { useState } from 'react'

export default function DashboardTracker() {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    const [totalTasks, setTotalTasks] = useState(0);
    const [finished, setFinished] = useState(0);

    function deleteTask(idx) {
        let newtasks = tasks.filter((value, index) => {
            if(value[1]) setFinished(finished-1);
            return index != idx;
        })
        setTasks(newtasks);
        setTotalTasks(totalTasks-1);
    }
    function finishTask(index) {
        
        
        setFinished(finished+1)
    }
    return (
        <>
            <h1>Hi yash,Track your progress</h1>
            <input type="text" name="" id="" value={value}
                placeholder="Enter your task"
                onChange={(e) => setValue(e.target.value)} />
            <button
                onClick={() => {
                    if (value.length != 0) {
                        setTasks([...tasks, [value,false]]);
                        setTotalTasks(totalTasks + 1);
                    }
                    else {
                        alert('Invalid task')
                    }
                    setValue('');
                }}>
                Add
            </button>
            {
                tasks.length == 0 ? <h1>Add some tasks</h1> : <h1></h1>
            }
            <ul>
                {
                    tasks.map((value, idx) => {
                        return (
                            <li key={idx}>
                                <span>{value[0]}</span>
                                <span><input type="checkbox" name="" id="" 
                                    onChange={()=>finishTask(idx)}    /></span>
                                <span><button onClick={()=>deleteTask(idx)}>Delete</button></span>
                            </li>
                        )
                    })
                }
            </ul>
            <h1>{totalTasks}{finished}</h1>
        </>
    )
}
