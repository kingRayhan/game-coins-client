<template>
  <div>
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <h2 class="text-3xl pl-4 uppercase">Order Details</h2>
    <div class="grid grid-cols-12 gap-5 my-4 p-4 md:p-0">
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
                  <b-radio
                    v-model="status"
                    name="status"
                    native-value="PENDING"
                  >
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
                <b-input
                  size="is-large"
                  placeholder="Pass token"
                  class="mr-4"
                  v-model="gamePass"
                />
                <b-button
                  size="is-medium"
                  type="is-primary"
                  icon-left="check"
                  @click="sendPass"
                >
                  Send Token
                </b-button>
              </div>
            </Card>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Update order"
  },
  name: "order-details",
  layout: "admin",
  async mounted() {
    await this.loadData();
  },
  data() {
    return {
      orderId: "",
      coin: "",
      customerEmail: "",
      customerName: "",
      game: "",
      playerId: "",
      price: "",
      transactionId: "",
      status: "",
      gamePass: "",
      isLoading: false
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
      this.isLoading = true;
      const { data } = await this.$axios.get(`orders/${this.$route.params.id}`);
      this.orderId = data.id;
      this.coin = data.coin;
      this.customerEmail = data.customerEmail;
      this.customerName = data.customerName;
      this.game = data.game;
      this.playerId = data.playerId;
      this.price = data.price;
      this.transactionId = data.transactionId;
      this.status = data.status;
      this.isLoading = false;
    },
    sendPass() {
      this.isLoading = true;
      this.$axios
        .$post(`orders/send-pass/${this.orderId}/${this.gamePass}`)
        .then(async () => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: "Game pass successfully mailed to the customer!",
            type: "is-success"
          });
          this.gamePass = "";

          this.status = "DONE";
          await this.updateStatus();
        })
        .catch(e => {
          this.isLoading = false;
        });
    }
  }
};
</script>
