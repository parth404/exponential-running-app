<template>
  <q-page class="background-hills">
    <div>
      <!-- <q-btn
        @click="toTop"
        round
        color="primary"
        class="fixed-bottom-right animate-pop"
        style="
          margin: 0 15px 15px 0;
          z-index: 10000;
          box-shadow: 0 2px 20px #52c099;
        "
      >
        <q-icon color="secondary" name="keyboard_arrow_up" />
      </q-btn> -->
    </div>
    <q-banner class="desktop-only q-mb-xl cta-header1 text-center">
      <h4 class="text-uppercase text-weight-bold" style="letter-spacing: 4px">
        Contact Us
      </h4>
    </q-banner>
    <q-banner class="mobile-only cta-header1 text-center" style="height: 12vh">
      <h6 class="no-margin text-uppercase text-weight-medium">Contact Us</h6>
    </q-banner>
    <div
      class="row desktop-only text-primary text-center justify-center q-pb-xl"
    >
      <div class="col-8">
        <q-card class="my-card">
          <q-card-section horizontal>
            <q-img class="col-5" src="~/assets/run.gif" />
            <q-card-section class="full-width">
              <h6 class="text-left no-margin">
                We always love to hear from you.
              </h6>
              <p class="text-left">
                If you have any questions or you would like to know more about
                Exponential Running, Send us your message and we will be in
                touch with you promptly.
              </p>
              <q-form
                class="q-mt-xl q-gutter-y-sm"
                greedy
                @submit="onSubmit"
                @reset="onReset"
              >
                <q-input
                  outlined
                  v-model="name"
                  label="Your name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please enter your name',
                  ]"
                />
                <q-input
                  outlined
                  type="email"
                  label="Email"
                  required
                  v-model="email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please enter your email',
                  ]"
                />
                <q-input
                  outlined
                  type="textarea"
                  label="Message"
                  v-model="message"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div>
                  <q-btn label="Submit" type="submit" class="btn-grad" />
                </div>
              </q-form>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div
      class="row mobile-only text-primary text-center justify-center q-pb-xl"
    >
      <div class="col-11">
        <q-card class="my-card">
          <q-card-section>
            <q-img src="~/assets/run.gif" />
            <q-card-section class="full-width">
              <p class="text-left text-weight-bold text-body1 no-margin">
                We love hearing from you.
              </p>
              <p class="text-left text-body2">
                If you have any questions or you would like to know more about
                Exponential Running, Send us your message and we will be in
                touch with you promptly.
              </p>
              <q-form
                class="q-mt-sm q-gutter-y-xs text-body1"
                greedy
                @submit="onSubmit"
                @reset="onReset"
              >
                <q-input
                  outlined
                  v-model="name"
                  label="Your name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please enter your name',
                  ]"
                />
                <q-input
                  outlined
                  type="email"
                  label="Email"
                  required
                  v-model="email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please enter your email',
                  ]"
                />
                <q-input
                  outlined
                  type="textarea"
                  label="Message"
                  v-model="message"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div>
                  <q-btn label="Submit" type="submit" class="btn-grad" />
                </div>
              </q-form>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PageIndex",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Faster+One&display=swap");

.cta-header1 {
  background: linear-gradient(-45deg, #113448, #17455f, #1d5677, #256c96);
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;
  color: #f4ed3b;
}

.cta {
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.background-hills {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #f8982d 0%,
    #fdc635 51%,
    #96f5d8 100%
  );
}
.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #1a5475;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #52c099 0%,
    #6cf7c6 51%,
    #52c099 100%
  );
  box-shadow: 0 0 20px rgb(109, 216, 198);
  transform: scale(1.3);
}
</style>
