<template>
  <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
    <div class="col-span-5">
      <img
        v-if="data.cover"
        class="w-full"
        :src="data.cover"
        :alt="data.title"
      />

      <div class="my-4">
        <h2 class="text-3xl">{{ data.title }}</h2>

        <p class="mb-3" v-text="data.body"></p>
      </div>
    </div>
    <div class="col-span-7">
      <b-field>
        <b-input placeholder="Player ID" size="is-large" icon="account">
        </b-input>
      </b-field>

      <div class="card">
        <div class="card-header">
          <div class="card-header-title">
            Pilih Nominal Top Up
          </div>
        </div>
        <div class="card-content">
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(coin, index) in data.coins"
              :key="coin.id"
              class="border-2 p-4 text-center rounded cursor-pointer"
              @click="selectedCoin = index"
              :class="{
                'border-gray-500 bg-gray-500 text-white': selectedCoin == index
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
          <b-field>
            <b-input placeholder="Your name" size="is-medium" icon="account">
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Your email address"
              size="is-medium"
              icon="email"
            >
            </b-input>
          </b-field>

          <b-button type="is-primary">Buy now</b-button>
        </div>
      </div>
      <!--  -->

      <div class="card"></div>

      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCoin: 0
    };
  },
  computed: {
    price() {
      if (!this.data.coins) return 0;

      return this.data.coins[this.selectedCoin].price;
    }
  },
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`games/${params.slug}`);
    return { data };
  }
};
</script>
