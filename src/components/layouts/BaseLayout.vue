<template>
  <section class="base-layout backgroundPrimary">
    <v-navigation-drawer permanent color="backgroundPrimary" overlay-color="bluePrimary">
      <template v-slot:prepend>
        <div class="pa-4">
          <h1 class="text-color-white">Projeto 7</h1>
        </div>

        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
          </v-list-item-content>

          <v-list-item-content>
            <div>
              <v-btn text icon>
                <v-icon dark>
                  logout
                </v-icon>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
          active-class="menu-active-item"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "room", link: "/dashboard" },
        { title: "Account", icon: "room", link: "/organizacoes" },
        { title: "Admin", icon: "room", link: "/admin" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.base-layout {
  height: 100%;
  width: 100%;
}

$profile-button-background: rgb(220, 220, 220);
$profile-card-background: rgb(211, 211, 211);
$profile-card-background-hover: rgb(189, 189, 189);

.profile-button {
  background-color: $profile-button-background;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: 75px;
  overflow: hidden;

  .profile-button {
    height: 100%;
    padding: 0 0.5em;
    background-color: $profile-card-background;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: $profile-card-background-hover;
    }
  }
}

.menu-active-item {
  background-color: #0265e5;
}
</style>
