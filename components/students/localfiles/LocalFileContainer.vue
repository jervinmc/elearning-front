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
          <b>Your Local Files</b>
        </v-col>
        <v-col align="end">
          <v-btn outlined @click="addForm = true">Upload File</v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="pt-5">
       <v-data-table
          dense
          :headers="headers"
          :items="file_data"
          item-key="name"
          class="elevation-1"
        >
        <template #[`item.action`]="{ item }">
           <div @click="downloadFile(item)" class="pointer">
            <v-icon>mdi-download</v-icon> Download
           </div>
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
    this.$store.dispatch("localfiles/view");
  },
  methods: {
    downloadFile(file){
        location=`/${file.files}`
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
        { text: "File Name", value: "file_name" },
        { text: "Actions", value: "action" },
        ,
      ],
      editForm: false,
      addForm: false,
    };
  },
  components: { Add, Edit },
  computed: {
    ...mapState("localfiles",['file_data'])
  },
};
</script>

<style>
</style>