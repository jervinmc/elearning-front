<template>
  <div class="pa-10">
    <v-dialog v-model="addForm" width="500">
      <add @cancel="cancelForm" />
    </v-dialog>
    <v-dialog v-model="editForm">
      <edit
        @cancel="cancelForm"
        :selectedItem="selectedItem"
        @refresh="refresh"
      />
    </v-dialog>
    <div class="text-h5">
      <v-row>
        <v-col>
          <b>Your Classes</b>
        </v-col>
        <v-col align="end">
          <v-btn outlined @click="addForm = true">Join Class</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-data-table
        class="pa-5"
        :headers="headers"
        :items="enroll_data"
        :search="search"
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
              <v-list-item @click.stop="archive(item)">
                <v-list-item-content>
                  <v-list-item-title>Archive</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item @click.stop="deleteItem(item)">
                <v-list-item-content>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item-content>
              </v-list-item> -->
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  created() {
    this.$store.dispatch("enroll/viewByStudent");
  },
  methods: {
   async archive(item){
        this.isLoaded = true;
        var a = item
        a.status='Archived'

      try {
        await this.$store.dispatch("enroll/edit", a);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.$emit("cancel");
        location.reload()
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;
    },
    refresh(){
        this.addForm = false;
        this.$store.dispatch("classes/viewClassByAdmin")
    },
    cancelForm() {
      //   this.$store.dispatch("certificate/viewCertificate");
      this.editForm = false;
      this.addForm = false;
      this.isConfirmation = false;
    },
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Code", value: "code" },
        { text: "Class Name", value: "class_name" },
        { text: "Actions", value: "opt" },
        ,
      ],
      editForm: false,
      addForm: false,
    };
  },
  components: { Add, Edit },
  computed: {
    ...mapState("enroll", ["enroll_data"]),
  },
};
</script>

<style>
</style>