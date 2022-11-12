<template>
  <div class="pa-5">
    <v-dialog v-model="isConfirmationRename" width="500">
      <v-card class="pa-16">
        <div align="center">
          Enter Folder Name:
          <div>
            <v-text-field outlined dense v-model="editedFolder"></v-text-field>
          </div>
          <div class="pt-10">
            <v-row>
              <v-col align="center">
                <v-btn
                  color="grey"
                  class="text-capitalize rounded-xl"
                  @click="isConfirmationRename = false"
                  width="100"
                >
                  Discard
                </v-btn>
              </v-col>
              <v-col class="start">
                <v-btn
                  width="100"
                  color="secondary"
                  class="text-capitalize rounded-xl"
                  @click="submitHandlerRegisterRename"
                >
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <!-- <v-col cols="auto" v-if="!isClicked">
      <div class="pa-2">
        <v-card
          :color="isClickRename ? 'secondary' : ''"
          :dark="isClickRename ? true : false"
          @click="clickRename"
          width="80"
          height="70"
          class="pa-2"
          align="center"
        >
          <v-icon> mdi-file </v-icon>
          <div>Rename</div>
        </v-card>
      </div>
    </v-col> -->
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
          <v-btn outlined @click="addForm = true" class="secondary" dark
            >Add Folder</v-btn
          >
        </v-col>
        <v-col align="end" v-if="!isClicked" cols="auto">
          <v-btn outlined
          :color="isClickRename ? 'secondary' : ''"
          dark
          @click="clickRename"
          class="secondary" 
            >Rename</v-btn
          >
        </v-col>
        <v-col v-else align="end">
          <v-btn outlined @click="uploadForm = true" class="secondary" dark
            >Upload File</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <div v-if="!isClicked">
      <v-row class="pa-0 no-gutters">
        <v-spacer />
        <v-col class="pa-0 pt-5" align="end" cols="3">
          <div>
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
      <v-row v-if="folder_data.length > 0">
        <v-col cols="6" v-for="data in folder_data" :key="data">
          <v-card elevation="5" class="pa-5 rounded-lg"
           @click="isClickRename ? renameFolder(data) : openFolder(data)" 
          >
            <v-row>
              <v-col cols="auto">
                <v-icon> mdi-folder </v-icon>
              </v-col>
              <v-col class="pointer">
                <div>
                  {{ data.folder_name }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div v-else align="center">No folder found.</div>
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
          :headers="
            $route.query.category == 'Modules' ? headers_module : headers
          "
          :items="file_data"
          item-key="name"
          class="elevation-1"
        >
          <template #[`item.action`]="{ item }">
            <div @click="downloadFile(item)" class="pointer">
              <v-icon>mdi-download</v-icon> Download
            </div>
          </template>
          <template #[`item.percent_from`]="{ item }">
            <div>
              {{ item.results * 100 == 0 ? "" : item.percent_from }}
            </div>
          </template>
          <template #[`item.results`]="{ item }">
            <div>{{ item.results * 100 }}%</div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import Add from "./Add.vue";
import Edit from "./Edit.vue";
import { mapActions, mapState } from "vuex";
import Upload from "./Upload.vue";
export default {
  components: { Add, Edit, Upload },
  computed: {
    ...mapState("folder", ["folder_data"]),
    ...mapState("files", ["file_data"]),
  },
  created() {
    this.$store.dispatch("files/viewByFolderid", this.$route.query.id);
    this.$store.dispatch("folder/view");
    if (this.$route.query.folder != undefined) this.isClicked = true;
    else return;
  },
  methods: {
    async submitHandlerRegisterRename(){
      try {
        await this.$store.dispatch("folder/edit",{id:this.selectedItem.id,folder_name:this.editedFolder} );
        alert('Successfully saved')
        location.reload()
        // this.isAdd=false;
        // this.getAll()
      } catch (error) {
        alert(error)
      }
    },
     renameFolder(item){
      this.selectedItem = item
      this.editedFolder = item.folder_name
      this.isConfirmationRename = true
    },
    clickRename(){
      this.isClickRename=!this.isClickRename;
    },
    downloadFile(file) {
      location = `${file.files}`;
    },
    refresh() {
      this.addForm = false;
      this.$store.dispatch("classes/viewClassByAdmin");
    },
    cancelForm() {
      //   this.$store.dispatch("certificate/viewCertificate");
      this.editForm = false;
      this.addForm = false;
      this.uploadForm = false;
      this.isConfirmation = false;
    },
    openFolder(folder) {
      location = `?folder=${folder.folder_name}&&id=${folder.id}&category=${folder.category}`;
    },
  },
  data() {
    return {
      isConfirmationRename:false,
      selectedItem:{},
      isClickRename:false,
      uploadForm: false,
      addForm: false,
      isClicked: false,
      items: [],
      headers: [
        {
          text: "Author",
          align: "start",
          sortable: false,
          value: "author",
        },
        { text: "File Name", value: "file_name" },
        { text: "Results", value: "results" },
        { text: "Plagiarism from", value: "percent_from" },
        { text: "Actions", value: "action" },
      ],
      headers_module: [
        {
          text: "Author",
          align: "start",
          sortable: false,
          value: "author",
        },
        { text: "File Name", value: "file_name" },
        { text: "Actions", value: "action" },
      ],
    };
  },
};
</script>

<style>
</style>