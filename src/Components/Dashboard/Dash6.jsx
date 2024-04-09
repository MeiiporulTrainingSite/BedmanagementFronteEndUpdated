// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   Grid,
// } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";

// function PatientList() {
//   const [patients, setPatients] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch patient data from the API
//     fetch("http://localhost:9000/patientCare") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         setPatients(data.patients);
//         setIsLoading(false);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <Container
//       style={{
//         display: "flex",
//         backgroundColor: "#EAF2F8",
//         fontFamily: "Montserrat",
//         width: "20px",
//         height: "40px",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontFamily: "Montserrat",
//           marginLeft: "50px",
//           height: "100%",
//         }}
//       >
//         <Grid item xs={6} sx={{ height: "53vh", width: "660px" }}>
//           <div
//             style={{
//               height: "53vh",
//               width: "660px",
//               background: "#ffff",
//               borderRadius: "30px",
//               boxShadow: "5px 10px 6px rgba(0, 0, 0, 0.2)",
//               marginLeft:"-40px",
//               marginTop:"-390px",
//             }}
//           >
//             <Typography
//               variant="h4"
//               component="h2"
//               gutterBottom
//               style={{
//                 background: "#61aff7",
//                 color: "#ffffff",
//                 padding: "10px",
//                 borderTopLeftRadius: "30px",
//                 borderTopRightRadius: "30px",
//                 fontFamily: "Montserrat",
//               }}
//             >
//               Patient List
//             </Typography>
//             <Paper elevation={3}>
//               <Table>
//                 <TableBody style={{ background: "#f3f3f3 ", textColor: "Black (#000000)" }}>
//                   {isLoading ? (
//                     <TableRow>
//                       <TableCell colSpan={4}>Loading data...</TableCell>
//                     </TableRow>
//                   ) : (
//                     patients.map((patient, index) => (
//                       <TableRow
//                         key={patient._id}
//                         style={
//                           index % 2 === 0
//                             ? { transition: "background-color 0.2s", fontFamily: "Montserrat" }
//                             : {
//                                 transition: "background-color 0.2s",
//                                 backgroundColor: "(#e0e0e0) ",
//                                 fontFamily: "Montserrat",
//                               }
//                         }
//                       >
//                         <TableCell>Name: {patient.name}</TableCell>
//                         <TableCell>Medical Acuity: {patient.medicalAcuity.join(", ")}</TableCell>
//                         {patient.assignedNurse && (
//                           <TableCell>Assigned Nurse: {patient.assignedNurse}</TableCell>
//                         )}
//                         {patient.tasks.length > 0 && (
//                           <TableCell>
//                             <div>
//                               <strong>Tasks:</strong>
//                             </div>
//                             <ul>
//                               {patient.tasks.map((task, index) => (
//                                 <li key={index}>
//                                   {`${task.taskType}: ${task.description}`}
//                                 </li>
//                               ))}
//                             </ul>
//                           </TableCell>
//                         )}
//                       </TableRow>
//                     ))
//                   )}
//                 </TableBody>
//               </Table>
//             </Paper>
//           </div>
//         </Grid>
//       </div>
//     </Container>
//   );
// }

// export default PatientList;

import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material"; // Import necessary components

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Display alert message
    alert("Loading patient data...");

    // Fetch patient data from the API
    fetch("http://localhost:9000/patientCare") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setPatients(data.patients);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handlePopupOpen = (patient) => {
    setSelectedPatient(patient);
    setOpenPopup(true);
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ padding: "10px", maxWidth: "1200px", width: "100%" }}>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={{
              background: "#61aff7",
              color: "#ffffff",
              padding: "10px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
          >
            Patient List
          </Typography>
          <Paper elevation={0}>
            <Table>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={2}>Loading data...</TableCell>
                  </TableRow>
                ) : (
                  patients.map((patient) => (
                    <TableRow key={patient._id}>
                      <TableCell>
                        {/* Person icon for nurse along with nurse's name */}
                        <IconButton onClick={() => handlePopupOpen(patient)}>
                          <PersonIcon style={{ color: getNurseColor(patient.medicalAcuity) }} />
                        </IconButton>
                        {patient.assignedNurse}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>

      {/* Pop-up Dialog */}
      <Dialog open={openPopup} onClose={handlePopupClose}>
        <DialogTitle>Patient Details</DialogTitle>
        <DialogContent>
          {selectedPatient && (
            <div>
              <Typography>Name: {selectedPatient.name}</Typography>
              <Typography>Medical Acuity: {selectedPatient.medicalAcuity.join(", ")}</Typography>
              <Typography>
                Tasks:
                <ul>
                  {selectedPatient.tasks.map((task, index) => (
                    <li key={index}>
                      <Typography>
                        <strong>Task Type:</strong> {task.taskType}
                      </Typography>
                      <Typography>
                        <strong>Task Description:</strong> {task.description}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Typography>
              {/* Add more details as needed */}
            </div>
          )}
          <Button onClick={handlePopupClose}>Close</Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

// Function to get the color based on medical acuity
const getNurseColor = (medicalAcuity) => {
  switch (medicalAcuity[0]) {
    case "Critical":
      return "#FF0000"; // Red for critical condition
    case "Moderate":
      return "#FFA500"; // Orange for moderate condition
    case "Stable":
      return "#00FF00"; // Green for stable condition
    default:
      return "#000000"; // Default color
  }
};

export default PatientList;
