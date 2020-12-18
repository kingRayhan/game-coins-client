export const state = () => ({
  orderData: {}
});

export const mutations = {
  SET_ORDER_DATA: (state, data) => (state.orderData = data),
  CLEAR: state => {
    state.orderData = {};
  }
};

export const actions = {
  async sendOrder({ commit }, data) {
    try {
      await this.$axios.$post("orders", data);
      commit("CLEAR");
    } catch (error) {
      window.alert(JSON.stringify(error, undefined, 4));
    }
  }
};
