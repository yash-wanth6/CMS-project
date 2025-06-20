import React, { useEffect, useRef, useState, useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import AuthContext from '../context/AuthContext';
import userService from '../services/UserService';
import { useNavigate } from 'react-router';

export default function DashboardCharts() {
    const navigate = useNavigate();
    const { email } = useContext(AuthContext);
    const datas = userService.getDatas(email)
    const days = Object.keys(datas);
    const values = Object.values(datas);
    const { totalTasks, finished, setIsAuth } = useContext(AuthContext);
    const chartContainerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);


    useEffect(() => {
        if (totalTasks > 0) {
            const data = getFormattedDateOnly();
            const value = Math.round((finished / totalTasks) * 100);
            // datas is now an object: { [day]: value }
            if (datas[data]) {
                datas[data] = value; // Update existing day
            } else {
                datas[data] = value; // Insert new day
            }
            userService.setDatasAndValues(email, datas);
        } else {
            userService.setDatasAndValues(email, datas);
        }
        console.log(datas);
    }, [totalTasks, finished]);

    useEffect(() => {
        if (chartContainerRef.current) {
            setContainerWidth(chartContainerRef.current.offsetWidth);
        }
    }, [days.length]);

    function getFormattedDateOnly() {
        const now = new Date();
        const month = now.toLocaleString('en-US', { month: 'short' }); // e.g., 'Jun'
        const day = now.getDate();
        return `${month} ${day}`;
    }

    // Calculate bar width in px: at most 10% of container, or less if more bars
    const maxBarWidthPx = containerWidth * 0.10;
    const barCount = days && days.length > 0 ? days.length : 1;
    const barWidth = Math.min(maxBarWidthPx, containerWidth / barCount);

    return (
        <div className=" mx-auto flex-col justify-center">
            {days.length > 0 ? (
                <div ref={chartContainerRef} style={{ width: '75vw', margin: '0 auto' }}>
                    <BarChart
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: Array.isArray(days) && days.length > 0 ? days : [''],
                                label: 'Days'
                            },
                        ]}
                        yAxis={[
                            {
                                label: 'Progress',
                                min: 0,
                                max: 100,
                            }
                        ]}
                        series={[
                            {
                                data: Array.isArray(values) && values.length > 0 ? values : [0],
                                barWidth: barWidth || undefined,
                            },
                        ]}
                        height={600}
                        width={undefined}
                    />
                </div>
            ) : (
                <h1 className="text-center text-xl font-semibold text-gray-600 mt-10">
                    No progress included. Please include progress in tracker to show charts.
                </h1>
            )}
            <button className="float-right mx-10 my-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition h-[100%]"
                onClick={() => navigate('/dashboard/tracker')}>
                Go to Tracker
            </button>
        </div>
    )
}
