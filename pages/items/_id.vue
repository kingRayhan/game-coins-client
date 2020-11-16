<template>
  <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
    <div class="col-span-5">
      <img
        class="w-full"
        src="https://images.unsplash.com/photo-1593442607435-e4e34991b210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80"
        alt=""
      />

      <div class="my-4">
        <h2 class="text-3xl">Mobile Legends</h2>

        <p class="mb-3">
          PERINGATAN: Metode pembayaran ShopeePay hanya tersedia untuk Pengguna
          Seluler (Mobile). Harap pastikan bahwa aplikasi Shopee Anda telah
          diperbarui dan memiliki saldo ShopeePay yang mencukupi sebelum
          melakukan top up.
        </p>

        <p>
          Top up ML Diamond hanya dalam hitungan detik! Cukup masukan Username
          MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan
          pembayaran, dan Diamond akan secara langsung ditambahkan ke akun
          Mobile Legends Anda.
        </p>
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
              v-for="coin in coins"
              :key="coin.id"
              class="border-2 p-4 text-center rounded cursor-pointer"
              @click="selectedCoin = coin.id"
              :class="{
                'border-gray-500 bg-gray-500 text-white':
                  selectedCoin == coin.id
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
      selectedCoin: 1,
      coins: [
        {
          id: 1,
          label: "100 uc",
          price: 100
        },
        {
          id: 2,
          label: "200 uc",
          price: 458
        },
        {
          id: 3,
          label: "300 uc",
          price: 745
        },
        {
          id: 4,
          label: "400 uc",
          price: 145
        },
        {
          id: 5,
          label: "500 uc",
          price: 145
        },
        {
          id: 6,
          label: "600 uc",
          price: 145
        },
        {
          id: 7,
          label: "700 uc",
          price: 145
        },
        {
          id: 8,
          label: "800 uc",
          price: 145
        },
        {
          id: 9,
          label: "900 uc",
          price: 145
        },
        {
          id: 10,
          label: "1000 uc",
          price: 145
        }
      ]
    };
  },
  computed: {
    price() {
      return this.coins.find(i => i.id == this.selectedCoin).price;
    }
  }
};
</script>
