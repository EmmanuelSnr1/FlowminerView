<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Performance
          </h6>
          <h2 class="text-blueGray-700 text-xl font-semibold">
            Total orders
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="bar-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
Chart.register(BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

onMounted(() => {
  const ctx = document.getElementById('bar-chart').getContext('2d');
  const config = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: '#ed64a6',
          borderColor: '#ed64a6',
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8,
        },
        {
          label: new Date().getFullYear() - 1,
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [27, 68, 86, 74, 10, 4, 87],
          fill: false,
          barThickness: 8,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          display: false,
          grid: {
            borderDash: [2],
            color: 'rgba(33, 37, 41, 0.3)',
            zeroLineColor: 'rgba(33, 37, 41, 0.3)',
            zeroLineBorderDash: [2],
          },
        },
        y: {
          display: true,
          grid: {
            borderDash: [2],
            drawBorder: false,
            color: 'rgba(33, 37, 41, 0.2)',
            zeroLineColor: 'rgba(33, 37, 41, 0.15)',
            zeroLineBorderDash: [2],
          },
        },
      },
    },
  };
  new Chart(ctx, config);
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
