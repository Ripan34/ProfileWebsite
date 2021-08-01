import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['C++', 'Java', 'Python', 'Javascript', 'React'],
    datasets: [
      {
        label: '# of Votes',
        data: [22, 16, 12, 17, 10],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const legendHandle = () => {};
  const options = {

    responsive: true,
    maintainAspectRatio: false,
    responsive: true,
    animation: false,
  responsiveAnimationDuration: 0,
    plugins: {
      legend: {
        position: 'right',
        labels:{
            font: {
                size: 40,
                weight: "bold"
            },
            boxWidth: 100,
            boxHeight: 60,
            onClick: legendHandle
        }
      }
    }
};
const SkillChart = () => {
    
  return(
   
<Doughnut data={data} options={options}/>

  );
  };

export default SkillChart;
