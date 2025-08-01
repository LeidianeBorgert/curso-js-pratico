// Dados de exemplo
const weeklyLabels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const weeklyData = [10000, 12000, 11000, 13000];

new Chart(document.getElementById('weeklyRevenueChart'), {
  type: 'bar',
  data: {
    labels: weeklyLabels,
    datasets: [{
      label: 'Receita (R$)',
      data: weeklyData,
      backgroundColor: '#00796b'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

// Pie chart: distribuição de receita
const pieLabels = ['Quartos', 'Serviços', 'Outros'];
const pieData = [70, 20, 10];

new Chart(document.getElementById('revenuePieChart'), {
  type: 'pie',
  data: {
    labels: pieLabels,
    datasets: [{
      data: pieData
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});