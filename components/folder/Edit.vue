<template>
  <div>
    <v-card class="pa-16">
      <v-row>
        <v-col>
          <div>Blotter Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Blotter ID</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.blotter_id"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Date Recorded</div>
              <div>
                <div class="text-h5">
                  <v-menu
                    ref="departMenu"
                    v-model="departMenu"
                    :close-on-content-click="false"
                    :return-value.sync="register.date_recorded"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="register.date_recorded"
                        outlined
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="register.date_recorded"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="departMenu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.departMenu.save(register.date_recorded)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Complaint</div>
              <v-textarea outlined dense v-model="register.complaint"> </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Place of Incident</div>
              <v-select
                outlined
                dense
                v-model="register.h_purok"
                :items="['Purok 1', 'Purok 2', 'Purok 3']"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>Complainant Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Name</div>
              <div>
                <v-text-field
                  placeholder="Complainant Name"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Age</div>
              <div>
                <v-text-field
                  placeholder="Age"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_age"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Contact</div>
              <div>
                <v-text-field
                  placeholder="Complainant Contact"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_contact"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Complainant Address</div>
              <div>
                <v-text-field
                  placeholder="Complainant Addresss"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_address"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>Defendant Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Name</div>
              <div>
                <v-text-field
                  placeholder="Complainant Name"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Age</div>
              <div>
                <v-text-field
                  placeholder="Age"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_age"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Contact</div>
              <div>
                <v-text-field
                  placeholder="Complainant Contact"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_contact"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Defendant Address</div>
              <div>
                <v-text-field
                  placeholder="Defendant Addresss"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_address"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div align="end">
        <v-btn text @click="cancel"> Cancel </v-btn>
        <v-btn color="primary" @click="submitHandlerRegister"> Submit </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import validations from "@/utils/validations";
var cloneDeep = require("lodash.clonedeep");
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

export default {
  props: ["selectedItem"],
  auth: false,
  data() {
    return {
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
      users: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.register = cloneDeep(this.selectedItem)
    
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      this.isLoaded = true;
      try {
        await this.$store.dispatch("blotter/editBlotter", this.register);
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