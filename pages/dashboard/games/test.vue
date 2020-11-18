<template>
  <div>
    <DataTable
      ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      :css="css"
      pagination-path=""
      :per-page="5"
      :sort-order="sortOrder"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
    >
    </DataTable>

    <!-- <div>
      <DataTablePagination
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  //https://codepen.io/ratiw/pen/opWQKR?editors=1010
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      css: {
        tableClass: "table is-bordered is-striped",
        ascendingIcon: "fa fa-chevron-up",
        descendingIcon: "fa fa-chevron-down",
        sortHandleIcon: "fa fa-bars"
      },
      sortOrder: [
        {
          field: "name",
          sortField: "name",
          direction: "asc"
        }
      ],
      fields: [
        "__handle",
        {
          name: "name",
          title: `<span class="icon orange"><i class="fa fa-user"></i></span> Full Name`,
          sortField: "name"
        },
        {
          name: "email",
          title: "Email",
          sortField: "email"
        },
        "birthdate",
        "nickname",
        {
          name: "gender",
          title: "Gender",
          sortField: "gender"
        },
        "actions"
      ]
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    editRow(rowData) {
      //TODO: Move to edit page
      alert("You clicked edit on" + JSON.stringify(rowData));
    },
    deleteRow(rowData) {
      //TODO: delete api request
      alert("You clicked delete on" + JSON.stringify(rowData));
    },
    onLoading() {
      // this.$nuxt.$loading.start();
    },
    onLoaded() {
      // this.$nuxt.$loading.finish();
    }
  }
};
</script>
