'use client'
import { timelineContext } from '@/context/TimelineBtnsProvider';
import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPieChart = ({ isAnimationActive = true }) => {
    const {timelines} = useContext(timelineContext);

    const totalCall = timelines.filter(item=> item.action === 'Call').length;
    // console.log(totalCall, 'totalCall');
    const totalText = timelines.filter(item=> item.action === 'Text').length;
    const totalVideo = timelines.filter(item=> item.action === 'Video').length;

    const data = [
        { name: "Call", value: totalCall, fill: "#244D3F" },
        { name: "Text", value: totalText, fill: "#7F37F5" },
        { name: "Video", value: totalVideo, fill: "#37A163" },
    ];

    return ( 
        <div className='mt-4'>
            {totalCall + totalText + totalVideo === 0 ? 
            <h2 className='text-3xl text-center'>No Data Found in Timeline</h2> 
            :
            <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={isAnimationActive}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>
            }
        </div>
     );
}
 
export default StatsPieChart;