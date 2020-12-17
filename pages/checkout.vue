<template>
  <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
    <div class="col-span-5">
      <Card title="Game info">
        <img
          v-if="orderData.gameCover"
          class="w-full"
          :src="orderData.gameCover"
          :alt="orderData.game"
        />

        <div class="my-4">
          <h2 class="text-3xl">{{ orderData.game }}</h2>
        </div>

        <b-field label="Game">
          <b-input :value="orderData.game" disabled />
        </b-field>

        <b-field label="Coin">
          <b-input :value="orderData.coin" disabled />
        </b-field>

        <b-field label="Price">
          <b-input :value="orderData.price" disabled />
        </b-field>
        <!-- <pre>
              {{ orderData }}
            </pre
        > -->
      </Card>
    </div>
    <div class="col-span-7">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(handleProcessCheckout)">
          <Card title="Your info">
            <b-field label="Name">
              <b-input :value="orderData.customerName" disabled />
            </b-field>
            <b-field label="Email">
              <b-input :value="orderData.customerEmail" disabled />
            </b-field>
          </Card>
          <Card title="Payment info">
            <ValidationProvider rules="required" v-slot="{ errors }" tag="div">
              <b-field
                label="Bkash Transaction ID"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-input
                  type="email"
                  placeholder="Bkash Transaction ID"
                  v-model="transactionId"
                />
              </b-field>
            </ValidationProvider>

            <ValidationProvider
              rules="confirmed:transactionId"
              v-slot="{ errors }"
              tag="div"
            >
              <b-field
                label="Confirm Bkash Transaction ID"
                :type="errors.length ? 'is-danger' : null"
                :message="errors[0]"
              >
                <b-input
                  type="email"
                  placeholder="Confirm Bkash Transaction ID"
                  v-model="againTransactionId"
                />
              </b-field>
            </ValidationProvider>
          </Card>

          <div>
            <b-button size="is-medium" type="is-primary" icon-left="check">
              Order now
            </b-button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      transactionId: "",
      againTransactionId: ""
    };
  },
  methods: {
    handleProcessCheckout() {
      console.log("object");
    }
  },
  computed: mapState("order", ["orderData"])
};
</script>
