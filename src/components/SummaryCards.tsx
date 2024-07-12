import React from 'react';
import { Grid } from '@mui/material';
import SummaryCard from './SummaryCard';

const summaryData = [
  { title: 'All Patients', value: 400, description: 'Categorized by diseases', chartData: [{ name: 'TB', value: 200 }, { name: 'COPD', value: 100 }, { name: 'Asthma', value: 100 }] },
  { title: 'Active Patients', value: 170, description: 'With breakdown by disease', chartData: [{ name: 'TB', value: 90 }, { name: 'COPD', value: 50 }, { name: 'Asthma', value: 30 }] },
  { title: 'New Registrations', value: 62, description: 'Last 7 days', lineChartData: [{ name: 'Day 1', value: 10 }, { name: 'Day 2', value: 15 }, { name: 'Day 3', value: 20 }, { name: 'Day 4', value: 5 }, { name: 'Day 5', value: 12 }, { name: 'Day 6', value: 8 }, { name: 'Day 7', value: 6 }] },
  { title: 'Previous Appointments', value: 13, description: 'Last 7 days', lineChartData: [{ name: 'Day 1', value: 2 }, { name: 'Day 2', value: 3 }, { name: 'Day 3', value: 1 }, { name: 'Day 4', value: 4 }, { name: 'Day 5', value: 1 }, { name: 'Day 6', value: 2 }, { name: 'Day 7', value: 0 }] },
  { title: 'Appointments Today', value: 12, description: 'Categorized by disease' },
  { title: 'Upcoming Appointments', value: 5, description: 'Categorized by disease' },
];

const SummaryCards: React.FC = () => (
  <Grid   spacing={1} sx={{display:"flex",}}>
    {summaryData.map((item, index) => (
      <Grid container item xs={12} sm={6} md={4} key={index}>
        <SummaryCard
          title={item.title}
          value={item.value}
          description={item.description}
          chartData={item.chartData}
          lineChartData={item.lineChartData}
        />
      </Grid>
    ))}
  </Grid>
);

export default SummaryCards;
