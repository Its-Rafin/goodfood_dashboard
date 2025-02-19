const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [{
      label: '# of Votes',
      data: [40, 32, 28],
      backgroundColor: [
        '#5A6ACF',
        '#8593ED',
        '#C7CEFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
    // responsive: true, // Important! Disables auto-resizing
    maintainAspectRatio: false, // Prevents distortion 
    cutout: '65%',
    radius: 62,
    layout: {
      padding: {
        
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
          },
          // padding: 30,// padding: 30,// More space around labels
          color: '#121212B3', // Darker text color
          boxWidth: 9, // Bigger color box
          boxHeight: 9,
          usePointStyle: true, // Enable point style
          pointStyle: 'circle'
        }
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true,
        display: false
      }
    }
  }
});