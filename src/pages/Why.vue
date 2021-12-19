<template>
  <q-page class="bg-white">
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
        <q-icon color="secondary" name="keyboard_arrow_up" />
      </q-btn>
    </div>
    <q-banner class="desktop-only q-mb-xl cta-header1 text-center">
      <h4 class="text-uppercase text-weight-bold">why exponential running ?</h4>
    </q-banner>
    <q-banner class="mobile-only cta-header1 text-center" style="height: 12vh">
      <h6 class="no-margin text-uppercase text-weight-medium">
        why exponential running ?
      </h6>
    </q-banner>
    <div class="desktop-only row text-center justify-center q-pb-xl">
      <div class="col-8">
        <h3 class="text-weight-regular text-uppercase titleFont">
          Our plans are different:
        </h3>
        <div class="row justify-around q-py-xl q-mt-xl">
          <div class="col-md-5 q-pr-xl">
            <p class="text-body1 text-left">
              <b class="text-h6 text-uppercase">All</b> of our plans are derived
              from the theories and practices of the most legendary distance
              running coaches and exercise scientists from around the world.
              Unlike other “cookie-cutter” training plans that just list mileage
              and a general pace, this Exponential running plans gives you
              essential specifics on how to do workouts at the right intensity
              for the most beneficial training stimuli. Furthermore, it does not
              follow a strict cycle (like most competitor’s plans), because at
              Exponential running we believe some workouts take longer to
              recover from and adapt to. Therefore sometimes recovery running
              days are extended and shortened appropriately to give you an ideal
              boost in fitness.  Most other plans do not take this kind of
              prioritization into consideration. Our Exponential running
              guideline gives you the information you need to make the plan more
              specific to your needs and the race you’re training for.<br /><br />
              We realize that great coaching is both a science and an art – and
              we’ve used this philosophy (as well as knowledge gained from our
              own careers as runners) along with experience from coaching many
              others, to create a plan that emphasizes consistent, smart
              progression: A true
              <span class="text-h6">EXPONENTIAL RUNNING</span> experience!
            </p>
          </div>
          <div class="col">
            <q-img
              src="~assets/73.jpg"
              fit="fill"
              style="border-radius: 20px"
            />
          </div>
        </div>
        <div class="q-mt-xl">
          <p class="text-h2 text-center titleFont q-my-xl q-pb-lg">
            how will i run exponentially
          </p>
          <ul class="text-body1 text-left q-gutter-y-md">
            <li class="great">
              <span class="text-h1 text-weight-bolder">G</span>
              <span
                class="q-pl-sm q-mb-md text-h2 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >oal Guidance</span
              >
            </li>
            <li class="great">
              <span class="text-h1 text-weight-bolder">R</span>
              <span
                class="q-pl-sm q-mb-md text-h2 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >elationship</span
              >
            </li>
            <li class="great">
              <span class="text-h1 text-weight-bolder">E</span>
              <span
                class="q-pl-sm q-mb-md text-h2 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >xpertise</span
              >
            </li>
            <li class="great">
              <span class="text-h1 text-weight-bolder">A</span>
              <span
                class="q-pl-sm q-mb-md text-h2 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >ccountability</span
              >
            </li>
            <li class="great">
              <span class="text-h1 text-weight-bolder">T</span>
              <span
                class="q-mb-md text-h2 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >raining Program Design</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mobile-only row text-center justify-center q-pb-xl">
      <div class="col-11">
        <h5 class="text-weight-regular text-uppercase titleFont">
          Our plans are different:
        </h5>
        <div class="row q-py-md">
          <div class="col-md-5">
            <p class="text-body2 text-left">
              <b class="text-uppercase">All</b> of our plans are derived from
              the theories and practices of the most legendary distance running
              coaches and exercise scientists from around the world. Unlike
              other “cookie-cutter” training plans that just list mileage and a
              general pace, this Exponential running plans gives you essential
              specifics on how to do workouts at the right intensity for the
              most beneficial training stimuli. Furthermore, it does not follow
              a strict cycle (like most competitor’s plans), because at
              Exponential running we believe some workouts take longer to
              recover from and adapt to. Therefore sometimes recovery running
              days are extended and shortened appropriately to give you an ideal
              boost in fitness.  Most other plans do not take this kind of
              prioritization into consideration. Our Exponential running
              guideline gives you the information you need to make the plan more
              specific to your needs and the race you’re training for.
            </p>
            <p class="text-body2 q-pt-xs text-left text-weight-regular">
              We realize that great coaching is both a science and an art – and
              we’ve used this philosophy (as well as knowledge gained from our
              own careers as runners) along with experience from coaching many
              others, to create a plan that emphasizes consistent, smart
              progression: A true
              <b>EXPONENTIAL RUNNING</b> experience!
            </p>
          </div>
          <div class="col">
            <q-img
              src="~assets/73.jpg"
              style="border-radius: 20px; height: 100%"
            />
          </div>
        </div>
        <div class="q-mt-xl">
          <h5 class="text-weight-regular text-uppercase titleFont">
            how will i run exponentially
          </h5>
          <ul class="text-body1 text-left q-pt-sm q-gutter-y-md">
            <li class="great">
              <span class="text-h3 text-weight-bolder">G</span>
              <span
                class="q-pl-xs q-mb-md text-h6 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >oal Guidance</span
              >
            </li>
            <li class="great">
              <span class="text-h3 text-weight-bolder">R</span>
              <span
                class="q-pl-xs q-mb-md text-h6 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >elationship</span
              >
            </li>
            <li class="great">
              <span class="text-h3 text-weight-bolder">E</span>
              <span
                class="q-pl-xs q-mb-md text-h6 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >xpertise</span
              >
            </li>
            <li class="great">
              <span class="text-h3 text-weight-bolder">A</span>
              <span
                class="q-pl-xs q-mb-md text-h6 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >ccountability</span
              >
            </li>
            <li class="great">
              <span class="text-h3 text-weight-bolder">T</span>
              <span
                class="q-mb-md text-h6 text-grey-8 text-weight-bold"
                style="letter-spacing: 4px"
                >raining Program Design</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row desktop-only justify-center cta q-py-xl q-my-xl">
      <div
        class="
          text-center text-h4 text-secondary
          col-8
          q-mt-xl
          text-weight-bold
          q-mb-lg
          desktop-only
        "
        style="letter-spacing: 3px; line-height: 48px"
      >
        OUR PROGRAMS EMPLOY DYNAMIC WORKOUT TECHNOLOGY AND RESOURCES, PROVIDING
        ROBUST TRAINING SYSTEMS.
      </div>
    </div>
    <div class="row justify-center mobile-only cta q-py-md q-my-md">
      <div
        class="
          text-center text-h6 text-secondary
          col-11
          q-mt-md
          text-weight-bold
          q-mb-lg
        "
      >
        <h6 class="no-margin" style="letter-spacing: 3px; line-height: 1.5em">
          OUR PROGRAMS EMPLOY DYNAMIC WORKOUT TECHNOLOGY AND RESOURCES,
          PROVIDING ROBUST TRAINING SYSTEMS.
        </h6>
      </div>
    </div>
    <div class="desktop-only row text-center justify-center q-mt-xl q-py-xl">
      <div class="col-8">
        <h3 class="text-weight-regular text-uppercase no-margin titleFont">
          Our Core Philosophy
        </h3>
        <div class="row q-py-xl q-mt-xl">
          <div class="col">
            <q-img
              src="~assets/pc-3.jpg"
              fit="fill"
              style="border-radius: 20px"
            />
          </div>
          <div class="col-md-5 q-pr-xl">
            <p
              class="
                desktop-only
                q-ml-md
                text-h6 text-weight-regular text-right
              "
            >
              We believe that endurance sport training should be centered in the
              best science available. Self-propelled motion activities are the
              most efficient means of enhancing endurance sport performance and
              general fitness. If athletes trust the process and remain
              consistent, results will materialize.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mobile-only text-center justify-center q-pt-xl q-pb-lg">
      <div class="col-11">
        <h5 class="text-weight-regular text-uppercase no-margin titleFont">
          Our Core Philosophy
        </h5>
        <div class="row q-pt-xl">
          <div class="col">
            <q-img
              src="~assets/pc-3.jpg"
              style="border-radius: 20px; height: 100%; object-fit: contain"
            />
          </div>
          <div class="q-pt-xl col-md-5">
            <p class="text-body2 text-weight-regular text-left">
              We believe that endurance sport training should be centered in the
              best science available. Self-propelled motion activities are the
              most efficient means of enhancing endurance sport performance and
              general fitness. If athletes trust the process and remain
              consistent, results will materialize.
            </p>
            <p class="q-pt-sm text-body2 text-weight-regular text-left">
              We believe that endurance sport training should be centered in the
              best science available. Self-propelled motion activities are the
              most efficient means of enhancing endurance sport performance and
              general fitness. If athletes trust the process and remain
              consistent, results will materialize.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row desktop-only text-center justify-center q-mt-md q-py-md">
      <div class="col-8 q-mb-xl q-pb-xl">
        <h3 class="text-weight-regular text-uppercase no-margin titleFont">
          Our mission
        </h3>
        <div class="row q-py-xl q-mt-xl">
          <div class="col-md-5 q-pr-xl">
            <p class="q-ml-md text-h6 text-weight-regular text-left">
              the mission of the company is to seek out the most proven
              scientific methods and technology available to provide a range
              of <span class="text-weight-bold text-uppercase"
                >cost-effective</span
              > training and coaching solutions to athletes of all levels. We
              want to build a global community of well informed endurance
              athletes. Our passion is to help prepare, support and motivate
              people to reach their personal goals.
            </p>
          </div>
          <div class="col">
            <q-img
              src="~assets/20.jpg"
              fit="fill"
              style="border-radius: 20px"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row mobile-only text-center justify-center">
      <div class="col-11 q-mb-xs q-pb-xl">
        <h5 class="text-weight-regular text-uppercase no-margin titleFont">
          Our mission
        </h5>
        <div class="row q-pt-xl">
          <div class="col-md-5">
            <p class="q-mb-md text-body2 text-weight-regular text-left">
              The mission of the company is to seek out the most proven
              scientific methods and technology available to provide a range
              of <b class="text-uppercase">cost-effective</b> training and
              coaching solutions to athletes of all levels. We want to build a
              global community of well informed endurance athletes. Our passion
              is to help prepare, support and motivate people to reach their
              personal goals.
            </p>
          </div>
          <div class="col q-pt-lg">
            <q-img
              src="~assets/20.jpg"
              style="border-radius: 20px; height: 100%; object-fit: contain"
            />
          </div>
        </div>
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
      slide: ref(1),
      group: ref(null),
      model: ref(null),
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

.box {
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: 0.2s all;
}

.box-wrap:hover .box {
  filter: blur(3px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: none;
}
.box-wrap:hover .box:hover {
  transform: scale(1.1);
  filter: blur(0px);
  opacity: 1;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
}

.coaching {
  color: #52c099;
}

.cta-header1 {
  background: linear-gradient(-45deg, #113448, #17455f, #1d5677, #256c96);
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;
  color: #f4ed3b;
}

.cta {
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}

.great:hover {
  transform: translate(20%, 0px);
  transition: transform 1.5s;
}

.great {
  transition: transform 1s;
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
</style>
