import React from 'react';
//import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Java', 'C++', 'Python', 'Javascript', 'React'],
    datasets: [
      {
        label: 'Skills',
        data: [22, 16, 12, 17, 10],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
        ]
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Programming languages',
      },
    },
  };
const SkillChart = () => {
    
  return(
    <Bar data={data} options={options}/>
  );
  };

export default SkillChart;
