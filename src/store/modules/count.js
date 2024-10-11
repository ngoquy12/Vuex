const countModule = {
  state: {
    count: 10,
  },

  //   Nơi xử lý các hàm đồng bộ
  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },
  },

  actions: {},

  getters: {
    doubleCount: (state) => state.count * 2,
  },
};

export default countModule;
