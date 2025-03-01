// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81, 56, 55], // Data points for the chart
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
      borderColor: 'rgba(75, 192, 192, 1)', // Border color of bars
      borderWidth: 1, // Border width
    },
  ],
};

// Options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const, // Position of the legend
    },
    tooltip: {
      enabled: true,
    },
  },
};

const BarChart: React.FC = () => {
  return (
    <div className=''>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
