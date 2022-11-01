<template>
  <div class="pa-10">
    <div class="text-h5">
      <v-row>
        <v-col>
          <b>Enrolled Students</b>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-data-table
        class="pa-5"
        :headers="headers"
        :items="student_class_data"
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("classes/viewStudentClass",this.$route.query.code);
  },
  methods: {
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
  computed: {
    ...mapState("classes", ["student_class_data"]),
  },
};
</script>

<style>
</style>