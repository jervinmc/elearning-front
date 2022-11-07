<template>
  <div>
    <v-card class="pa-16">
      <div></div>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <div>Folder Name</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.folder_name"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12">
              <div>Category</div>
              <div>
                <v-select
                  :rules="standardRules"
                  outlined
                  dense
                  :items="['Modules','Activity']"
                  v-model="register.category"
                ></v-select>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div align="end">
        <v-btn text @click="cancel"> Close </v-btn>
        <v-btn color="primary" @click="submitHandlerRegister">
          Save Changes
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import * as uuid from "uuid";
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
import { mapState, mapActions } from "vuex";
import validations from "@/utils/validations";
export default {
  computed: {
    ...mapState("users", ["user_residents"]),
    // residents(){
    //   return this.users.filter(data=>data.account_type=='Resident')
    // }
  },
  props: ["account_type"],
  auth: false,
  data() {
    return {
      userList: [],
      departMenu: false,
      ...validations,
      e1: 1,
      isLoading: false,
      register: {
        firstname: "",
        lastname: "",
        gender: "",
        is_active: true,
        gender: "",
        date_recorded: "",
        email: "",
        confirm_email: "",
        mobile_number: "",
        birthdate: "",
        address: "",
        province: "",
        account_type: "Resident",
        city: "",
        barangay: "",
        password: "",
        confirm_password: "",
      },
      isLoaded: false,
      ...validations,
      isValid: false,
      isRegister: false,
      // users: {
      //   email: "",
      //   password: "",
      // },
    };
  },
  created() {
   
    this.register.certificate_id = uuid.v4();
    console.log(this.$auth);
    this.$store.dispatch("users/viewUserResident");
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      this.isLoaded = true;
      try {
        await this.$store.dispatch("folder/add", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.$emit("cancel");
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;
    },
    selectRegister() {
      if (this.isRegister) this.isRegister = false;
      else this.isRegister = true;
    },
  },
};
</script>

<style>
</style>