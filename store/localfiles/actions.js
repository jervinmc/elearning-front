const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/localfiles/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/localfiles/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/localfiles/"
        );
        commit("SET_FILE", response);
      },
  };
  
  export default actions;
  