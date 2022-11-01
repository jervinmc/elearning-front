const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/classroomfiles/",
        data,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/classroomfiles/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/classroomfiles/"
        );
        commit("SET_FILES", response);
      },
      async viewByFolderid({ commit }, data ) {
        const response = await this.$axios.$get(
          `/classroomfiles-folderid/${data}/`
        );
        commit("SET_FILES", response);
      },
  };
  
  export default actions;
  