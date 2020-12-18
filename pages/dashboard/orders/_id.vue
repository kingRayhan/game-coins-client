<template>
  <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
    <div class="col-span-12 md:col-span-5">
      <Card title="Game info">
        <div class="my-4">
          <h2 class="text-3xl">{{ game }}</h2>
        </div>

        <b-field label="Game">
          <b-input :value="game" disabled />
        </b-field>

        <b-field label="Coin">
          <b-input :value="coin" disabled />
        </b-field>

        <b-field label="Price">
          <b-input :value="price" disabled />
        </b-field>
      </Card>
    </div>
    <div class="col-span-12 md:col-span-7">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(handleProcessCheckout)">
          <Card title="Your info">
            <b-field label="Name">
              <b-input :value="customerName" disabled />
            </b-field>
            <b-field label="Email">
              <b-input :value="customerEmail" disabled />
            </b-field>
          </Card>

          <Card title="Order status">
            <div
              class="is-flex is-justify-content-space-between is-align-items-center"
            >
              <div>
                <b-radio v-model="status" name="status" native-value="PENDING">
                  Pending
                </b-radio>
                <b-radio v-model="status" name="status" native-value="DONE">
                  Done
                </b-radio>
              </div>
              <b-button type="is-success" @click="updateStatus">
                Update Status
              </b-button>
            </div>
          </Card>

          <Card title="Send pass">
            <div class="is-flex is-align-items-center">
              <b-input size="is-large" placeholder="Pass token" class="mr-4" />
              <b-button
                size="is-medium"
                type="is-primary"
                icon-left="check"
                native-type="submit"
              >
                Send Token
              </b-button>
            </div>
          </Card>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-details",
  layout: "admin",
  async mounted() {
    await this.loadData();
  },
  data() {
    return {
      coin: "",
      customerEmail: "",
      customerName: "",
      game: "",
      playerId: "",
      price: "",
      transactionId: "",
      status: ""
    };
  },
  methods: {
    async updateStatus() {
      try {
        await this.$axios.$put(`orders/${this.$route.params.id}`, {
          status: this.status
        });
        await this.loadData();
      } catch (error) {
        console.log(JSON.stringify(error, undefined, 4));
      }
    },
    async loadData() {
      const { data } = await this.$axios.get(`orders/${this.$route.params.id}`);
      this.coin = data.coin;
      this.customerEmail = data.customerEmail;
      this.customerName = data.customerName;
      this.game = data.game;
      this.playerId = data.playerId;
      this.price = data.price;
      this.transactionId = data.transactionId;
      this.status = data.status;
    }
  }
};
</script>
