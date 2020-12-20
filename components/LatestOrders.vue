<template>
  <nav class="panel relative">
    <b-loading :is-full-page="false" v-model="loading" />
    <p class="panel-heading bg-gray-100 mb-3">
      Latest orders
    </p>

    <nuxt-link
      :to="{
        name: 'dashboard-orders-id',
        params: { id: order.id }
      }"
      class="panel-block is-flex is-justify-content-space-between"
      v-for="order in orders"
      :key="order.id"
    >
      <div>
        [<span v-text="order.coin" />]
        <span v-text="order.game" />
      </div>
      <div>
        <b-icon icon="currency-bdt" size="is-small" />
        <span v-text="order.price" />
      </div>
    </nuxt-link>

    <div class="panel-block">
      <nuxt-link
        :to="{ name: 'dashboard-orders' }"
        class="button is-link is-outlined is-fullwidth mr-5"
      >
        Pending orders
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'dashboard-orders-archieve' }"
        class="button is-link is-outlined is-fullwidth"
      >
        Done orders
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  async mounted() {
    const orders = await this.$axios.$get("orders?limit=10&status=PENDING");
    this.orders = orders.data;
    this.loading = false;
  },
  data() {
    return {
      orders: null,
      loading: true
    };
  }
};
</script>
