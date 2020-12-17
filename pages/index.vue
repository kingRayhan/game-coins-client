<template>
  <div>
    <Slider />

    <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
      <div
        v-for="item in items"
        :key="item.id"
        class="col-span-6 md:col-span-3"
      >
        <Item
          :thumbnail="item.thumbnail"
          :title="item.title"
          :slug="item.slug"
        />
      </div>
    </div>

    <b-pagination
      :total="total"
      v-model="currentPage"
      :per-page="perPage"
      @change="changePage"
    >
    </b-pagination>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Project Title"
    };
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      total: 0,
      perPage: 12,
      isLoading: false
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.loadData();
    },
    async loadData() {
      this.isLoading = true;
      const { data, meta } = await this.$axios.$get(
        `games?limit=${this.perPage}&page=${this.currentPage}`
      );
      this.isLoading = false;
      this.items = data;
      this.total = meta.totalItems;
    }
  }
};
</script>
