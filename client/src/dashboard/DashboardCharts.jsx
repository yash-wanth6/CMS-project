import React, { useEffect, useState, useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import AuthContext from '../context/AuthContext';
import userService from '../services/UserService';

export default function DashboardCharts() {
    const { email } = useContext(AuthContext);
    const datas = userService.getDatas(email);
    const values = userService.getValues(email);
    const { totalTasks, finished, setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        if (0 < totalTasks) {
            const data = getFormattedDateTime();
            const value = Math.round((finished / totalTasks) * 100);
            datas.push(data);
            values.push(value);
            userService.setDatasAndValues(email, datas, values);
        } else {
            datas.length = 0;
            values.length = 0;
            userService.setDatasAndValues(email, datas, values);
        }
    }, [totalTasks, finished]);

    function getFormattedDateTime() {
        const now = new Date();
        const month = now.toLocaleString('en-US', { month: 'short' }); // e.g., 'May'
        const day = now.getDate();
        let hour = now.getHours();
        const minute = now.getMinutes().toString().padStart(2, '0');
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        hour = hour === 0 ? 12 : hour;
        return `${month} ${day} ${hour}:${minute}${ampm}`;
    }

    return (
        <div className="w-[75vw] mx-auto flex justify-center">
            {datas.length > 0 ? (
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: datas,
                            label: 'Days'
                        },
                    ]}
                    yAxis={[
                        {
                            label: 'Progress'
                        }
                    ]}
                    series={[
                        {
                            data: values,
                        },
                    ]}
                    height={600}
                    width={undefined}
                />
            ) : (
                <h1 className="text-center text-xl font-semibold text-gray-600 mt-10">
                    No progress included. Please include progress in tracker to show charts.
                </h1>
            )}
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Go to Tracker
            </button>
        </div>
    )
}
