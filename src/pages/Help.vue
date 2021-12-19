<template>
  <q-page class="bg-white">
    <div>
      <div>
        <q-btn
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
          <q-icon color="primary" name="keyboard_arrow_up" />
        </q-btn>
      </div>
      <q-banner class="desktop-only q-mb-xl cta-header1 text-center">
        <h4 class="text-uppercase text-weight-bold" style="letter-spacing: 4px">
          Need Help?
        </h4>
      </q-banner>
      <q-banner
        class="mobile-only cta-header1 text-center"
        style="height: 12vh"
      >
        <h6 class="no-margin text-uppercase text-weight-medium">Need Help?</h6>
      </q-banner>
      <div
        class="
          row
          desktop-only
          text-primary
          justify-center
          q-gutter-y-lg q-pb-xl
        "
      >
        <div class="col-8">
          <h5 class="text-primary text-uppercase">
            Curious about how much you can improve using EXPONENTIAL RUNNING?
          </h5>
          <p class="text-body1">
            To determine your current VO2 Max value (Your level of fitness
            starting point) please put the recent race time. Once we know this
            value, we will be able to calculate how much improvement you can
            make over the weeks leading up to your race.
          </p>
          <p class="text-body1 text-red">
            *A marathon time of four+ hours may NOT be an accurate indicator of
            your training pace. In this case a 5K or 10K time may be a much
            better indication of your fitness level and training pace.<br />If
            you've never run a 5k or 10k go to a local track and run 4 laps
            (1600m) or run by yourself A MILE Race approximately (1609meters),
            and enter that time. Do go at your fastest pace, but don't bust
            yourself to squeeze every last second from yourself. It will not
            give you a better plan and you don't want to start your training
            already wasted!!
          </p>
          <div class="row items-center justify-start">
            <div class="col-4">
              <h4 class="no-margin q-pb-md titleFont text-left">
                RACE <br />ESTIMATOR
              </h4>
              <h6 class="text-body1 text-primary no-margin">
                Enter your recent race time
              </h6>
              <div class="q-gutter-md row help">
                <q-select
                  label="Select Distance"
                  label-color="primary"
                  color="primary"
                  input-color="primary"
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  outlined
                  v-model="model"
                  :options="distanceOptions"
                  style="width: 100%"
                  class="drop"
                />
              </div>
              <q-input
                outlined
                color="primary"
                label="Recent Race Time"
                label-color="primary"
                class="q-pt-md"
                input-style=" color:primary"
                placeholder="HH:MM:SS"
                v-model="timeWithSeconds"
                mask="fulltime"
                :rules="['fulltime']"
              >
                <template v-slot:append>
                  <q-icon
                    name="access_time"
                    class="text-primary cursor-pointer"
                  >
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        class="bg-white"
                        v-model="timeWithSeconds"
                        with-seconds
                        format24h
                        mask="HH*mm**ss"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-btn
                @click="estimator"
                class="no-margin btn-grad-header text-h6"
              >
                CHECK</q-btn
              >
            </div>
          </div>
          <div class="row">
            <div class="col"><h6>Your Current VO2 Max</h6></div>
            <div class="col"><h6>Your Estimated VO2 Max</h6></div>
          </div>
        </div>
      </div>
      <div class="mobile-only">
        <q-card
          class="cta1 text-center full-width text-uppercase text-primary"
          style="
            border-radius: 20px;
            box-shadow: 0 3px 10px rgb(1, 86, 134);
            bottom: 30px;
          "
        >
          <h5 class="no-margin titleFont text-primary q-pt-sm">
            RACE<br />
            ESTIMATOR
          </h5>
          <span class="text-white text-caption2"
            >Enter your recent race time</span
          >
          <div class="row vo2">
            <q-select
              dense
              label="Select Distance"
              label-color="primary"
              color="primary"
              input-color="primary"
              transition-show="jump-up"
              transition-hide="jump-up"
              outlined
              v-model="model"
              :options="distanceOptions"
              style="width: 100%"
              class="q-pa-sm drp"
              content-class="bg-red"
            />
          </div>
          <q-input
            outlined
            dense
            color="primary"
            label="Recent Race Time"
            label-color="primary"
            class="q-pa-sm"
            input-style=" color:primary"
            placeholder="HH:MM:SS"
            v-model="timeWithSeconds"
            mask="fulltime"
            :rules="['fulltime']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="text-primary cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time
                    class="bg-white"
                    v-model="timeWithSeconds"
                    with-seconds
                    format24h
                    mask="HH*mm**ss"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-btn size="md" class="dense btn-grad-header" @click="estimator"
            >CHECK</q-btn
          >
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "PageIndex",
  data() {
    return {
      raceData: {
        vDot: null,
        estimatedTime: null,
        currentTime: null,
      },
      autoplay: true,
      timeWithSeconds: "",
      slide: ref(1),
      group: ref(null),
      model: null,
      runXp: "",
      age: null,
      sex: "",
      wghtUnits: "",
      goalDistance: "",
      aerobicActivity: "",
      speedOrEndurance: "",
      raceDistance: "",
      terrain: "",
      beenTrained: "",
      dateOfRace: "",
      frequency: "",
      longrunDuration: "",
      longrunDay: "",
      heartRate: "",
      gender: [
        { label: "MALE", value: "MALE", color: "green" },
        { label: "FEMALE", value: "FEMALE", color: "green" },
      ],
      units: [
        { label: "LBS", value: "LBS", color: "green" },
        { label: "KGS", value: "KGS", color: "green" },
      ],
      experience: [
        { label: "Less than 1 year", value: "1- years", color: "green" },
        { label: "More than 1 year", value: "1+ years", color: "green" },
        { label: "More than 3 years", value: "3+ years", color: "green" },
      ],
      goal: [
        { label: "5K", value: "5K", color: "green" },
        { label: "10K", value: "10K", color: "green" },
        { label: "HALF MARATHON", value: "HALF MARATHON", color: "green" },
        { label: "10 MILES", value: "10 MILES", color: "green" },
        { label: "25K", value: "25K", color: "green" },
        { label: "FULL MARATHON", value: "FULL MARATHON", color: "green" },
      ],
      options: [
        { label: "Yes I have raced before", value: "yes", color: "green" },
        { label: "No, I am new to racing", value: "no", color: "red" },
      ],
      yesOrNo: [
        { label: "Yes", value: "yes", color: "green" },
        { label: "No", value: "no", color: "red" },
      ],
      dayOption: [
        { label: "SATURDAY", value: "SATURDAY", color: "green" },
        { label: "SUNDAY", value: "SUNDAY", color: "green" },
      ],
      haveYou: [
        { label: "NEVER", value: "0", color: "green" },
        { label: "MORE THAN ONCE", value: "1+", color: "green" },
        { label: "MORE THAN ONCE", value: "3+", color: "green" },
      ],
      terrainOptions: [
        { label: "MODERATE HILLS", value: "MODERATE HILLS", color: "green" },
        { label: "MOSTLY HILLS", value: "MOSTLY HILLS", color: "green" },
        { label: "NO HILLS", value: "NO HILLS", color: "green" },
      ],
      enduranceOption: [
        { label: "ENDURANCE", value: "ENDURANCE", color: "green" },
        { label: "SPEED", value: "SPEED", color: "green" },
        { label: "BOTH", value: "BOTH", color: "green" },
      ],
      distanceOptions: [
        { label: "1 MILE", value: "mile" },
        { label: "5 KM", value: "5K" },
        { label: "10 KM", value: "10K" },
        { label: "15 KM", value: "15K" },
        { label: "HALF MARATHON", value: "halfMarathon" },
        { label: "MARATHON", value: "marathon" },
      ],
      step: ref(1),
      tab: "premium",
      wizard: false,

      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",
    };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    estimator() {
      // let now = moment();
      let distance = this.model.value;
      const timeData = this.raceTimeData;
      this.raceData.currentTime = moment
        .duration(this.timeWithSeconds)
        .asSeconds();
      // console.log("needle", currentTime);
      // let vTime = moment(timeData[i][distance], "HH:mm:ss");
      // let duration = moment.duration(endTime.diff(startTime));
      // console.log(duration._milliseconds);

      const mapped = timeData.map((x) =>
        moment.duration(x[distance]).asSeconds()
      );
      // console.log(mapped);

      // const needle = 8;
      // let numbers = mapped;

      // function isClosest(value) {
      //   return value >= 10;
      // }

      // const output = numbers.filter((a, b) => {
      //   return Math.abs(currentTime - a) - Math.abs(currentTime - b);
      // });

      // console.log(output[0]);

      let counts = mapped;
      let goal = this.raceData.currentTime;

      var closest = counts.reduce(function (prev, curr) {
        return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
      });

      let nearestIndex = mapped.indexOf(closest);
      this.raceData.vDot = timeData[nearestIndex].vDot;
      this.wizard = true;
    },
  },
  computed: {
    ...mapGetters(["raceTimeData"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Faster+One&display=swap");

.wizard > .q-tab__label {
  font-size: 20px;
}

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

.box1 .btn-grad:hover {
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
  transform: scale(1.2);
}

.btn-grad-header {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #1a5475;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #f8982d 0%,
    #fdc635 51%,
    #96f5d8 100%
  );
}

.btn-grad-header:hover {
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
  transform: scale(1.1);
}

.box {
  border-radius: 20px;
  transition: 0.2s all;
  height: 300px;
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}

.box1 {
  border-radius: 20px;
  transition: 0.2s all;
  height: 12em;
  width: 11em;
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}

.box-wrap:hover .box {
  filter: blur(2px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.box-wrap:hover .box:hover {
  transform: scale(1.1);
  filter: blur(0px);
  opacity: 1;
}

.cta1 {
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}

.cta-header1 {
  background: linear-gradient(-45deg, #113448, #17455f, #1d5677, #256c96);
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;
  color: #f4ed3b;
}

.cta-text {
  color: #2e7c61;
}

.money {
  color: white;
}

.mobileText {
  font-size: 12px;
}
</style>
