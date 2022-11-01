const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/enroll/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/enroll/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/enroll/"
        );
        commit("SET_ENROLL", response);
      },
      async viewByStudent({ commit }, ) {
        const response = await this.$axios.$get(
          "/enrolled-student/"
        );
        commit("SET_ENROLL", response);
      },
      async viewByCode({ commit }, data) {
        const response = await this.$axios.$get(
          `/enrolled-code/${data}/`
        );
        commit("SET_ENROLL", response);
      },
  };
  
  export default actions;
  