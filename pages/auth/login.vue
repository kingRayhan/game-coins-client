<template>
  <div class="columns my-12">
    <div class="column is-6 is-offset-3">
      <div class="card">
        <div class="card-header">
          <div class="card-header-title">Login</div>
        </div>
        <div class="card-content">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(handleLogin)">
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <b-field
                  label="Email"
                  :type="errors.length ? 'is-danger' : null"
                  :message="errors[0]"
                >
                  <b-input placeholder="Email address" v-model="form.email" />
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

              <div class="mt-3 flex items-center">
                <b-button native-type="submit" type="is-primary"
                  >Login</b-button
                >
                <nuxt-link to="/auth/register" class="inline-block ml-4">
                  Register
                </nuxt-link>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Login"
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      const loading = this.$buefy.loading.open();

      try {
        await this.$auth.loginWith("local", { data: this.form });
        loading.close();
      } catch (error) {
        loading.close();
        this.$buefy.snackbar.open({
          message: error.response.data.message,
          type: "is-danger",
          position: "is-top"
        });
      }
    }
  }
};
</script>
