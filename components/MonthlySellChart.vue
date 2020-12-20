<template>
  <div>
    <h2 class="text-2xl uppercase">Monthly Order</h2>
    <div>
      <LineChart :chartData="this.chartData" height="250" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Novenber",
          "December"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#7957d5",
            borderColor: "#7957d5",
            data: [100, 200, 300, 50],
            fill: true
          }
        ]
      }
    };
  }
};
</script>
