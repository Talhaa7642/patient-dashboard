import React from 'react';
import Header from 'src/components/Header';
import SummaryCards from 'src/components/SummaryCards';
import PatientList from 'src/components/PatientList';
import { Box, Typography, Container } from '@mui/material';

const user = {
  name: 'Mike Jani',
  profilePic: 'path/to/profilePic.jpg',
};

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Header user={user} />
      <Container>
        <Box mt={4} mb={4}>
          <Typography>Hi Doctor,Take a look at your patients activities</Typography>
        </Box>
        <SummaryCards />
        <Box mt={4}>
          <Typography variant="h5">Patients</Typography>
          <PatientList />
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
