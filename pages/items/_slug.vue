<template>
  <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
    <div class="col-span-12 md:col-span-5">
      <img
        v-if="data.cover"
        class="w-full"
        :src="data.cover"
        :alt="data.title"
      />

      <div class="my-4">
        <h2 class="text-3xl">{{ data.title }}</h2>

        <p class="mb-3" v-html="data.body"></p>
      </div>
    </div>
    <div class="col-span-12 md:col-span-7">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(handleProcessCheckout)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <b-field
              :type="errors.length ? 'is-danger' : null"
              :message="errors[0]"
            >
              <b-input
                placeholder="Player ID"
                size="is-large"
                icon="account"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
                v-model="orderData.playerId"
              />
            </b-field>
          </ValidationProvider>

          <div class="card">
            <div class="card-header">
              <div class="card-header-title">{{ data.title }} Top Up</div>
            </div>
            <div class="card-content">
              <div class="grid grid-cols-3 gap-2">
                <div
                  v-for="(coin, index) in data.coins"
                  :key="coin.id"
                  class="border-2 p-4 text-center rounded cursor-pointer"
                  @click="selectedCoin = index"
                  :class="{
                    'border-gray-500 bg-gray-500 text-white':
                      selectedCoin == index
                  }"
                >
                  {{ coin.label }}
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <h1 class="text-xl">Price: {{ price }} (BDT)</h1>
            </div>
          </div>

          <div class="card mt-5">
            <div class="card-header">
              <div class="card-header-title">
                Your Information
              </div>
            </div>
            <div class="card-content">
              <div class="mb-4">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <b-field
                    :type="errors.length ? 'is-danger' : null"
                    :message="errors[0]"
                  >
                    <b-input
                      placeholder="Your name"
                      size="is-medium"
                      icon="account"
                      :type="errors.length ? 'is-danger' : null"
                      :message="errors[0]"
                      v-model="orderData.customerName"
                    />
                  </b-field>
                </ValidationProvider>
              </div>

              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <b-field
                  :type="errors.length ? 'is-danger' : null"
                  :message="errors[0]"
                >
                  <b-input
                    placeholder="Your email address"
                    size="is-medium"
                    icon="email"
                    :type="errors.length ? 'is-danger' : null"
                    :message="errors[0]"
                    v-model="orderData.customerEmail"
                  />
                </b-field>
              </ValidationProvider>
            </div>
          </div>

          <div class="mt-5">
            <b-button native-type="submit" type="is-primary">
              Process Checkout
            </b-button>
          </div>
          <!--  -->
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-game",
  head() {
    return {
      title: this.data.title
    };
  },
  mounted() {
    this.orderData.game = this.data.title;
    this.orderData.price = this.data.coins[0].price;
    this.orderData.coin = this.data.coins[0].label;
    this.orderData.gameCover = this.data.cover;
  },
  data() {
    return {
      selectedCoin: 0,
      orderData: {
        price: "",
        game: "",
        coin: "",
        customerName: "",
        customerEmail: "",
        playerId: ""
      }
    };
  },
  computed: {
    price() {
      if (!this.data.coins) return 0;
      return this.data.coins[this.selectedCoin].price;
    }
  },
  methods: {
    handleProcessCheckout() {
      this.$store.commit("order/SET_ORDER_DATA", this.orderData);
      this.$router.push("/checkout");
    }
  },
  watch: {
    selectedCoin(index) {
      this.orderData.coin = this.data.coins[index].label;
      this.orderData.price = this.data.coins[index].price;
    }
  },
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`games/${params.slug}`);
    return { data };
  }
};
</script>
