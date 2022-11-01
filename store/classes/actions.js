const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/classes/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  customer ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/classes/`,
        customer
      );
      response.customer = customer;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/classes/"
        );
        commit("SET_CLASSES", response);
      },
      async viewClassByAdmin({ commit }, ) {
        const response = await this.$axios.$get(
          "/classes-admin/"
        );
        commit("SET_CLASSES", response);
      },
      async viewStudentClass({ commit },data ) {
        const response = await this.$axios.$get(
          `/student-class/${data}/`
        );
        commit("SET_CLASSES_STUDENT", response);
      },
  };
  
  export default actions;
  