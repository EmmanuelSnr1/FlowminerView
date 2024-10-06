<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-white text-xl font-semibold">Sales value</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

onMounted(() => {
  const ctx = document.getElementById('line-chart').getContext('2d');
  const config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [65, 78, 66, 44, 56, 67, 75],
          fill: false,
        },
        {
          label: new Date().getFullYear() - 1,
          backgroundColor: '#fff',
          borderColor: '#fff',
          data: [40, 68, 86, 74, 56, 60, 87],
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          labels: {
            fontColor: 'white',
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
          ticks: {
            color: 'rgba(255,255,255,.7)',
          },
          grid: {
            display: false,
            color: 'rgba(33, 37, 41, 0.3)',
            borderDash: [2],
          },
        },
        y: {
          ticks: {
            color: 'rgba(255,255,255,.7)',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.15)',
            borderDash: [3],
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
