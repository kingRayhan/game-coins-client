<template>
  <div class="columns my-12">
    <div class="column is-6">
      <Card title="Create new admin">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(handleCreateAdmin)">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <b-field
                label="Name"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-input placeholder="Name" v-model="form.name" />
              </b-field>
            </ValidationProvider>

            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <b-field
                label="Email"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-input
                  placeholder="Email address"
                  type="email"
                  v-model="form.email"
                />
              </b-field>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <b-field
                label="Select Role"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-select placeholder="Select Role" v-model="form.role">
                  <option value="ADMIN">Admin</option>
                  <option value="MODERATOR">Moderator</option>
                </b-select>
              </b-field>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <b-field
                label="Password"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-input
                  placeholder="Password"
                  v-model="form.password"
                  type="password"
                />
              </b-field>
            </ValidationProvider>

            <div class="mt-3">
              <b-button native-type="submit" type="is-primary">Save</b-button>
            </div>
          </form>
        </ValidationObserver>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Create new title"
  },
  layout: "admin",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        role: "MODERATOR"
      }
    };
  },
  methods: {
    async handleCreateAdmin() {
      const loading = this.$buefy.loading.open();

      try {
        await this.$axios.$post("users", this.form);
        loading.close();
        this.$router.push({ name: "dashboard-users" });
      } catch (error) {
        loading.close();
        this.$buefy.snackbar.open({
          message: error.response.data.message,
          type: "is-danger",
          position: "is-bottom"
        });
      }
    }
  }
};
</script>
