<template>
  <div>
    <v-card class="pa-16">
      <div></div>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <div>Code</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  disabled
                  v-model="register.code"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12">
              <div>Class Name</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.class_name"
                ></v-text-field>
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
import Edit from './Edit.vue';
export default {
  components: { Edit },
  computed: {
    ...mapState("classes", ["classes_data"]),
    // residents(){
    //   return this.users.filter(data=>data.account_type=='Resident')
    // }
  },
  props: ["account_type"],
  auth: false,
  created(){
    let r = (Math.random() + 1).toString(36).substring(7);
    this.register.code = r;
    this.$store.dispatch("classes/viewClassByAdmin");
  },
  data() {
    return {
      selectedItem:{},
      addForm:false,
      editForm:false,
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
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      if(this.classes_data.filter(data=>data.code==this.register.code).length>0){
        alert('Code is already exists.')
        return
      }
      this.isLoaded = true;
      try {
        this.register.prof_id = this.$auth.user.id
        await this.$store.dispatch("classes/add", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.$emit("refresh");
        this.$emit('cancel');
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