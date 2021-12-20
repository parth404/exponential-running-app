<template>
  <q-page class="bg-white">
    <div class="row justify-center">
      <div class="desktop-only absolute-center text-center col-8">
        <h2 class="titleFont">COMING SOON</h2>
        <h5>
          Our plans will be available soon. In the meanwhile you can opt for
          <span class="text-uppercase text-weight-bold"
            >one to one virtual coaching</span
          >
          and
          <span class="text-uppercase text-weight-bold"
            >one on one in person coaching</span
          >
          services
        </h5>
        <div>
          <q-btn
            size="lg"
            class="btn-grad"
            to="/coaching"
            label="Explore Services"
          />
        </div>
      </div>
    </div>
    <div class="row justify-center full-width mobile-only absolute-center">
      <div class="col-9">
        <h4 class="text-center titleFont">COMING SOON</h4>
        <p>
          Our plans will be available soon. In the meanwhile you can opt for
          <span class="text-uppercase text-weight-bold"
            >one to one virtual coaching</span
          >
          and
          <span class="text-uppercase text-weight-bold"
            >one on one in person coaching</span
          >
          services
        </p>
        <div class="text-center">
          <q-btn
            dense
            to="/coaching"
            label="Explore Services"
            class="btn-grad"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
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

.titleFont {
  font-family: "Faster One", cursive;
  color: #52c099;
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
