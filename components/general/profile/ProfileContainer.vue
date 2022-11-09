<template>
  <div class="pa-10">
    <v-dialog v-model="editForm">
      <edit
        @cancel="cancelForm"
        :selectedItem="$auth.user"
        @refresh="refresh"
      />
    </v-dialog>
    <div class="grey--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>My Account</b>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-card class="pa-10" elevation="1" color="white">
        <div>
          <div align="center">
            <v-avatar
            
              size="100"
              color="grey"
              class="white--text pointer"
              @click="$refs.file.click()"
              >
                  <v-img :src="$auth.user.image">

                  </v-img>
              </v-avatar
            >
            <input
              class="d-none"
              type="file"
              id="fileInput"
              ref="file"
              accept="image/png, image/jpeg"
              @change="onFileUpload"
            />
            <div>
              <b>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</b>
            </div>
            <div class="grey--text">{{ $auth.user.account_type }}</div>
          </div>
        </div>
        <div class="pt-10">
          <div>
            <v-row>
              <v-col>
                <div>
                  Full Name: {{ $auth.user.firstname }}
                  {{ $auth.user.lastname }}
                </div>
                <div v-if="isEdit">
                    <v-text-field placeholder="Enter first name" dense outlined v-model="register.firstname"></v-text-field>
                </div>
                <div v-if="isEdit">
                    <v-text-field placeholder="Enter last name" dense outlined v-model="register.lastname"></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col>
                <div>Birthday: {{ $auth.user.birthdate }}</div>
                <div v-if="isEdit">
                    <v-text-field dense outlined v-model="register.birthdate"></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col>
                <div>Mobile: {{ $auth.user.mobile_number }}</div>
                <div v-if="isEdit">
                    <v-text-field dense outlined v-model="register.mobile_number"></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col>
                <div>Email: {{ $auth.user.email }}</div>
              </v-col>
            </v-row>
          </div>
          <!-- <div>
            <v-row>
              <v-col>
                <div>
                  Address: {{ $auth.user.street }} {{ $auth.user.purok }}
                  {{ $auth.user.barangay }}
                </div>
              </v-col>
            </v-row>
          </div> -->
          <v-divider></v-divider>
          <div align="end" class="pt-5">
            <v-btn @click="isEdit=true" v-if="!isEdit" color="#ffc625"
              ><v-icon>mdi-account-check</v-icon>
              <div class="pt-1">Edit Account</div>
            </v-btn>
           <div v-else>
             <v-btn @click="submitHandlerRegister" color="#ffc625"
              ><v-icon>mdi-account-check</v-icon>
              <div class="pt-1">Save Changes</div>
            </v-btn>
             <v-btn @click="isEdit=false" else color="grey"
              ><v-icon>mdi-close</v-icon>
              <div class="pt-1">Cancel</div>
            </v-btn>
           </div>
            <!-- <v-btn color="primary" @click="submitHandlerRegister">
              <v-icon>mdi-account-box-outline</v-icon>
              <div class="pt-1">My Brgy ID.</div>
            </v-btn> -->
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// import Edit from "../admin/Usermanagement/Edit.vue";
export default {
//   components: { Edit },
  methods: {
     async submitHandlerRegister() {
      this.isLoaded = true;
      try {
        this.register.id = this.$auth.user.id
        await this.$store.dispatch("users/edit", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;
    },
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      this.url =URL.createObjectURL(e);
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
       let users = new FormData();
        
        users.append('id',this.$auth.user.id)
        users.append('image',e)
        this.$store.dispatch('users/editImage',users)
      } catch (error) {
        alert(error);
        return;
      }
      this.file = e;
    },
    cancelForm() {
      this.editForm = false;
    },
    refresh() {
      location = "/account";
    },
    edit() {
      this.editForm = true;
    },
  },
  data() {
    return {
    image:'',
    isEdit:false,
      register:{},
      url:'',
      editForm: false,
      selectedItem: {},
    };
  },
};
</script>

<style>
</style>