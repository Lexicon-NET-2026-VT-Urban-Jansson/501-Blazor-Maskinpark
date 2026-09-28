window.renderChart = (id, data, labels) => {
    const ctx = document.getElementById(id).getContext('2d');

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 150, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 150, 255, 0.0)');


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Daily Stats',
                data: data,
                fill: true,
                backgroundColor: gradient,
                borderColor: 'rgba(0, 150, 255, 1)',
                borderWidth: 3,
                tension: 0.4, // smooth curve
                pointRadius: 0 // clean look
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    grid: { color: 'rgba(200,200,200,0.2)' }
                }
            }
        }
    });
};


// window.renderChart = (id, data, labels) => {
//     var ctx = document.getElementById(id).getContext('2d');
//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Daily Stats',
//                 data: data
//             }]
//         }
//     });
// };
