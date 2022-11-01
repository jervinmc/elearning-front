<template>
  <div>
    <v-card class="pa-16">
      <div></div>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <div>File Name</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.file_name"
                ></v-text-field>
              </div>
            </v-col>
            <div>
              <v-col>
                <input
                  type="file"
                  id="fileInput"
                  ref="file"
                  @change="onFileUpload"
                />
              </v-col>
            </div>
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
      file:'',
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
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.file = e;
    },
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      var form_data = new FormData();
      if (this.file != null && this.file != "") {
          form_data.append("files", this.file);
        }
        form_data.append("file_name", this.register.file_name);
        form_data.append("user_id", this.$auth.user.id);
        form_data.append("folder_id", this.$route.query.id);
        form_data.append("author", `${this.$auth.user.firstname} ${this.$auth.user.lastname}`);
        alert(`${this.$auth.user.firstname} ${this.$auth.user.lastname}`)
      this.isLoaded = true;
      try {
        await this.$store.dispatch("localfiles/add", form_data);
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