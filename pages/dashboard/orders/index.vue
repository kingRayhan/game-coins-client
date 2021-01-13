<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h2 class="text-3xl uppercase">All Orders</h2>
      </div>
      <div class="level-right">
        <nuxt-link
          :to="{ name: 'dashboard-orders-archieve' }"
          class="button is-primary"
        >
          <span>Archieve</span>
        </nuxt-link>
      </div>
    </div>

    <b-table
      :data="items"
      :loading="loading"
      bordered
      paginated
      backend-pagination
      :per-page="perPage"
      :total="total"
      @page-change="onPageChange"
    >
      <b-table-column label="#Order No" v-slot="props" width="120">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column label="Player Id" v-slot="props">
        {{ props.row.playerId }}
      </b-table-column>
      <b-table-column label="Customer Name" v-slot="props">
        {{ props.row.customerName }}
      </b-table-column>

      <b-table-column label="Game" v-slot="props">
        {{ props.row.game }}
      </b-table-column>

      <b-table-column label="Coin" v-slot="props">
        {{ props.row.coin }}
      </b-table-column>

      <b-table-column label="Price" v-slot="props">
        {{ props.row.price }}
      </b-table-column>

      <b-table-column label="Actions" v-slot="props">
        <b-button @click="destroy(props.row)">
          <b-icon icon="trash-can" type="is-danger" />
        </b-button>

        <nuxt-link
          :to="{
            name: 'dashboard-orders-id',
            params: { id: props.row.id }
          }"
          class="button"
        >
          <b-icon icon="eye" />
        </nuxt-link>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
  head: {
    title: "Orders"
  },
  layout: "admin",
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 10,
      total: 0,
      loading: false
    };
  },
  async mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      const items = await this.$axios.$get(
        `orders?limit=${this.perPage}&page=${this.currentPage}`
      );
      this.loading = false;
      this.items = items.data;
      this.total = items.meta.totalItems;
    },
    onPageChange(page) {
      this.currentPage = page;
      this.loadData();
    },
    async destroy(row) {
      if (!confirm("Sure to delete?")) return;
      await this.$axios.$delete(`orders/${row.id}`);
      this.loadData();
    }
  }
};
</script>
