import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

interface Patient {
  id: number;
  name: string;
  diseases: string[];
  previousAppointment: string;
  status: string;
  nextAppointment: string;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    axios.get('/api/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error('Error fetching patient data:', error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Diseases</TableCell>
            <TableCell>Previous Appointment</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Next Appointment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.diseases.join(', ')}</TableCell>
              <TableCell>{patient.previousAppointment}</TableCell>
              <TableCell>{patient.status}</TableCell>
              <TableCell>{patient.nextAppointment}</TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientList;
