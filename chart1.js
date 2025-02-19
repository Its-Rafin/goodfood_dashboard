const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [{
      label: 'last 6 days ',
      data: [12, 15, 14, 12, 16, 24, 19, 13, 10, 15, 23, 17],
      backgroundColor : ['#5A6ACF'],
      borderWidth: 1,
      barThickness: 8,

    },
    {
        label: ' ',  // Empty dataset to create a gap
        data: [null, null, null, null, null, null, null, null, null, null, null, null],
        // hidden : true,
        backgroundColor: 'transparent',
      },
    
    {
        label: 'last week ',
        data: [8, 18, 9, 14, 7, 10, 14, 14, 18, 11, 20, 12],
        backgroundColor: '#E6E8EC', // Second bar color
        borderWidth: 1,
        barThickness: 8,
    }
]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'bottom', // Move legend below chart
            align: 'start',
            labels: {
              font: {
                size: 12, // Bigger font
                // weight: 'bold' // Bold text
              },
              color: '#121212B3', // Darker text color
              boxWidth: 9, // Bigger color box
              boxHeight: 9,
              padding: 15, // More space around labels
              usePointStyle: true, // Enable point style
              pointStyle: 'circle' // Set style to circle
            }
         } // Hides the dataset labels
        },
    scales: {
        x: {
            stacked: false, 
            barPercentage: 0.3,   // Decrease to increase space between bars
            categoryPercentage: 0.4,  // Controls spacing between groups
            grid:{
                display : false,
                drawBorder: false,
                color: 'transparent',
            },
            // border: {
            //     display: false, // Hides axis border
            //     color: 'transparent',
            //   }
            
            ticks: {
                autoSkip: false,
            }
        },

        y: {
        beginAtZero: true,
        ticks: {
            stepSize: 5,
            display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Lighten the grid lines
          borderDash: [5, 5],
          drawTicks: false, // Hide small ticks
          drawBorder: false,
        //   borderColor: 'transparent',
        //   borderWidth: 0, // Fully removes the border
          display: true,
        },
        border: {
            display: false, // Hides axis border
            color: 'transparent',
          }

      }
    }
  }
});