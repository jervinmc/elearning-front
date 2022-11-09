const actions = {
  async add({ commit },  customer ) {
    // let newContactCopy = cloneObject(newContact);
    // const customerId = customer.id;
    // newContactCopy.customer = customerId;
    console.log(customer)
    const response = await this.$axios.$post(
      "/signup/",
      customer
    );
    response.customer = customer;
  },
  async edit({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.id}/`,
      customer
    );
    response.customer = customer;
  },
  async editImage({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.get('id')}/`,
      customer,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    response.customer = customer;
  },
};

export default actions;
