const ctx3 = document.getElementById('lineChart');

new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06'],
        datasets: [{
            label: 'last 6 days ',
            data: [8, 5, 14, 12, 6, 17],
            backgroundColor : ['#5A6ACF'],
            borderColor: '#5A6ACF',
            borderWidth: 3,
            pointRadius: 0
        },
        {
            label: 'last week ',
            data: [12, 18, 8, 17, 13, 15],
            backgroundColor:['#E6E8EC'],
            borderColor: '#E6E8EC', // Second bar color
            borderWidth: 3,
            pointRadius: 0
        }
    ]
    },
    options: {
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
            x:{
                grid:{
                    display : false,
                    drawBorder: false,
                    color: 'transparent',
                },
                // border: {
                //     display: false, // Hides axis border
                //     color: 'transparent',
                //   },
                
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
            },
        }
    }
});
