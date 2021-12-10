<template>
  <q-layout class="lHh lpr lFf bg-blue-grey-1">
    <q-header elevated>
      <q-toolbar>
        <q-avatar
          class="q-my-sm mobile-only"
          square
          style="width: 4em; height: 5vh"
        >
          <img src="~assets/logo.png" fit="cover" />
        </q-avatar>
        <q-avatar
          class="q-my-sm desktop-only"
          square
          style="width: 300px; height: 60px"
        >
          <img src="~assets/logo.png" fit="cover" />
        </q-avatar>
        <q-space />
        <q-tabs
          class="desktop-only"
          indicator-color="accent"
          active-color="secondary"
          v-model="tab"
          shrink
          strecth
        >
          <q-route-tab
            class="no-padding"
            style="width: 80px"
            to="/"
            name="home"
            label="HOME"
          />
          <q-route-tab
            to="/why-exponential-running"
            name="why-exponential-running"
            label="WHY EXPONENTIAL RUNNING"
          />
          <q-route-tab
            to="/coaching"
            name="services"
            label="TYPES OF COACHING SERVICES"
          />
          <q-route-tab
            class="no-padding"
            to="/legal"
            style="width: 80px"
            name="legal"
            label="LEGAL"
          />
          <q-route-tab
            class="no-padding"
            style="width: 80px"
            to="/faq"
            name="faq"
            label="FAQ"
          />
          <q-route-tab
            class=""
            to="/contact"
            name="contact"
            label="CONTACT"
            style="width: 80px"
          />
          <q-route-tab
            class="no-padding"
            to="/contact"
            style="width: 50px"
            name="social1"
          >
            <q-avatar
              size="30px"
              color="blue"
              text-color="white"
              icon="facebook"
          /></q-route-tab>
          <q-route-tab
            class="no-padding"
            style="width: 50px"
            to="/contact"
            name="social2"
          >
            <q-avatar
              class="insta"
              size="30px"
              text-color="white"
              icon="fab fa-instagram"
            />
          </q-route-tab>
        </q-tabs>
        <q-btn
          flat
          round
          dense
          @click="
            {
              drawerRight = !drawerRight;
            }
          "
          icon="menu"
          class="q-mr-sm mobile-only"
        />
        <q-drawer
          v-model="drawerRight"
          side="right"
          class="bg-primary"
          :width="300"
          :breakpoint="500"
        >
          <q-scroll-area class="fit">
            <q-tabs
              class="mobile-only"
              vertical
              indicator-color="accent"
              active-color="secondary"
              v-model="tab"
              shrink
              strecth
            >
              <q-tab class="no-padding q-mb-xl">
                <q-avatar
                  class="q-my-sm mobile-only"
                  square
                  style="width: 7em; height: 60px"
                >
                  <img src="~assets/logo.png" fit="cover" /> </q-avatar
              ></q-tab>
              <q-route-tab class="no-padding" to="/" name="home" label="HOME" />
              <q-route-tab
                to="/why-exponential-running"
                name="why-exponential-running"
                label="WHY EXPONENTIAL RUNNING"
              />
              <q-route-tab
                to="/coaching"
                name="services"
                label="TYPES OF COACHING SERVICES"
              />
              <q-route-tab
                class="no-padding"
                to="/legal"
                name="legal"
                label="LEGAL"
              />
              <q-route-tab
                class="no-padding"
                to="/faq"
                name="faq"
                label="FAQ"
              />
              <q-route-tab
                class=""
                to="/contact"
                name="contact"
                label="CONTACT"
              />
              <q-route-tab class="no-padding" to="/contact" name="social1">
                <q-avatar
                  size="30px"
                  color="blue"
                  text-color="white"
                  icon="facebook"
              /></q-route-tab>
              <q-route-tab class="no-padding" to="/contact" name="social2">
                <q-avatar
                  class="insta"
                  size="30px"
                  text-color="white"
                  icon="fab fa-instagram"
                />
              </q-route-tab>
              <q-toolbar class="text-center">
                <q-toolbar-title class="text-caption q-py-lg"
                  >Copyright © 2021 Exponential Running</q-toolbar-title
                >
              </q-toolbar>
            </q-tabs>
          </q-scroll-area>
        </q-drawer>
      </q-toolbar>
    </q-header>
    <q-footer elevated>
      <q-toolbar class="text-center">
        <q-toolbar-title class="text-caption q-py-lg"
          >Copyright © 2021 Exponential Running</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      tab: "",
      drawerRight: false,
    };
  },
  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.active:hover {
  color: yellow;
}
.drp > .q-item__section > .q-item__label:hover {
  color: #f4ed3b;
}

.insta {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.menu-list .q-item {
  border-radius: 32px 0 0 32px;
}
</style>
