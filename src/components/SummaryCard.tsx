import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface ChartData {
  name: string;
  value: number;
}

interface LineChartData {
  name: string;
  value: number;
}

interface SummaryCardProps {
  title: string;
  value: number;
  description: string;
  chartData?: ChartData[];
  lineChartData?: LineChartData[];
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, description, chartData, lineChartData }) => (
  <Card sx={{ margin: 2 }}>
    <CardContent sx={{display:"flex",flexDirection:"column"}}>
      <Box display="flex" flexDirection="row" justifyContent="spaceBetween" gap="100px">
        <Box>
          <Typography variant="h6" sx={{fontSize:"16px",}}>{title}</Typography>
          <Typography variant="h4" sx={{fontSize:"16px",}}>{value}</Typography>
        </Box>
        <Box sx={{display:"flex"}}>
        {chartData && (
            <PieChart width={150} height={150}>
              <Pie data={chartData} cx={50} cy={50} outerRadius={50} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </Box>
        </Box>
        <Box>
        <Box sx={{display:"flex"}}>
        <Typography variant="body2">{description}</Typography>
          
          {lineChartData && (
            <LineChart width={150} height={150} data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          )}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default SummaryCard;