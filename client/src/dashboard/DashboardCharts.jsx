import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function DashboardCharts() {
    const data = ['bar A', 'bar B', 'bar C','a'];
    const values = [2, 5, 3,7];
    return (
        <>
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: data,
                        label: 'Days'
                    },
                ]}
                yAxis={[
                    {
                        label: 'Progress'
                    }
                ]
                }
                series={[
                    {
                        data: values,
                    },
                ]}
                height={400}
                width={600}
            />
        </>
    )
}
