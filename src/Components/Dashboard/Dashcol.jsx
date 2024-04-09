// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Typography from "@mui/material/Typography";
// import { ResponsiveBar } from '@nivo/bar';

// const Dashboardmort = () => {
//   const [wardStatistics, setWardStatistics] = useState([]);

//   useEffect(() => {
//     const fetchWardStatistics = async () => {
//       try {
//         const wardIds = ['Ward A1', 'Ward B1'];
//         const statisticsPromises = wardIds.map(async wardId => {
//           const response = await axios.get(`http://localhost:9000/${encodeURIComponent(wardId)}/statistics`);
//           return {
//             wardId: response.data.wardId,
//             infectionRate: parseFloat(response.data.infectionRate), // Convert to number
//             mortalityRate: parseFloat(response.data.mortalityRate), // Convert to number
//             timeInterval: response.data.timeInterval
//           };
//         });

//         const wardStatisticsData = await Promise.all(statisticsPromises);
//         setWardStatistics(wardStatisticsData);
//       } catch (error) {
//         console.error('Error fetching ward statistics:', error);
//       }
//     };

//     fetchWardStatistics();
//   }, []);

//   return (
//     <div>
//       <h2>Clinical Outcome Comparison Dashboard</h2>
//       <Typography 
//   variant="h6" 
//   style={{ 
//     textAlign: 'center', 
//     fontFamily: "Montserrat", 
//     fontSize: "20px",
//     whiteSpace: "nowrap", // Prevent text wrapping
//     textOverflow: "ellipsis",// Add ellipsis for overflowed text
//     marginLeft:"70px",
//     marginBottom: '20px'
//   }}
// >
//   The bar chart showing metrics like mortality rate and infection rate for each ward.
// </Typography>
//       <div style={{
//         height: "500px", // Adjusted height to make it scrollable
//         width: "800px", // Adjusted width
//         background: "#ffffff", // Changed background to white
//         borderRadius: "10px", // Reduced border radius
//         boxShadow: "5px 10px 6px rgba(0, 0, 0, 0.1)", // Adjusted box shadow
//         marginLeft: "20px",
//         marginTop: "40px",
//         overflowY: "auto", // Added overflow for vertical scrolling
//       }}>
//         <ResponsiveBar
//           data={wardStatistics}
//           keys={['infectionRate', 'mortalityRate']}
//           indexBy={d => `${d.wardId} ${d.timeInterval}`} // Combine wardId and timeInterval
//           margin={{ top: 50, right: 130, bottom: 85, left: 60 }}
//           padding={0.3}
//           colors={{ scheme: 'nivo' }}
//           borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//           axisTop={null}
//           axisRight={null}
//           axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: -45,
//             legend: 'Ward - Time Interval',
//             legendPosition: 'middle',
//             legendOffset: 32,
//           }}
//           axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'Rate',
//             legendPosition: 'middle',
//             legendOffset: -40,
//           }}
//           labelSkipWidth={12}
//           labelSkipHeight={12}
//           labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//           legends={[
//             {
//               dataFrom: 'keys',
//               anchor: 'bottom-right',
//               direction: 'column',
//               justify: false,
//               translateX: 120,
//               translateY: 0,
//               itemsSpacing: 2,
//               itemWidth: 100,
//               itemHeight: 20,
//               itemDirection: 'left-to-right',
//               itemOpacity: 0.85,
//               symbolSize: 20,
//               effects: [
//                 {
//                   on: 'hover',
//                   style: {
//                     itemOpacity: 1,
//                   },
//                 },
//               ],
//             },
//             {
//               anchor: 'top',
//               direction: 'row',
//               justify: false,
//               translateX: 0,
//               translateY: -40,
//               itemsSpacing: 5,
//               itemWidth: 200,
//               itemHeight: 20,
//               itemOpacity: 0.85,
//               symbolSize: 20,
//               symbolShape: 'circle',
//               itemTextColor: '#000',
//               effects: [
//                 {
//                   on: 'hover',
//                   style: {
//                     itemBackground: '#f7fafb',
//                     itemOpacity: 1,
//                   },
//                 },
//               ],
//             },
//           ]}
//           animate={true}
//           motionStiffness={90}
//           motionDamping={15}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboardmort;


// //Dashboardsan.jsx

// import React, { useState, useEffect } from 'react';
// import { ResponsiveSankey } from '@nivo/sankey';
// import Typography from "@mui/material/Typography";

// const Sankey = () => {
//   const [data, setData] = useState({ nodes: [], links: [] });

//   useEffect(() => {
//     fetch('http://localhost:9000/patientflow')
//       .then(response => response.json())
//       .then(responseData => {
//         console.log('Response data:', responseData);
//         const { patientFlow } = responseData;
//         const nodes = [...new Set(patientFlow.flatMap(item => [item.from, item.to]))].map(id => ({ id }));
//         const links = patientFlow.map(item => ({
//           source: item.from,
//           target: item.to,
//           value: item.value
//         }));
//         setData({ nodes, links });
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
  
//   return (
//     <div style={{ width: '800px', height: '600px', margin: 'auto', position: 'relative' }}>
//       <h2 style={{ marginTop:"40px"}}>Patient Flow Sankey Diagram</h2>
//       <Typography 
//   variant="h6" 
//   style={{ 
//     textAlign: 'center', 
//     fontFamily: "Montserrat", 
//     fontSize: "20px",
//     whiteSpace: "nowrap", // Prevent text wrapping
//     textOverflow: "ellipsis",// Add ellipsis for overflowed text
//     marginLeft:"1px",
//     marginBottom: '20px'
//   }}
// >
// The Sankey diagram displays a patient movement between different wards 
// </Typography>
//       {data.nodes.length > 0 && data.links.length > 0 && (
//         <>
//           <ResponsiveSankey
//             data={data}
//             margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
//             align="justify"
//             colors={{ scheme: 'category10' }}
//             nodeOpacity={1}
//             nodeThickness={18}
//             nodeInnerPadding={3}
//             nodeSpacing={24}
//             nodeBorderWidth={0}
//             nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
//             linkOpacity={0.5}
//             linkHoverOthersOpacity={0.1}
//             enableLinkGradient={true}
//             labelPosition="outside"
//             labelOrientation="vertical"
//             labelPadding={16}
//             labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
//             animate={true}
//             motionStiffness={140}
//             motionDamping={13}
//             nodeLabel={node => (
//               <text x={node.x + node.width + 6} y={node.y + node.height / 2} textAnchor="start" dominantBaseline="middle" style={{ fill: 'black' }}>
//                 {node.id}
//               </text>
//             )}
//           />
//           {/* Legends */}
//           <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
//             <div style={{ display: 'inline-block', marginRight: '20px' }}>
//               <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'blue', marginRight: '5px' }}></div>
//               <span style={{ color: 'blue' }}>Current Ward ID</span>
//             </div>
//             <div style={{ display: 'inline-block' }}>
//               <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'orange', marginRight: '5px' }}></div>
//               <span style={{ color: 'orange' }}>Transfer Ward ID</span>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sankey;


// //Dash12.jsx
// import React, { useState, useEffect } from "react";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { ResponsiveLine } from "@nivo/line";

// const Trend = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:9000/paces");
//         const jsonData = await response.json();
//         setData(jsonData.patientCounts);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ width: '800px', height: '600px', margin: 'auto'}}>
//       <h2>Patient Census Dashboard</h2>
//       <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "Montserrat",fontsize:"18px" }}>
//       The line chart showing the patient census trend over a specified period
//     </Typography>
//       <div
//         style={{
//           padding: "5px",
//           height: "80px",
//           marginBottom: "90px",
//           width: "300%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginLeft: "3%",
//           marginTop: "-190px"
//         }}
//       ></div>
//       <Grid container spacing={1}>
//         <Grid item xs={2}>
//           <div
//             style={{
//               height: "450px",
//               width: "830px",
//               background: "#ffff",
//               borderRadius: "30px",
//               boxShadow: "5px 10px 6px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <ResponsiveLine
//               data={[
//                 {
//                   id: "Ward A",
//                   color: "hsl(49, 70%, 50%)",
//                   data: data
//                     .filter((item) => item.wardName === "Ward A")
//                     .map((item) => ({
//                       x: `${item.admissionDate}-${item.admissionTime}`,
//                       y: item.patientCount,
//                     })),
//                 },
//                 {
//                   id: "Ward B",
//                   color: "hsl(199, 70%, 50%)",
//                   data: data
//                     .filter((item) => item.wardName === "Ward B")
//                     .map((item) => ({
//                       x: `${item.admissionDate}-${item.admissionTime}`,
//                       y: item.patientCount,
//                     })),
//                 },
//               ]}
//               margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//               xScale={{ type: "point" }}
//               yScale={{
//                 type: "linear",
//                 min: "auto",
//                 max: "auto",
//               }}
//               yFormat=" >-.2f"
//               axisTop={null}
//               axisRight={null}
//               axisBottom={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: "Time and Date",
//                 legendOffset: 36,
//                 legendPosition: "middle",
//               }}
//               axisLeft={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: "Patient Count",
//                 legendOffset: -40,
//                 legendPosition: "middle",
//               }}
//               pointSize={10}
//               pointBorderWidth={2}
//               pointBorderColor={{ from: "color" }}
//               pointLabelYOffset={-12}
//               useMesh={true}
//               legends={[
//                 {
//                   anchor: "bottom-right",
//                   direction: "column",
//                   justify: false,
//                   translateX: 100,
//                   translateY: 0,
//                   itemsSpacing: 0,
//                   itemDirection: "left-to-right",
//                   itemWidth: 80,
//                   itemHeight: 20,
//                   itemOpacity: 0.75,
//                   symbolSize: 12,
//                   symbolShape: "circle",
//                   symbolBorderColor: "rgba(0, 0, 0, .5)",
//                   effects: [
//                     {
//                       on: "hover",
//                       style: {
//                         itemBackground: "rgba(0, 0, 0, .03)",
//                         itemOpacity: 1,
//                       },
//                     },
//                   ],
//                 },
//               ]}
//             />
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Trend;


// //DashboardCollage
// import React, { useEffect, useState } from "react";
// import { Grid } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Dmort from "./Dashboardmort";
// import Dsani from "./Dashboardsan";
// import Das12 from "./Dash12";
// import { ResponsiveLine } from '@nivo/line';
// import { ResponsiveBar } from '@nivo/bar';

// const Dashboard = () => {
//   // Step 1: Create state variables to store the data
//   const [data, setData] = useState([]);

//   // Step 2: Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:9000/patient');
//         const jsonData = await response.json();
//         // Update the state with fetched data
//         setData(jsonData.patientOutcomeMetrics);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ display: "flex", backgroundColor: "#f5f5f5", width: "100%" }}>
//       <div style={{ width: "100%", padding: "10px" }}>
//         {/* Place the common styles for all charts here */}

//         <Grid container spacing={3}>
//           <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"50px"}}>
//             <Dmort />
//           </Grid>
//           <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginLeft:"900px",marginTop:"-480px"}}>
//             <Dsani />
//           </Grid>
//           <Grid item xs={4.5} sx={{ height: "500px", width: "200px",marginTop:"220px" }}>
//             <Das12 />
//           </Grid>
//           <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"-590px", marginLeft:"980px"}}>
//             <div style={{ width: '45%', padding: '10px' }}>
//               <h2 style={{ whiteSpace: 'nowrap',textOverflow: 'ellipsis', marginTop:"100px", marginLeft:'-50px' }}>Mortality Rate</h2>
//               <Typography 
//                 variant="h6" 
//                 style={{ 
//                   textAlign: 'center', 
//                   fontFamily: "Montserrat", 
//                   fontSize: "20px",
//                   whiteSpace: "nowrap", // Prevent text wrapping
//                   textOverflow: "ellipsis",// Add ellipsis for overflowed text
//                   marginBottom: '10px',
//                   marginLeft:'80px'
//                 }}
//               >
//                 This chart displays the mortality rate.
//               </Typography>
//               <div
//                 style={{
//                   height: '500px',
//                   width: '600px',
//                   marginTop:"20px",
//                   background: '#ffff',
//                   borderRadius: '30px',
//                   boxShadow: '5px 10px 6px rgba(0, 0, 0, 0.2)',
//                 }}
//               >
//                 <ResponsiveLine
//                   data={[
//                     {
//                       id: 'Mortality Rate',
//                       color: 'hsl(49, 70%, 50%)',
//                       data: data.map((item, index) => ({
//                         x: new Date(item.date), // Assigning date as x value
//                         y: item.mortalityRate,
//                       })),
//                     },
//                   ]}
//                   margin={{ top: 70, right: 110, bottom: 50, left: 60 }}
//                   xScale={{ type: 'time', format: '%Y-%m-%d' }}
//                   yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
//                   axisBottom={{
//                     format: value => {
//                       const date = new Date(value);
//                       const day = date.getDate().toString().padStart(2, '0');
//                       const month = (date.getMonth() + 1).toString().padStart(2, '0');
//                       const year = date.getFullYear().toString();
//                       return `${day}-${month}-${year}`;
//                     },
//                   }}
//                   axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: 'Mortality Rate',
//                     legendOffset: -50,
//                     legendPosition: 'middle',
//                   }}
//                   pointSize={10}
//                   pointColor={{ theme: 'background' }}
//                   pointBorderWidth={2}
//                   pointBorderColor={{ from: 'Color' }}
//                   pointLabelYOffset={-12}
//                   useMesh={true}
//                   legends={[
//                     {
//                       anchor: 'bottom-right',
//                       direction: 'column',
//                       justify: false,
//                       translateX: 100,
//                       translateY: 0,
//                       itemsSpacing: 0,
//                       itemDirection: 'left-to-right',
//                       itemWidth: 140,
//                       itemHeight: 20,
//                       itemOpacity: 0.75,
//                       symbolSize: 12,
//                       symbolShape: 'circle',
//                       symbolBorderColor: 'rgba(0, 0, 0, 20%)',
//                       effects: [
//                         {
//                           on: 'hover',
//                           style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1,
//                           },
//                         },
//                       ],
//                     },
//                   ]}
//                 />
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"40px"}}>
//             <div style={{ width: '45%', padding: '10px' }}>
//               <h2 style={{ whiteSpace: 'nowrap',textOverflow: 'ellipsis', marginTop:"100px" }}>
//                 Readmission Rate and Avg Length of Stay Over Time
//               </h2>
//               <Typography 
//                 variant="h6" 
//                 style={{ 
//                   textAlign: 'center', 
//                   fontFamily: "Montserrat", 
//                   fontSize: "20px",
//                   whiteSpace: "nowrap", // Prevent text wrapping
//                   textOverflow: "ellipsis",// Add ellipsis for overflowed text
//                   marginLeft:"20px",
//                   marginBottom: '20px'
//                 }}
//               >
//                 The bar charts showing patient outcome metrics like readmission rate, average length of stay.
//               </Typography>
//               <div
//                 style={{
//                   height: '500px',
//                   width: '820px',
//                   background: '#ffff',
//                   borderRadius: '30px',
//                   boxShadow: '5px 10px 6px rgba(0, 0, 0, 0.2)',
//                 }}
//               >
//                 <ResponsiveBar
//                   data={data.map((item, index) => ({
//                     index, // Assigning index as x value
//                     'Readmission Rate': item.readmissionRate,
//                     'Avg Length of Stay': item.avgLengthOfStay,
//                   }))}
//                   keys={['Readmission Rate', 'Avg Length of Stay']}
//                   indexBy="index"
//                   margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//                   padding={0.3}
//                   colors={['#61a6f7', '#65e887']}
//                   borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//                   axisBottom={{
//                     format: value => {
//                       const date = new Date(data[value].date);
//                       const day = date.getDate().toString().padStart(2, '0');
//                       const month = (date.getMonth() + 1).toString().padStart(2, '0');
//                       const year = date.getFullYear().toString();
//                       return `${day}-${month}-${year}`;
//                     },
//                   }}
//                   axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: 'Value',
//                     legendOffset: -40,
//                     legendPosition: 'middle',
//                   }}
//                   enableLabel={false}
//                   labelSkipWidth={12}
//                   labelSkipHeight={12}
//                   labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//                   legends={[
//                     {
//                       dataFrom: 'keys',
//                       anchor: 'bottom-right',
//                       direction: 'column',
//                       justify: false,
//                       translateX: 120,
//                       translateY: 0,
//                       itemsSpacing: 2,
//                       itemWidth: 140, // Increase the width of legend items
//                       itemHeight: 20,
//                       itemDirection: 'left-to-right',
//                       itemOpacity: 0.85,
//                       symbolSize: 20,
//                       effects: [
//                         {
//                           on: 'hover',
//                           style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1,
//                           },
//                         },
//                       ],
//                     },
//                   ]}
//                   animate={true}
//                   motionStiffness={90}
//                   motionDamping={15}
//                 />
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Dashboardmort;

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dmort from "./Dashboardmort";
import Dsani from "./Dashboardsan";
import Das12 from "./Dash12";
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const Dashboard = () => {
  // Step 1: Create state variables to store the data
  const [data, setData] = useState([]);

  // Step 2: Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/patient');
        const jsonData = await response.json();
        // Update the state with fetched data
        setData(jsonData.patientOutcomeMetrics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", backgroundColor: "#f5f5f5", width: "100%" }}>
      <div style={{ width: "100%", padding: "10px" }}>
        {/* Place the common styles for all charts here */}

        <Grid container spacing={3}>
          <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"50px"}}>
            <Dmort />
          </Grid>
          <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginLeft:"900px",marginTop:"-480px"}}>
            <Dsani />
          </Grid>
          <Grid item xs={4.5} sx={{ height: "500px", width: "200px",marginTop:"220px" }}>
            <Das12 />
          </Grid>
          <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"-590px", marginLeft:"980px"}}>
            <div style={{ width: '45%', padding: '10px' }}>
              <h2 style={{ whiteSpace: 'nowrap',textOverflow: 'ellipsis', marginTop:"100px", marginLeft:'-50px' }}>Mortality Rate</h2>
              <Typography 
                variant="h6" 
                style={{ 
                  textAlign: 'center', 
                  fontFamily: "Montserrat", 
                  fontSize: "20px",
                  whiteSpace: "nowrap", // Prevent text wrapping
                  textOverflow: "ellipsis",// Add ellipsis for overflowed text
                  marginBottom: '10px',
                  marginLeft:'80px'
                }}
              >
                This chart displays the mortality rate.
              </Typography>
              <div
                style={{
                  height: '500px',
                  width: '600px',
                  marginTop:"20px",
                  background: '#ffff',
                  borderRadius: '30px',
                  boxShadow: '5px 10px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                <ResponsiveLine
                  data={[
                    {
                      id: 'Mortality Rate',
                      color: 'hsl(49, 70%, 50%)',
                      data: data.map((item, index) => ({
                        x: new Date(item.date), // Assigning date as x value
                        y: item.mortalityRate,
                      })),
                    },
                  ]}
                  margin={{ top: 70, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'time', format: '%Y-%m-%d' }}
                  yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
                  axisBottom={{
                    format: value => {
                      const date = new Date(value);
                      const day = date.getDate().toString().padStart(2, '0');
                      const month = (date.getMonth() + 1).toString().padStart(2, '0');
                      const year = date.getFullYear().toString();
                      return `${day}-${month}-${year}`;
                    },
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Mortality Rate',
                    legendOffset: -50,
                    legendPosition: 'middle',
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'Color' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 140,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, 20%)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={4.5} sx={{ height: "500px", width: "200px", marginTop:"40px"}}>
            <div style={{ width: '45%', padding: '10px' }}>
              <h2 style={{ whiteSpace: 'nowrap',textOverflow: 'ellipsis', marginTop:"100px" }}>
                Readmission Rate and Avg Length of Stay Over Time
              </h2>
              <Typography 
                variant="h6" 
                style={{ 
                  textAlign: 'center', 
                  fontFamily: "Montserrat", 
                  fontSize: "20px",
                  whiteSpace: "nowrap", // Prevent text wrapping
                  textOverflow: "ellipsis",// Add ellipsis for overflowed text
                  marginLeft:"20px",
                  marginBottom: '20px'
                }}
              >
                The bar charts showing patient outcome metrics like readmission rate, average length of stay.
              </Typography>
              <div
                style={{
                  height: '500px',
                  width: '820px',
                  background: '#ffff',
                  borderRadius: '30px',
                  boxShadow: '5px 10px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                <ResponsiveBar
                  data={data.map((item, index) => ({
                    index, // Assigning index as x value
                    'Readmission Rate': item.readmissionRate,
                    'Avg Length of Stay': item.avgLengthOfStay,
                  }))}
                  keys={['Readmission Rate', 'Avg Length of Stay']}
                  indexBy="index"
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  padding={0.3}
                  colors={['#61a6f7', '#65e887']}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  axisBottom={{
                    format: value => {
                      const date = new Date(data[value].date);
                      const day = date.getDate().toString().padStart(2, '0');
                      const month = (date.getMonth() + 1).toString().padStart(2, '0');
                      const year = date.getFullYear().toString();
                      return `${day}-${month}-${year}`;
                    },
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Value',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  enableLabel={false}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  legends={[
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 140, // Increase the width of legend items
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;