import Vue from "vue";
import {
  Vuetable,
  VuetablePagination,
  VueTablePaginationDropDown,
  VueTablePaginationInfo
} from "vuetable-2";

Vue.use(Vuetable);

Vue.component("DataTable", Vuetable);
Vue.component("DataTablePagination", VuetablePagination);
Vue.component("vuetable-pagination-dropdown", VueTablePaginationDropDown);
Vue.component("vuetable-pagination-info", VueTablePaginationInfo);
