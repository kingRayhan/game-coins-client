<template>
  <div>
    <div class="columns">
      <!--  -->
      <div class="column">
        <Card title="Total Game" theme="primary">
          <p class="text-4xl" v-if="!loading">
            {{ counter.totalGames }}
          </p>
          <b-loading :is-full-page="false" v-model="loading" />
        </Card>
      </div>

      <!--  -->
      <div class="column">
        <Card title="Pending Order" theme="info">
          <p class="text-4xl" v-if="!loading">{{ counter.pendingOrders }}</p>
          <b-loading :is-full-page="false" v-model="loading" />
        </Card>
      </div>

      <!--  -->
      <div class="column">
        <Card title="Done order" theme="dark">
          <p class="text-4xl" v-if="!loading">{{ counter.doneOrders }}</p>
          <b-loading :is-full-page="false" v-model="loading" />
        </Card>
      </div>
    </div>

    <div class="columns">
      <div class="column is-two-third">
        <MonthlySellChart />
      </div>
      <div class="column is-one-third">
        <LatestOrders />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  layout: "admin",
  middleware: "authenticated",
  async mounted() {
    const counter = await this.$axios.$get("counter");
    this.counter = counter;
    this.loading = false;
  },
  data() {
    return {
      counter: {},
      loading: true
    };
  }
};
</script>
