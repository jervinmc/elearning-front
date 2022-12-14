const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/folder/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/folder/${data.id}/`,
        data
      );
      response.data = data;
    },
    async delete({ commit },  data ) {
      const response = await this.$axios.$delete(
        `/folder/${data.id}/`,
        data
      );
      // response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/folder/"
        );
        commit("SET_FOLDER", response);
      },
  };
  
  export default actions;
  