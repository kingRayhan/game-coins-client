<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h2 class="text-3xl uppercase">All games</h2>
      </div>
      <div class="level-right">
        <nuxt-link
          :to="{ name: 'dashboard-games-new' }"
          class="button is-primary"
        >
          <b-icon icon="plus" /> <span>New Game</span>
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
      <b-table-column label="#ID" v-slot="props" width="120">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column label="Title" v-slot="props">
        {{ props.row.title }}
      </b-table-column>

      <b-table-column label="Thumbnail" v-slot="props">
        <img
          v-if="props.row.thumbnail"
          :src="props.row.thumbnail"
          alt="thumbnail"
          class="w-24 h-24 rounded"
        />
      </b-table-column>

      <b-table-column label="Actions" v-slot="props">
        <nuxt-link
          :to="{ name: 'items-slug', params: { slug: props.row.slug } }"
          class="button"
        >
          <b-icon icon="eye" />
        </nuxt-link>

        <b-button @click="destroy(props.row)">
          <b-icon icon="trash-can" type="is-danger" />
        </b-button>

        <nuxt-link
          :to="{
            name: 'dashboard-games-slug',
            params: { slug: props.row.slug }
          }"
          class="button"
        >
          <b-icon icon="lead-pencil" type="is-primary" />
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
      perPage: 15,
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
        `games?limit=${this.perPage}&page=${this.currentPage}`
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
      await this.$axios.$delete(`games/${row.id}`);
      this.loadData();
    }
  }
};
</script>
