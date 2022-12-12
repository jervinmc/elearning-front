<template>
  <div class="pa-10">
    <v-dialog v-model="isDelete" width="500">
      <v-card class="pa-10">
        <div class="pa-10">Are you sure you want to delete this item?</div>
        <div>
          <v-row>
            <v-col align="end">
              <v-btn outlined @click="isDelete = false">Cancel</v-btn>
            </v-col>
            <v-col>
              <v-btn color="secondary" @click="submitHandlerDelete"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
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
        <v-col align="end" v-if="!isViewed">
          <v-btn outlined @click="addForm = true">Add Class</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-data-table
        class="pa-5"
        :headers="isViewed ? headers_enroll : headers"
        :items="isViewed ? enroll_data : classes_data"
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
              <!-- <v-list-item @click.stop="editItem(item)">
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item> -->
              <v-list-item @click.stop="viewStudent(item)">
                <v-list-item-content>
                  <v-list-item-title>View Students</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click.stop="deleteItem(item)">
                <v-list-item-content>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="isViewed" @click.stop="archiveItem(item)">
                <v-list-item-content>
                  <v-list-item-title>Archive</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
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
    if (this.$route.query.student != undefined) this.isViewed = true;
    if (this.isViewed) {
      this.$store.dispatch("enroll/viewByCode", this.$route.query.student);
    } else {
      this.$store.dispatch("classes/viewClassByAdmin");
    }
  },
  methods: {
    submitHandlerDelete() {
      this.$store.dispatch("classes/delete", { id: this.selectedItem.id });
      this.$store.dispatch("enroll/deleteEnroll", {
        code: this.selectedItem.code,
      });
      this.$store.dispatch("enroll/viewByCode", this.$route.query.student);
      this.$store.dispatch("classes/viewClassByAdmin");
      alert("Successfully Deleted");
      this.isDelete = false
      // location.reload()
      // location.reload()
    },
    deleteItem(item) {
      this.isDelete = true;
      this.selectedItem = item;
    },
    archiveItem(item) {
      // this.selectedItem = item
      // this.selectedItem.status ='Archived'
      this.$store.dispatch("enroll/edit", {
        id: item.id,
        status: "Archived",
      });
    },
    viewStudent(item) {
      location = `/admin/classes?student=${item.code}`;
    },
    refresh() {
      this.addForm = false;
      this.$store.dispatch("classes/viewClassByAdmin");
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
      isDelete: false,
      selectedItem: {},
      isViewed: false,
      headers_enroll: [
        { text: "Student ID", value: "student_id" },
        { text: "Student Name", value: "name" },
        { text: "Actions", value: "opt" },
        ,
      ],
      headers: [
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
    ...mapState("classes", ["classes_data"]),
    ...mapState("enroll", ["enroll_data"]),
  },
};
</script>

<style>
</style>