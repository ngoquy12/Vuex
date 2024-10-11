const todoListModule = {
  state: {
    jobs: [
      {
        id: 1,
        name: "Quét nhà",
        status: false,
      },
    ],
  },

  mutations: {
    addJob(state, payload) {
      state.jobs.push(payload);
    },
  },
};

export default todoListModule;
