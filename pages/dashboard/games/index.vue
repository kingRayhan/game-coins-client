<template>
  <div>
    <DataTable
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      pagination-path=""
      :per-page="20"
      :sort-order="sortOrder"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
    >
      <template slot="actions" slot-scope="props">
        <div class="table-button-container">
          <button class="button" @click="editRow(props.rowData)">
            <b-icon icon="trash-can" type="is-danger" />
          </button>
          <button class="button" @click="deleteRow(props.rowData)">
            <b-icon icon="lead-pencil" />
          </button>
        </div>
      </template>
    </DataTable>

    <DataTablePagination
      ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    />
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
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
