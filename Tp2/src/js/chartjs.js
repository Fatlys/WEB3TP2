document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("activityChart");
  if (!canvas || !window.Chart) return;

  const data = [15, 25, 20, 30, 28, 35, 32, 38, 40, 36];

  const chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [{
        data: data,
        backgroundColor: "#00ff00",
        borderColor: "#00ff00",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { 
          ticks: { color: "#00ff00", font: { size: 8 } },
          grid: { display: false }
        },
        y: { 
          ticks: { color: "#00ff00", font: { size: 8 } },
          grid: { color: "rgba(0, 255, 0, 0.1)" }
        }
      }
    }
  });

  
  setInterval(() => {
    data.shift();
    data.push(Math.floor(Math.random() * 20) + 25);
    chart.update();
  }, 4000);
});