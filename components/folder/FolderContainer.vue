<template>
  <div class="pa-5">
    <v-dialog v-model="addForm" width="500">
      <add @cancel="cancelForm" />
    </v-dialog>
     <v-dialog v-model="uploadForm" width="500">
     <upload @cancel="cancelForm" />
    </v-dialog>
    <v-dialog v-model="editForm">
      <edit
        @cancel="cancelForm"
        :selectedItem="selectedItem"
        @refresh="refresh"
      />
    </v-dialog>

    <div class="py-5">
        <v-row>
            <v-col class="text-h5">
               <b> Folders </b>
            </v-col>
            <v-col align="end" v-if="!isClicked">
                <v-btn outlined @click="addForm = true" class="secondary" dark>Add Folder</v-btn>
            </v-col>
            <v-col v-else align="end">
                <v-btn outlined @click="uploadForm = true" class="secondary" dark>Upload File</v-btn>
            </v-col>
        </v-row>
    </div>
    <div v-if="!isClicked">
      <v-row class="pa-0 no-gutters">
        <v-spacer />
        <v-col class="pa-0 pt-5" align="end" cols="3">
          <div >
            <v-text-field
            class="rounded-lg"
            hide-details=""
              dense
              placeholder="search"
              outlined
              append-icon="mdi-magnify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="folder_data.length > 0" >
        <v-col cols="6" v-for="data in folder_data" :key="data">
          <v-card elevation="5" class="pa-5 rounded-lg">
            <v-row>
              <v-col cols="auto">
                <v-icon> mdi-folder </v-icon>
              </v-col>
              <v-col class="pointer">
                <div
                  @click="openFolder(data)"
                >
                    {{data.folder_name}}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div v-else align="center">
        No folder found.
      </div>
    </div>
    <div v-else>
      <div class="py-5">
        <v-card class="pa-5 rounded-lg" dark color="secondary">
         Folder Name: {{ $route.query.folder }}
        </v-card>
      </div>
      <div>
        <v-text-field
          placeholder="search"
          outlined
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div>
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
          <template #[`item.results`]="{ item }">
           <div >
            {{item.results*100}}%
           </div>
          </template>
          
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import Add from "./Add.vue";
import Edit from "./Edit.vue";
import {mapActions, mapState} from "vuex";
import Upload from './Upload.vue';
export default {
    components: { Add, Edit, Upload },
  computed:{
    ...mapState("folder",['folder_data']),
    ...mapState("files",['file_data'])
  },
  created() {
    this.$store.dispatch('files/viewByFolderid',this.$route.query.id)
    this.$store.dispatch('folder/view');
    if (this.$route.query.folder != undefined) this.isClicked = true;
    else return;
  },
  methods: {
    downloadFile(file){
        location=`${file.files}`
    },
    refresh(){
        this.addForm = false;
        this.$store.dispatch("classes/viewClassByAdmin")
    },
    cancelForm() {
      //   this.$store.dispatch("certificate/viewCertificate");
      this.editForm = false;
      this.addForm = false;
      this.uploadForm = false;
      this.isConfirmation = false;
    },
    openFolder(folder) {
      location = `?folder=${folder.folder_name}&&id=${folder.id}`;
    },
  },
  data() {
    return {
        uploadForm:false,
      addForm:false,
      isClicked: false,
      items: [
      ],
      headers: [
        {
          text: "Author",
          align: "start",
          sortable: false,
          value: "author",
        },
        { text: "File Name", value: "file_name" },
                { text: "Results", value: "results" },
        { text: "Actions", value: "action" },
      ],
    };
  },
};
</script>

<style>
</style>