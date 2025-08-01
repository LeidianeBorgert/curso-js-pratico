const labels = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Ocupação (%)',
        data: [75, 68, 82, 90, 88, 85, 80, 77, 79, 83, 86, 88, 91, 93, 90, 87, 85, 82, 84, 86, 89, 90, 92, 94, 93, 90, 88, 85, 82, 80, 79],
        fill: true,
        tension: 0.4,
        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--header-bg').trim(),
        backgroundColor: 'rgba(0,77,64,0.2)'
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
};
new Chart(document.getElementById('reportChart'), config);