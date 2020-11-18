import Vue from "vue";
import { Vuetable, VuetablePagination } from "vuetable-2";

Vue.use(Vuetable);
Vue.component("DataTable", Vuetable);
Vue.component("DataTablePagination", VuetablePagination);
