<template>
  <div>
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <h2>
            <b-icon icon="nintendo-game-boy" />
            <span class="text-3xl">Games</span>
          </h2>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <nuxt-link
            class="button is-success"
            :to="{ name: 'dashboard-games-new' }"
          >
            New
          </nuxt-link>
        </p>
      </div>
    </nav>

    <b-table
      :data="data"
      :columns="columns"
      :bordered="true"
      :per-page="3"
      paginated
    >
    </b-table>
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          date: "2016-10-15 13:43:27",
          gender: "Male"
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          date: "2016-12-15 06:00:53",
          gender: "Male"
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          date: "2016-04-26 06:26:28",
          gender: "Female"
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          date: "2016-04-10 10:28:46",
          gender: "Male"
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          date: "2016-12-06 14:38:38",
          gender: "Female"
        }
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "first_name",
          label: "First Name"
        },
        {
          field: "last_name",
          label: "Last Name"
        },
        {
          field: "date",
          label: "Date",
          centered: true
        },
        {
          field: "gender",
          label: "Gender"
        }
      ]
    };
  },
  methods: {
    edit(row) {
      alert(JSON.stringify(row));
    },
    destroy(row) {
      alert(JSON.stringify(row));
    }
  }
};
</script>
