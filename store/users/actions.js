const actions = {
  async addUser({ commit },  customer ) {
    // let newContactCopy = cloneObject(newContact);
    // const customerId = customer.id;
    // newContactCopy.customer = customerId;
    console.log(customer)
    const response = await this.$axios.$post(
      "/signup/",
      customer
    );
    // newContact.customer = customer;
    // newContact.id = response.id;
    // newContact.ref_id = response.ref_id;
    response.customer = customer;
    // console.log("New customer before commit", newContact);
    // commit("ADD_CUSTOMER_CONTACT", response);
  },
  async editUser({ commit },  customer ) {
    // let newContactCopy = cloneObject(newContact);
    // const customerId = customer.id;
    // newContactCopy.customer = customerId;
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.id}/`,
      customer
    );
    // newContact.customer = customer;
    // newContact.id = response.id;
    // newContact.ref_id = response.ref_id;
    response.customer = customer;
    // console.log("New customer before commit", newContact);
    // commit("ADD_CUSTOMER_CONTACT", response);
  },
};

export default actions;
