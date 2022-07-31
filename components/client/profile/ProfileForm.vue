<template>
  <div>
    <v-row>
      <v-col class="px-10" cols="6">
        <v-sheet height="80vh">
          <div align="center" class="pt-10">
            <span class="text-h6 secondary--text"><b>Profile</b></span>
          </div>
          <v-row class="pt-0">
            <v-col cols="auto">
              <div align="center">
                <v-avatar
                  ><v-img
                    src="https://e7.pngegg.com/pngimages/436/585/png-clipart-computer-icons-user-account-graphics-account-icon-vector-icons-silhouette.png"
                  ></v-img
                ></v-avatar>
              </div>
                <v-btn color="black"  plain :to="'/client/profile/edit'"  ><span class="pointer">Edit Account</span></v-btn>
            </v-col>
            <v-col>
              <div>
                Name
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.firstname"
                ></v-text-field>
              </div>
              <div>
                Email
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.email"
                ></v-text-field>
              </div>
              <div>
                Mobile Number
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.mobile_number"
                ></v-text-field>
              </div>
              <div>
                Address
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.address"
                ></v-text-field>
              </div>
              <div>
                <v-row>
                  <v-col>
                    Date of Birth
                    <v-text-field
                      v-model="$auth.user.birthdate"
                      outlined
                      readonly
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    Gender
                    <v-text-field
                      v-model="$auth.user.gender"
                      outlined
                      readonly
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet v-if="false">
          <div align="center" class="pt-10">
            <span class="text-h6 secondary--text"><b>Booking History</b></span>
          </div>
          <div>
            <v-data-table
              class="pa-5"
              :headers="headers"
              :items="items"
              :loading="isLoading"
            >
              <template v-slot:loading>
                <v-skeleton-loader
                  v-for="n in 5"
                  :key="n"
                  type="list-item-avatar-two-line"
                  class="my-2"
                ></v-skeleton-loader>
              </template>
              <template #[`item.opt`]="{ item }">
                <v-menu offset-y z-index="1">
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click.stop="editItem(item)">
                      <v-list-item-content>
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click.stop="deleteItem(item)">
                      <v-list-item-content>
                        <v-list-item-title>Delete</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </div>
        </v-sheet>
        <div v-else align="center">
            <v-img src="/images/bookVector.jpg" height="450" width="650"></v-img>
            <div>
                <v-btn color="secondary" outlined class="rounded-lg">Proceed</v-btn>
            </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "Jervin Macalawa",
        email: "jmacalawapersonal@gmail.com",
        number: "09056949242",
        address: "Julugan 4 tanza, cavite",
        birthdate: "October 04, 1999",
        gender: "Male",
      },
      items: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Reference Type", value: "reference_type" },
        { text: "Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>