import React from 'react';

import ChartBar from './ChartBars';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmax = Math.max(...dataPointValues);
    return (
    <div className='chart'>
        { props.dataPoints.map(dataPoint => 
            <ChartBar
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalmax}
                label={dataPoint.label}
            />
        )
        }
    </div>
    )
}

export default Chart;