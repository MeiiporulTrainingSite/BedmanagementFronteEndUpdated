// // import React, { useState } from "react";
// // import Grid from "@mui/material/Grid";
// // import PersonIcon from "@mui/icons-material/Person";
// // import Typography from "@mui/material/Typography";
// // import { ResponsiveLine } from "@nivo/line";

// // const initialData = {
// //   patientCensus: [
// //     { ward: "Ward A", time: "08:00 AM", patientCount: 50 },
// //     { ward: "Ward A", time: "12:00 PM", patientCount: 65 },
// //     { ward: "Ward B", time: "08:00 AM", patientCount: 40 },
// //     { ward: "Ward B", time: "12:00 PM", patientCount: 55 },
// //     // Add more patient census data as needed
// //   ],
// // };

// // const Trend = () => {
// //   const [data] = useState(initialData.patientCensus);

// //   return (
// //     <div style={{ display: "flex" }}>
// //       {/* <div style={{ width: "100%", padding: "10px", marginLeft: "50px" }}> */}
// //         <div
// //           style={{
// //             // background: "#ffff",
// //             padding: "5px",
// //             height: "80px",
// //             marginBottom: "90px",
// //             width: "200%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             marginLeft: "5%",
// //             marginTop:"400px"
// //           }}
// //         >
          
         
// //         </div>
        
// //         <Grid container spacing={1}>
// //           <Grid item xs={2}>
// //             <div
// //               style={{
// //                 height: "390px",
// //                 width: "640px",
// //                 background: "#ffff",
// //                 borderRadius: "30px",
// //                 boxShadow: "5px 10px 6px rgba(0, 0, 0, 0.2)",
// //               }}
// //             >
// //               <ResponsiveLine
// //                 data={[
// //                   {
// //                     id: "Ward A",
// //                     color: "hsl(49, 70%, 50%)",
// //                     data: data
// //                       .filter((item) => item.ward === "Ward A")
// //                       .map((item) => ({
// //                         x: item.time,
// //                         y: item.patientCount,
// //                       })),
// //                   },
// //                   {
// //                     id: "Ward B",
// //                     color: "hsl(199, 70%, 50%)",
// //                     data: data
// //                       .filter((item) => item.ward === "Ward B")
// //                       .map((item) => ({
// //                         x: item.time,
// //                         y: item.patientCount,
// //                       })),
// //                   },
// //                 ]}
// //                 margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
// //                 xScale={{ type: "point" }}
// //                 yScale={{
// //                   type: "linear",
// //                   min: "auto",
// //                   max: "auto",
// //                 }}
// //                 yFormat=" >-.2f"
// //                 axisTop={null}
// //                 axisRight={null}
// //                 axisBottom={{
// //                   tickSize: 5,
// //                   tickPadding: 5,
// //                   tickRotation: 0,
// //                   legend: "Time",
// //                   legendOffset: 36,
// //                   legendPosition: "middle",
// //                 }}
// //                 axisLeft={{
// //                   tickSize: 5,
// //                   tickPadding: 5,
// //                   tickRotation: 0,
// //                   legend: "Patient Count",
// //                   legendOffset: -40,
// //                   legendPosition: "middle",
// //                 }}
// //                 pointSize={10}
// //                 pointBorderWidth={2}
// //                 pointBorderColor={{ from: "color" }}
// //                 pointLabelYOffset={-12}
// //                 useMesh={true}
// //                 legends={[
// //                   {
// //                     anchor: "bottom-right",
// //                     direction: "column",
// //                     justify: false,
// //                     translateX: 100,
// //                     translateY: 0,
// //                     itemsSpacing: 0,
// //                     itemDirection: "left-to-right",
// //                     itemWidth: 80,
// //                     itemHeight: 20,
// //                     itemOpacity: 0.75,
// //                     symbolSize: 12,
// //                     symbolShape: "circle",
// //                     symbolBorderColor: "rgba(0, 0, 0, .5)",
// //                     effects: [
// //                       {
// //                         on: "hover",
// //                         style: {
// //                           itemBackground: "rgba(0, 0, 0, .03)",
// //                           itemOpacity: 1,
// //                         },
// //                       },
// //                     ],
// //                   },
// //                 ]}
// //               />
// //             </div>
// //           </Grid>
// //         </Grid>
// //       </div>
// //     // </div>
// //   );
// // };

// // export default Trend;
// // import React, { useEffect, useState } from "react";
// // import {
// //   Container,
// //   Typography,
// //   Paper,
// //   Grid,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   IconButton,
// // } from "@mui/material";
// // import { PersonOutline as PersonOutlineIcon } from "@mui/icons-material";

// // function PatientList() {
// //   const [patients, setPatients] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [selectedNurse, setSelectedNurse] = useState(null);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [uniqueNurses, setUniqueNurses] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:9000/patientCarealert")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setPatients(data.patients);
// //         setIsLoading(false);
// //         const nurseNames = data.patients.map((patient) => patient.assignedNurse);
// //         const uniqueNames = [...new Set(nurseNames)];
// //         setUniqueNurses(uniqueNames);
// //         alert('Welcome to the Patient List page!');
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //         setIsLoading(false);
// //       });
// //   }, []);

// //   const handleNurseButtonClick = (nurseName) => {
// //     setSelectedNurse(nurseName);
// //     setOpenDialog(true);
// //   };

// //   return (
// //     <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
// //       <div style={{ padding: "10px", maxWidth: "1200px", width: "100%" }}>
// //         <Grid item xs={6}>
// //           <Typography
// //             variant="h4"
// //             component="h2"
// //             gutterBottom
// //             style={{
// //               background: "#61aff7",
// //               color: "#ffffff",
// //               padding: "10px",
// //               borderTopLeftRadius: "30px",
// //               borderTopRightRadius: "30px",
// //             }}
// //           >
// //             Patient List
// //           </Typography>
// //           <Paper elevation={3}>
// //             {isLoading ? (
// //               <Typography>Loading data...</Typography>
// //             ) : (
// //               uniqueNurses.map((nurseName) => (
// //                 <div
// //                   key={nurseName}
// //                   style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "10px", backgroundColor: selectedNurse === nurseName ? "#ffcccc" : "transparent" }}
// //                   onClick={() => handleNurseButtonClick(nurseName)}
// //                 >
// //                   <IconButton>
// //                     <PersonOutlineIcon />
// //                   </IconButton>
// //                   <Typography>{nurseName}</Typography>
// //                 </div>
// //               ))
// //             )}
// //           </Paper>
// //         </Grid>
// //       </div>
// //       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
// //         <DialogTitle>{selectedNurse}'s Details</DialogTitle>
// //         <DialogContent>
// //           {patients.map((patient) => {
// //             if (patient.assignedNurse === selectedNurse) {
// //               return (
// //                 <div key={patient._id}>
// //                   <Typography>Name: {patient.name}</Typography>
// //                   <Typography>Medical Acuity: {patient.medicalAcuity}</Typography>
// //                   {patient.tasks.length > 0 && (
// //                     <div>
// //                       <strong>Tasks:</strong>
// //                       <ul>
// //                         {patient.tasks.map((task, index) => (
// //                           <li key={index}>
// //                             {`${task.taskType}: ${task.description}`}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             }
// //             return null;
// //           })}
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setOpenDialog(false)}>Close</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // }

// // export default PatientList;
// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   IconButton,
// } from "@mui/material";
// import { PersonOutline as PersonOutlineIcon } from "@mui/icons-material";

// function PatientList() {
//   const [patients, setPatients] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedNurse, setSelectedNurse] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [uniqueNurses, setUniqueNurses] = useState([]);
//   const [nurseColors, setNurseColors] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:9000/patientCarealert")
//       .then((response) => response.json())
//       .then((data) => {
//         setPatients(data.patients);
//         setIsLoading(false);
//         const nurseNames = data.patients.map((patient) => patient.assignedNurse);
//         const uniqueNames = [...new Set(nurseNames)];
//         setUniqueNurses(uniqueNames);

//         // Determine colors for each nurse based on the acuity of their patients
//         const colors = {};
//         uniqueNames.forEach((nurseName) => {
//           const nursePatients = data.patients.filter((patient) => patient.assignedNurse === nurseName);
//           let color = "#FFFFFF"; // Default color

//           if (nursePatients.some((patient) => patient.medicalAcuity.includes("Critical"))) {
//             color = "#FF6347"; // Red for Critical
//           } else if (nursePatients.some((patient) => patient.medicalAcuity.includes("Moderate"))) {
//             color = "#FFD700"; // Gold for Moderate
//           }

//           colors[nurseName] = color;
//         });

//         setNurseColors(colors);

//         alert('Welcome to the Patient List page!');
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleNurseButtonClick = (nurseName) => {
//     setSelectedNurse(nurseName);
//     setOpenDialog(true);
//   };

//   return (
//     <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
//       <div style={{ padding: "10px", maxWidth: "1200px", width: "100%" }}>
//         <Grid item xs={6}>
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             style={{
//               background: "#61aff7",
//               color: "#ffffff",
//               padding: "10px",
//               borderTopLeftRadius: "30px",
//               borderTopRightRadius: "30px",
//             }}
//           >
//             Patient List
//           </Typography>
//           <Paper elevation={3}>
//             {isLoading ? (
//               <Typography>Loading data...</Typography>
//             ) : (
//               uniqueNurses.map((nurseName) => (
//                 <div
//                   key={nurseName}
//                   style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "10px", backgroundColor: nurseColors[nurseName] }}
//                   onClick={() => handleNurseButtonClick(nurseName)}
//                 >
//                   <IconButton>
//                     <PersonOutlineIcon />
//                   </IconButton>
//                   <Typography>{nurseName}</Typography>
//                 </div>
//               ))
//             )}
//           </Paper>
//         </Grid>
//       </div>
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>{selectedNurse}'s Details</DialogTitle>
//         <DialogContent>
//           {patients.map((patient) => {
//             if (patient.assignedNurse === selectedNurse) {
//               return (
//                 <div key={patient._id}>
//                   <Typography>Name: {patient.name}</Typography>
//                   <Typography>Medical Acuity: {patient.medicalAcuity}</Typography>
//                   {patient.tasks.length > 0 && (
//                     <div>
//                       <strong>Tasks:</strong>
//                       <ul>
//                         {patient.tasks.map((task, index) => (
//                           <li key={index}>
//                             {`${task.taskType}: ${task.description}`}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }

// export default PatientList;
//Dash12.jsx
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ResponsiveLine } from "@nivo/line";

const Trend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/paces");
        const jsonData = await response.json();
        setData(jsonData.patientCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '700px', height: '600px', margin: 'auto'}}>
      <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '-41px', fontFamily: "Montserrat",fontsize:"12px" }}>
      <h5>Patient Census Dashboard</h5>
</Typography>
      <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '10px', fontFamily: "Montserrat",fontsize:"12px" }}>
      The line chart showing the patient census trend over a specified period
    </Typography>
      <div
        style={{
          padding: "5px",
          height: "80px",
          marginBottom: "90px",
          width: "200%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "3%",
          marginTop: "-190px"
        }}
      ></div>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <div
            style={{
              height: "450px",
              width: "830px",
              background: "#ffff",
              borderRadius: "30px",
              boxShadow: "5px 10px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ResponsiveLine
              data={[
                {
                  id: "Ward A",
                  color: "hsl(49, 70%, 50%)",
                  data: data
                    .filter((item) => item.wardName === "Ward A")
                    .map((item) => ({
                      x: `${item.admissionDate}-${item.admissionTime}`,
                      y: item.patientCount,
                    })),
                },
                {
                  id: "Ward B",
                  color: "hsl(199, 70%, 50%)",
                  data: data
                    .filter((item) => item.wardName === "Ward B")
                    .map((item) => ({
                      x: `${item.admissionDate}-${item.admissionTime}`,
                      y: item.patientCount,
                    })),
                },
              ]}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Time and Date",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Patient Count",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointBorderWidth={2}
              pointBorderColor={{ from: "color" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Trend;


