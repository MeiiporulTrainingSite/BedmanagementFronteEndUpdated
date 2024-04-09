// import React, { useState, useEffect } from 'react';
// import { ResponsiveLine } from '@nivo/line';

// const BedTurnaroundTimeDashboard = () => {
//     const [bedTurnaroundTime, setBedTurnaroundTime] = useState([]);

//     useEffect(() => {
//         // Fetch data from API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:9000/bedturnaroundtimes');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setBedTurnaroundTime(data.bedTurnaroundTime);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };



//         fetchData();
//     }, []);

//     return (
//         <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
//             {/* <h2>Bed Turnaround Time</h2> */}
//             <div style={{ height: '400px' }}>
//                 <ResponsiveLine
//                     data={[
//                         {
//                             id: 'Turnaround Time',
//                             data: bedTurnaroundTime.map(({ date, turnaroundTime }) => ({
//                                 x: date,
//                                 y: turnaroundTime
//                             }))
//                         }
//                     ]}
//                     margin={{ top: 50, right: 150, bottom: 70, left: 70 }}
                 
//                     xScale={{ type: 'time', format: '%Y-%m-%d' }}
//                     xFormat="time:%Y-%m-%d"
//                     yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
//                     axisBottom={{
//                         legend: 'Date',
//                         legendOffset: 36,
//                         legendPosition: 'middle'
//                     }}

                     
                  
//                 //   axisBottom={{
//                 //     legend: 'Date',
//                 //     legendOffset: 36,
//                 //     legendPosition: 'middle',
//                 //     tickValues: 'every 1 month',
//                 //     tickFormat: (value) => {
//                 //         const date = new Date(value);
//                 //         const day = date.getDate();
//                 //         const month = date.getMonth() + 1; // Months are zero-indexed
//                 //         const year = date.getFullYear();
//                 //         return `${day}-${month}-${year}`;
//                 //     }
//                 // }}
                
                  
//                     axisLeft={{
//                         legend: 'Turnaround Time (minutes)',
//                         legendOffset: -60,
//                         legendPosition: 'middle'
//                     }}
//                     curve="natural"
//                     enablePointLabel={true}
//                     pointSize={10}
//                     pointBorderWidth={2}
//                     pointBorderColor={{ from: 'color', modifiers: [] }}
//                     pointLabelYOffset={-12}
//                     useMesh={true}
//                     colors={{ scheme: 'category10' }}
//                     legends={[
//                         {
//                             anchor: 'bottom-right',
//                             direction: 'row',
//                             justify: false,
//                             translateX: -100,
//                             translateY: 50,
//                             itemsSpacing: 0,
//                             itemDirection: 'left-to-right',
//                             itemWidth: 80,
//                             itemHeight: 20,
//                             itemOpacity: 0.75,
//                             symbolSize: 12,
//                             symbolShape: 'circle',
//                             symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                             effects: [
//                                 {
//                                     on: 'hover',
//                                     style: {
//                                         itemBackground: 'rgba(0, 0, 0, .03)',
//                                         itemOpacity: 1
//                                     }
//                                 }
//                             ]
//                         }
//                     ]}
//                 />
//             </div>
//         </div>
//     );
// };

// export default BedTurnaroundTimeDashboard;
import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

const BedTurnaroundTimeDashboard = () => {
    const [bedTurnaroundTime, setBedTurnaroundTime] = useState([]);

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/bedturnaroundtimes');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBedTurnaroundTime(data.bedTurnaroundTime);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
            <div style={{ height: '400px' }}>
                <ResponsiveLine
                    data={[
                        {
                            id: 'Turnaround Time',
                            data: bedTurnaroundTime.map(({ ward, date, turnaroundTime }) => ({
                                x: `${ward} - ${date}`,
                                y: turnaroundTime
                            }))
                        }
                    ]}
                    margin={{ top: 50, right: 150, bottom: 70, left: 70 }}
                    xScale={{ type: 'point' }}
                    xFormat={(value) => value.split(' - ')[0]} // Extract ward name
                    yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                    axisBottom={{
                        legend: 'Ward - Date',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        legend: 'Turnaround Time (minutes)',
                        legendOffset: -60,
                        legendPosition: 'middle'
                    }}
                    curve="natural"
                    enablePointLabel={true}
                    pointSize={10}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'color', modifiers: [] }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    colors={{ scheme: 'category10' }}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            justify: false,
                            translateX: -100,
                            translateY: 50,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default BedTurnaroundTimeDashboard;
