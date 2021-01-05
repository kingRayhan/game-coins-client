<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h2 class="text-3xl uppercase">All Admin</h2>
      </div>
      <div class="level-right">
        <nuxt-link
          :to="{ name: 'dashboard-users-create' }"
          class="button is-primary"
        >
          <span>New Admin</span>
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
      <b-table-column label="Name" v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column label="Email" v-slot="props">
        {{ props.row.email }}
      </b-table-column>

      <b-table-column label="Role" v-slot="props">
        {{ props.row.role }}
      </b-table-column>

      <b-table-column label="Actions" v-slot="props">
        <b-button @click="destroy(props.row)">
          <b-icon icon="trash-can" type="is-danger" />
        </b-button>

        <nuxt-link
          :to="{
            name: 'dashboard-users-id',
            params: { id: props.row.id }
          }"
          class="button"
        >
          <b-icon icon="pencil" />
        </nuxt-link>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
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
        `users?limit=${this.perPage}&page=${this.currentPage}`
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
