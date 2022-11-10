<template>
  <v-app dark>
    <v-navigation-drawer
      color="secondary"
      dark
      v-if="$route.name != 'login' && $route.name != 'index' && $auth.loggedIn && $route.name != 'contact'"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div>
        <v-img src="/images/logo.png" height="50" width="50"></v-img>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in $auth.user.account_type == 'Student'
            ? items
            : items_admin"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div align="end">
          <v-row>
            <v-col align="center" class="pb-10">
                <v-img src="/images/logo.png" height="100" width="100"></v-img>
            </v-col>
          </v-row>
        </div>
        <v-divider color="white" class="pt-1"></v-divider>
      </template>
    </v-navigation-drawer>
    <!-- is not logged in yet -->
    <v-app-bar
      color="white"
      v-if="$route.name == 'login' || $route.name == 'about' || $route.name == 'index' || $route.name == 'register' || $route.name == 'contact' "
      :clipped-left="clipped"
      fixed
      app
    >
      <div align="start">
        <v-img
          class="pointer"
          src="/images/logo.png"
          height="60"
          width="100"
          contain
          @click="goIndex"
        />
      </div>
      <v-spacer />
      <!-- <div
        :class="
          $route.name == 'contact'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('contact')"
      >
        Contact Us
      </div> -->
      <div
        :class="
          $route.name == 'login'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('about')"
        v-if="!$auth.loggedIn"
      >
        About
      </div>
      <!-- <div :class="$route.name=='client-profiles' ? 'px-10 pointer secondary--text' : 'px-10 pointer'">Travel Requirements</div> -->
      <div
        :class="
          $route.name == 'login'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('login')"
        v-if="!$auth.loggedIn"
      >
        Login
      </div>
      <div class="px-10 pointer" v-if="!$auth.loggedIn">
        <v-btn dark depressed color="secondary" @click="pushRoute('register')">
          Sign up
        </v-btn>
      </div>
      <div class="px-10 pointer" v-else>
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
     
      </div>
    </v-app-bar>
    <v-app-bar v-else :clipped-left="clipped" fixed app>
      <div class="text-h5">
        <b>Welcome to e-learning!</b>
      </div>
      <v-spacer></v-spacer>
        <v-col cols="auto">
        <v-avatar
              size="60"
              color="grey"
              class="white--text pointer"
              >
                  <v-img :src="$auth.user.image">
                  </v-img>
              </v-avatar
            >
      </v-col>
      <div v-if="$auth.loggedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-col v-bind="attrs" v-on="on">
              <div>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</div>
              <div>{{ $auth.user.account_type }}</div>
            </v-col>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title class="pointer" @click="goToAccount()"
                >My Account</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="pointer" @click="$auth.logout()"
                >Logout</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <div class="px-10 pointer">
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div> -->
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToAccount(){
      location="/account"
    },
    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
      ],
      items_admin: [
        // {
        //   icon: "mdi-apps",
        //   title: "Dashboard",
        //   to: "/",
        // },
        {
          icon: "mdi-chart-bubble",
          title: "List of Class",
          to: "/admin/classes",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Classroom Folders",
          to: "/folder",
        },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Settings",
        //   to: "/admin/settings",
        // },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Help",
        //   to: "/admin/help",
        // },
      ],
      items: [
        // {
        //   icon: "mdi-apps",
        //   title: "Dashboard",
        //   to: "/",
        // },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Notification",
        //   to: "/students/notification",
        // },
        {
          icon: "mdi-chart-bubble",
          title: "Classes",
          to: "/students/classes",
        },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "TO-DO",
        //   to: "/students/todo",
        // },
        {
          icon: "mdi-chart-bubble",
          title: "Offline Files",
          to: "/students/offline",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Classroom Folders",
          to: "/folder",
        },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Settings",
        //   to: "/students/settings",
        // },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Help",
        //   to: "/help",
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
