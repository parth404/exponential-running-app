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
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        height="55vh"
        @mouseenter="autoplay = false"
        class="desktop-only bg-primary"
      >
        <q-carousel-slide class="no-padding" :name="1">
          <q-img
            src="~assets/hp-3.jpg"
            style="height: 500px; width: 70%"
            fit="fill"
          />
          <div
            class="absolute-right"
            style="
              height: 500px;
              width: 50%;
              background: linear-gradient(
                270deg,
                rgba(17, 52, 72, 1) 6%,
                rgba(17, 52, 72, 1) 17%,
                rgba(17, 52, 72, 1) 48%,
                rgba(17, 52, 72, 0.9780287114845938) 72%,
                rgba(17, 52, 72, 0.8155637254901961) 84%,
                rgba(17, 52, 72, 0.5410539215686274) 92%,
                rgba(255, 255, 255, 0) 100%
              );
            "
          >
            <q-card
              class="
                cta1
                q-ma-xl
                text-left
                absolute-right
                q-pa-md
                text-uppercase text-secondary
              "
              style="
                width: 50%;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(82, 192, 153);
              "
            >
              <h3
                class="no-margin q-pa-md titleFont text-secondary text-center"
              >
                RACE TIME PREDICTOR
              </h3>
              <h6 class="text-white no-margin">Enter your recent race time</h6>
              <div class="q-gutter-md row vo2">
                <q-select
                  label="Select Distance"
                  label-color="secondary"
                  color="teal"
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  outlined
                  v-model="model"
                  :options="distanceOptions"
                  style="width: 100%"
                  class="drp"
                />
              </div>
              <q-input
                outlined
                color="teal"
                label="Recent Race Time"
                label-color="secondary"
                class="q-pt-md"
                input-style=" color:white"
                placeholder="HH:MM:SS"
                v-model="timeWithSeconds"
                mask="fulltime"
                :rules="['fulltime']"
              >
                <template v-slot:append>
                  <q-icon
                    name="access_time"
                    class="text-secondary cursor-pointer"
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
                class="no-margin btn-grad-header text-h6"
                @click="wizard = true"
              >
                CHECK</q-btn
              >
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="2">
          <q-img
            src="~assets/hp-1.jpg"
            style="height: 500px; width: 70%"
            fit="fill"
          />
          <div
            class="absolute-right"
            style="
              height: 500px;
              width: 50%;
              background: linear-gradient(
                270deg,
                rgba(17, 52, 72, 1) 6%,
                rgba(17, 52, 72, 1) 17%,
                rgba(17, 52, 72, 1) 48%,
                rgba(17, 52, 72, 0.9780287114845938) 72%,
                rgba(17, 52, 72, 0.8155637254901961) 84%,
                rgba(17, 52, 72, 0.5410539215686274) 92%,
                rgba(255, 255, 255, 0) 100%
              );
            "
          >
            <q-card
              class="
                cta1
                q-ma-xl
                text-left
                absolute-right
                q-pa-md
                text-uppercase text-secondary
              "
              style="
                width: 50%;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(82, 192, 153);
              "
            >
              <h3
                class="no-margin q-pa-md titleFont text-secondary text-center"
              >
                FOR SEASONED RUNNERS
              </h3>
              <h5 class="q-pt-sm no-margin text-center text-white">
                SEEKING PERSONAL PEAK PERFORMANCE
              </h5>
              <div class="q-mt-xs row justify-center">
                <q-btn
                  @click="scrollTo('runningMenu')"
                  class="q-mt-sm btn-grad-header text-h5"
                  >EXPLORE</q-btn
                >
              </div>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="3">
          <q-img
            src="~assets/hp-2.jpg"
            style="height: 500px; width: 70%"
            fit="fill"
          />
          <div
            class="absolute-right"
            style="
              height: 500px;
              width: 50%;
              background: linear-gradient(
                270deg,
                rgba(17, 52, 72, 1) 6%,
                rgba(17, 52, 72, 1) 17%,
                rgba(17, 52, 72, 1) 48%,
                rgba(17, 52, 72, 0.9780287114845938) 72%,
                rgba(17, 52, 72, 0.8155637254901961) 84%,
                rgba(17, 52, 72, 0.5410539215686274) 92%,
                rgba(255, 255, 255, 0) 100%
              );
            "
          >
            <q-card
              class="
                cta1
                q-ma-xl
                text-left
                absolute-right
                q-pa-md
                text-uppercase text-secondary
              "
              style="
                width: 50%;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(82, 192, 153);
              "
            >
              <h3
                class="no-margin q-pa-md titleFont text-secondary text-center"
              >
                CUSTOMISED & INDIVIDUAL
              </h3>
              <h5 class="q-pt-sm no-margin text-center text-white">
                See how our plans are tailored for you
              </h5>
              <div class="q-mt-xl row justify-center">
                <q-btn
                  @click="scrollTo('custom')"
                  class="q-mt-lg btn-grad-header text-h5"
                  >EXPLORE</q-btn
                >
              </div>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="4">
          <q-img
            src="~assets/hp-4.jpg"
            style="height: 500px; width: 70%"
            fit="fill"
          />
          <div
            class="absolute-right"
            style="
              height: 500px;
              width: 50%;
              background: linear-gradient(
                270deg,
                rgba(17, 52, 72, 1) 6%,
                rgba(17, 52, 72, 1) 17%,
                rgba(17, 52, 72, 1) 48%,
                rgba(17, 52, 72, 0.9780287114845938) 72%,
                rgba(17, 52, 72, 0.8155637254901961) 84%,
                rgba(17, 52, 72, 0.5410539215686274) 92%,
                rgba(255, 255, 255, 0) 100%
              );
            "
          >
            <q-card
              class="
                cta1
                q-ma-xl
                text-left
                absolute-right
                q-pa-md
                text-uppercase text-secondary
              "
              style="
                width: 50%;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(82, 192, 153);
              "
            >
              <h3
                class="no-margin q-pa-md titleFont text-secondary text-center"
              >
                EXPONENTIAL RUNNING
              </h3>
              <h5 class="q-pt-md no-margin text-center text-white">
                Make The Winner's Choice
              </h5>
              <div class="q-mt-xl row justify-center">
                <q-btn
                  @click="scrollTo('plans')"
                  class="q-mt-lg btn-grad-header text-h5"
                  >START NOW</q-btn
                >
              </div>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-carousel
        animated
        v-model="slide"
        swipeable
        infinite
        :autoplay="autoplay"
        height="60vh"
        @mouseenter="autoplay = false"
        class="mobile-only"
        style="background: rgba(17, 52, 72, 0)"
      >
        <q-carousel-slide class="no-padding" :name="1">
          <q-img src="~assets/hp-3.jpg" style="height: 35vh" fit="fill" />
          <div
            class="absolute-bottom q-mb-xl text-white text-left"
            style="height: 35vh"
          >
            <q-card
              class="
                cta1
                text-center
                absolute-center
                text-uppercase text-secondary
              "
              style="
                width: 95vw;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(1, 86, 134);
              "
            >
              <h5 class="no-margin titleFont text-secondary q-pt-sm">
                RACE TIME<br />
                ESTIMATOR
              </h5>
              <span class="text-white text-caption2"
                >Enter your recent race time</span
              >
              <div class="row vo2">
                <q-select
                  label="Select Distance"
                  label-color="secondary"
                  color="teal"
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
                color="teal"
                label="Recent Race Time"
                label-color="secondary"
                class="q-pa-sm"
                input-style=" color:white"
                placeholder="HH:MM:SS"
                v-model="timeWithSeconds"
                mask="fulltime"
                :rules="['fulltime']"
              >
                <template v-slot:append>
                  <q-icon
                    name="access_time"
                    class="text-secondary cursor-pointer"
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
              <q-btn size="md" class="dense btn-grad-header">CHECK</q-btn>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="2">
          <q-img src="~assets/hp-1.jpg" style="height: 30vh" fit="fill" />

          <div
            class="absolute-bottom text-white text-left"
            style="height: 35vh"
          >
            <q-card
              class="cta1 text-center text-uppercase q-mx-sm text-secondary"
              style="
                max-height: 45vh;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(1, 86, 134);
              "
            >
              <h5
                class="
                  no-margin
                  q-px-xl q-pt-md
                  titleFont
                  text-secondary
                  q-py-md
                "
              >
                FOR SEASONED RUNNERS
              </h5>
              <p class="text-white text-cta1 no-margin q-pb-md">
                SEEKING PERSONAL PEAK PERFORMANCE
              </p>
              <q-btn
                size="md"
                @click="scrollTo('runningMenu1')"
                class="dense btn-grad-header"
                >EXPLORE</q-btn
              >
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="3">
          <q-img src="~assets/hp-2.jpg" style="height: 30vh" fit="fill" />
          <div
            class="absolute-bottom text-white text-left"
            style="height: 35vh"
          >
            <q-card
              class="cta1 text-center text-uppercase q-mx-sm text-secondary"
              style="
                max-height: 42vh;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(1, 86, 134);
              "
            >
              <h5 class="no-margin q-px-xl q-pt-md titleFont text-secondary">
                CUSTOMISED <br />& INDIVIDUAL
              </h5>
              <p class="text-white text-cta1 no-margin q-pa-md">
                See how our plans are tailored for you
              </p>
              <q-btn
                size="md"
                @click="scrollTo('runningMenu1')"
                class="dense btn-grad-header"
                >EXPLORE</q-btn
              >
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="no-padding" :name="4">
          <q-img src="~assets/hp-4.jpg" style="height: 30vh" fit="fill" />
          <div
            class="absolute-bottom text-white text-left"
            style="height: 35vh"
          >
            <q-card
              class="cta1 text-center text-uppercase q-mx-sm text-secondary"
              style="
                max-height: 40vh;
                border-radius: 20px;
                box-shadow: 0 3px 10px rgb(1, 86, 134);
              "
            >
              <h5 class="no-margin q-px-xl q-pt-md titleFont text-secondary">
                exponential running
              </h5>
              <p class="text-white text-cta1 no-margin q-py-md">
                make the winners choice
              </p>
              <q-btn
                size="md"
                @click="scrollTo('plans')"
                class="dense btn-grad-header"
                >EXPLORE</q-btn
              >
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="row desktop-only text-center justify-center q-py-xl" id="intro">
      <div class="col-8">
        <h3 class="desktop-only text-upercase titleFont">
          TRAIN WITH A PURPOSE
        </h3>
        <div class="row q-py-xl q-mt-xl">
          <div class="col q-py-xl q-pr-xl text-weight-">
            <p class="text-h6 text-left">
              Decided it is time to take the next step to go chase that big
              running goal by following a marathon plan?
            </p>
            <p
              class="
                text-body1
                q-mr-xl q-pr-xl q-pt-lg
                text-left text-weight-regular
              "
            >
              We want to make you RUN EXPONENTIALLY and bring a smile to your
              face as you cross the finish line knowing you just ran faster than
              you ever thought you could.
            </p>
          </div>
          <div class="col">
            <q-img
              src="~assets/24.jpg"
              style="border-radius: 20px; height: 30vh"
            />
          </div>
        </div>
        <p class="text-body1 text-left">
          The purpose of coaching is to take you further in your training than
          you can take yourself. We excel at helping runners . . .
        </p>
        <ul class="text-body1 text-left">
          <li>
            <span class="text-weight-bold">Train for</span> first marathon, half
            marathon,10k, 5k,Middle distance,short distance or ultra.
          </li>
          <li>
            <span class="text-weight-bold">Run faster.</span> Achieve a personal
            record (PR) or Boston qualifying time.
          </li>
          <li>
            <span class="text-weight-bold">Run further.</span> Safely train for
            back to back marathons and mileage increases while minimizing
            injuries.
          </li>
          <li>
            <span class="text-weight-bold">Get your fitness back.</span>
            Systematically build your fitness to its pre-injury level.
          </li>
          <li>
            <span class="text-weight-bold">Run more efficiently. </span> Fine
            tune your nutrition, fueling, and form.
          </li>
          <li>
            <span class="text-weight-bold"
              >Implementation of race day strategy.</span
            >
            Your coach will help you evaluate the course and formulate a solid
            plan for getting through the tough parts of your marathon.
          </li>
          <li>
            <span class="text-weight-bold">Stay motivated </span> -develop
            positive habits that last a lifetime.
          </li>
        </ul>
      </div>
    </div>

    <div class="row mobile-only text-center justify-center" id="intro">
      <div class="col-11">
        <h4 class="text-uppercase titleFont">TRAIN WITH A PURPOSE</h4>
        <div class="row">
          <div class="col-md-5 text-weight-">
            <p class="text-h6 text-left">
              Decided it is time to take the next step to go chase that big
              running goal by following a marathon plan?
            </p>
            <p class="text-body2 q-pt-lg text-left text-weight-regular">
              We want to make you <b>RUN EXPONENTIALLY</b> and bring a smile to
              your face as you cross the finish line knowing you just ran faster
              than you ever thought you could.
            </p>
          </div>
          <div class="col">
            <q-img
              src="~assets/24.jpg"
              style="border-radius: 20px; height: 30vh"
            />
          </div>
        </div>
        <p class="text-body2 q-pt-md text-left">
          The purpose of coaching is to take you further in your training than
          you can take yourself. We excel at helping runners . . .
        </p>
        <ul class="text-body2 q-gutter-y-sm text-left">
          <li>
            <span class="text-weight-bold">Train for</span> first marathon, half
            marathon,10k, 5k,Middle distance,short distance or ultra.
          </li>
          <li>
            <span class="text-weight-bold">Run faster.</span> Achieve a personal
            record (PR) or Boston qualifying time.
          </li>
          <li>
            <span class="text-weight-bold">Run further.</span> Safely train for
            back to back marathons and mileage increases while minimizing
            injuries.
          </li>
          <li>
            <span class="text-weight-bold">Get your fitness back.</span>
            Systematically build your fitness to its pre-injury level.
          </li>
          <li>
            <span class="text-weight-bold">Run more efficiently. </span> Fine
            tune your nutrition, fueling, and form.
          </li>
          <li>
            <span class="text-weight-bold"
              >Implementation of race day strategy.</span
            >
            Your coach will help you evaluate the course and formulate a solid
            plan for getting through the tough parts of your marathon.
          </li>
          <li>
            <span class="text-weight-bold">Stay motivated </span> -develop
            positive habits that last a lifetime.
          </li>
        </ul>
      </div>
    </div>
    <div class="desktop-only q-mt-xl q-pt-md">
      <div class="q-gutter-y-md justify-center" id="runningMenu">
        <div class="row justify-center cta1 q-py-xl q-my-xl">
          <div class="col-9 text-center q-mb-lg q-pr-xl q-mr-xl">
            <q-img
              src="~assets/running-menu.png"
              width="1000px"
              style="height: 200px"
            />
          </div>
          <div class="text-center text-h5 text-white col-8 q-mb-xl q-pb-md">
            Choose your plan, plug in your personal data and training
            preferences. Using the information you provide, EXPONENTIAL RUNNING
            will individualize the exact plan for your target event based on
            your fitness, estimated VO2max, and training selections.
          </div>
        </div>

        <div class="row mobile-only justify-center cta1 q-py-xl q-my-xl">
          <div class="text-center q-mb-lg">
            <q-img src="~assets/running-menu.png" width="90vw" />
          </div>
          <div
            class="
              text-center text-body1 text-weight-bold text-white
              col-10
              q-mb-md q-pb-md
            "
          >
            Choose your plan, plug in your personal data and training
            preferences. Using the information you provide, EXPONENTIAL RUNNING
            will individualize the exact plan for your target event based on
            your fitness, estimated VO2max, and training selections.
          </div>
        </div>

        <!-- <q-dialog v-model="wizard">
          <q-card style="width: 700px; max-width: 80vw" class="text-uppercase">
            <q-form>
              <q-card-section>
                <div class="text-h6">What type of a runner are you?</div>
              </q-card-section>
              <q-card-section>
                <div>1) Since how many years have you been running?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="experience"
                    type="radio"
                    v-model="runXp"
                  />
                </div>
                <div>2) Select your sex</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="gender"
                    type="radio"
                    v-model="sex"
                  />
                </div>
                <div>3) Please enter your age in years</div>
                <div class="q-pa-md">
                  <q-input
                    style="width: 20vw"
                    type="number"
                    v-model="age"
                    dense
                  />
                </div>
                <div>4) Weight units</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="units"
                    type="radio"
                    v-model="wghtUnits"
                  />
                </div>
                <div>5) Goal race distance</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="goal"
                    type="radio"
                    v-model="goalDistance"
                  />
                </div>
                <div>
                  6) Have you been aerobically active in the last 3 months
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="aerobicActivity"
                  />
                </div>
                <div>
                  7) DO YOU FEEL YOU NEED TO BE BETTER AT ENDURANCE , SPEED OR
                  BOTH ?
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="enduranceOption"
                    type="radio"
                    v-model="speedOrEndurance"
                  />
                </div>
                <div>8) IS YOUR RACE DISTANCE SHORTER THEN 16 KMS?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="raceDistance"
                  />
                </div>
                <div>9) IS YOUR RACE ON A HILLY TERRAIN?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="terrainOptions"
                    type="radio"
                    v-model="terrain"
                  />
                </div>
                <div>
                  10) HAVE U EVER COMPLETED EXPONENTIAL RUNNING TYPE TRAINING
                  PLAN?
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="haveYou"
                    type="radio"
                    v-model="beenTrained"
                  />
                </div>
                <div>11) DATE OF RACE</div>
                <div class="q-pa-md">
                  <q-input type="date" v-model="dateOfRace" dense />
                </div>
                <div>12) TRAINING RUNS PER WEEK</div>
                <div class="q-pa-md">
                  <q-input type="number" v-model="frequency" dense />
                </div>
                <div>13) STARTING LONG RUN DURATION</div>
                <div class="q-pa-md">
                  <q-input type="time" v-model="longrunDuration" dense />
                </div>
                <div>14) DAY OF LONG RUN</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="dayOption"
                    type="radio"
                    v-model="longrunDay"
                  />
                </div>
                <div>15) HEART RATE TRAINING</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="heartRate"
                  />
                </div>
              </q-card-section>
            </q-form>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Submit"
                class="btn-grad"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog> -->
        <q-dialog v-model="wizard">
          <q-card
            style="width: 90vw; max-width: 90vw"
            class="text-uppercase estimator"
          >
            <q-form>
              <q-card-section class="text-center">
                <h4 class="no-margin text-secondary">
                  Curious about how much you can improve using EXPONENTIAL
                  RUNNING?
                </h4>
                <h6 class="no-margin text-white">
                  Enter a current race result below to see your potential!
                </h6>
                <q-separator />
              </q-card-section>
              <q-card-section class="text-warning text-center">
                <p class="q-pa-md text-body1">
                  *A marathon time of four+ hours may NOT be an accurate
                  indicator of your training pace. In this case a 5K or 10K time
                  may be a much better indication of your fitness level and
                  training pace. If you've never run a 5k or 10k go to a local
                  track and run 4 laps as fast as possible (1600m) or run by
                  yourself A MILE Race approximately (1609meters), and enter
                  that time. If you have chosen the Newbies plan u just have to
                  answer few questions which are on Beginners VO2 Max Interview
                  questions.
                </p>
              </q-card-section>
              <q-separator />
              <q-card-section class="q-px-xl text-left">
                <h5 class="no-margin text-secondary">
                  Your Predicted Race Results
                </h5>
                <p class="text-body1 text-white">
                  Below are your predicted VO2 Max values along with your
                  current and predicted race times. These times are based on of
                  Fully Completing a Minimum of a 24-week Exponential Running
                  plan. We have found that many times our clients out-perform
                  these predictions and run even faster after completing
                  EXPONENTIAL RUNNING plan.
                </p>
              </q-card-section>
              <q-separator />
              <q-card-section class="row q-px-xl">
                <div class="col">
                  <h5 class="text-secondary">Your Current VO2 Max</h5>
                  :
                  <h4>28</h4>
                </div>
                <div class="col">
                  <h5 class="text-secondary">Your Predicted VO2 Max</h5>
                  :
                  <h4>30</h4>
                </div>
              </q-card-section>
              <q-card-section>
                <div>1) Since how many years have you been running?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="experience"
                    type="radio"
                    v-model="runXp"
                  />
                </div>
                <div>2) Select your sex</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="gender"
                    type="radio"
                    v-model="sex"
                  />
                </div>
                <div>3) Please enter your age in years</div>
                <div class="q-pa-md">
                  <q-input
                    style="width: 20vw"
                    type="number"
                    v-model="age"
                    dense
                  />
                </div>
                <div>4) Weight units</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="units"
                    type="radio"
                    v-model="wghtUnits"
                  />
                </div>
                <div>5) Goal race distance</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="goal"
                    type="radio"
                    v-model="goalDistance"
                  />
                </div>
                <div>
                  6) Have you been aerobically active in the last 3 months
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="aerobicActivity"
                  />
                </div>
                <div>
                  7) DO YOU FEEL YOU NEED TO BE BETTER AT ENDURANCE , SPEED OR
                  BOTH ?
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="enduranceOption"
                    type="radio"
                    v-model="speedOrEndurance"
                  />
                </div>
                <div>8) IS YOUR RACE DISTANCE SHORTER THEN 16 KMS?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="raceDistance"
                  />
                </div>
                <div>9) IS YOUR RACE ON A HILLY TERRAIN?</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="terrainOptions"
                    type="radio"
                    v-model="terrain"
                  />
                </div>
                <div>
                  10) HAVE U EVER COMPLETED EXPONENTIAL RUNNING TYPE TRAINING
                  PLAN?
                </div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="haveYou"
                    type="radio"
                    v-model="beenTrained"
                  />
                </div>
                <div>11) DATE OF RACE</div>
                <div class="q-pa-md">
                  <q-input type="date" v-model="dateOfRace" dense />
                </div>
                <div>12) TRAINING RUNS PER WEEK</div>
                <div class="q-pa-md">
                  <q-input type="number" v-model="frequency" dense />
                </div>
                <div>13) STARTING LONG RUN DURATION</div>
                <div class="q-pa-md">
                  <q-input type="time" v-model="longrunDuration" dense />
                </div>
                <div>14) DAY OF LONG RUN</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="dayOption"
                    type="radio"
                    v-model="longrunDay"
                  />
                </div>
                <div>15) HEART RATE TRAINING</div>
                <div class="q-pa-md">
                  <q-option-group
                    :options="yesOrNo"
                    type="radio"
                    v-model="heartRate"
                  />
                </div>
              </q-card-section>
            </q-form>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Submit"
                class="btn-grad"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <div class="mobile-only q-pt-md">
      <div class="q-gutter-y-md justify-center" id="runningMenu1">
        <div class="row mobile-only justify-center cta1 q-py-md q-my-xl">
          <div class="text-center">
            <q-img src="~assets/running-menu.png" width="90vw" />
          </div>
          <div
            class="
              text-center text-body1 text-weight-bold text-white
              col-11
              q-mb-md q-pb-md
            "
          >
            Choose your plan, plug in your personal data and training
            preferences. Using the information you provide, EXPONENTIAL RUNNING
            will individualize the exact plan for your target event based on
            your fitness, estimated VO2max, and training selections.
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center q-pb-xl">
      <div class="col-8 desktop-only text-center">
        <h3 class="titleFont text-uppercase q-pb-xl">
          AT YOUR PURCHASE OF EXPONENTIAL RUNNING PLAN YOU RECEIVE :
        </h3>
        <ol type="1" class="text-body1 text-left q-pb-xl">
          <li>EASY TO FOLLOW SCHEDULE</li>
          <li>TAILOR MADE WORKOUT</li>
          <li>PHASES TO RUN FASTER PACES</li>
          <li>CHOICE OF 4 TO 7 DAYS TRAINING PER WEEK</li>
          <li>CHOICE OF SATURDAY AND SUNDAY LONG RUNS</li>
          <li>PROGRESSIVE TRAINING PACES, HR RANGES AND EFFORT RANGE</li>
        </ol>
      </div>
      <div class="col-11 mobile-only text-center">
        <h5 class="titleFont no-margin text-uppercase">
          AT YOUR PURCHASE OF EXPONENTIAL RUNNING PLAN YOU RECEIVE :
        </h5>
        <ol
          type="1"
          class="text-body2 q-gutter-y-sm no-padding text-left q-mt-xl q-ml-md"
        >
          <li>EASY TO FOLLOW SCHEDULE</li>
          <li>TAILOR MADE WORKOUT</li>
          <li>PHASES TO RUN FASTER PACES</li>
          <li>CHOICE OF 4 TO 7 DAYS TRAINING PER WEEK</li>
          <li>CHOICE OF SATURDAY AND SUNDAY LONG RUNS</li>
          <li>PROGRESSIVE TRAINING PACES, HR RANGES AND EFFORT RANGE</li>
        </ol>
      </div>
    </div>
    <div class="row justify-center q-pb-xl" id="plans">
      <div class="col-8 desktop-only text-center">
        <h3 class="titleFont no-margin text-uppercase">
          Premium Performance Plans
        </h3>
        <div class="text-center text-h5 col-8" style="color: #2d6c8f">
          FOR SEASONED RUNNERS SEEKING PERSONAL PEAK PERFORMANCE
        </div>
        <div
          class="text-center text-h6 col-8 q-mb-xl q-pb-md"
          style="color: #52c099"
        >
          Entry level for these plans : 1 hour continuous running
        </div>
      </div>
      <div class="col-11 mobile-only text-center">
        <h5 class="titleFont no-margin text-uppercase">
          Premium Performance Plans
        </h5>
        <div
          class="text-center text-caption1 text-weight-medium q-pt-sm"
          style="color: #2d6c8f"
        >
          FOR SEASONED RUNNERS SEEKING PERSONAL PEAK PERFORMANCE
        </div>
        <div
          class="text-center text-caption1 text-weight-medium q-py-md"
          style="color: #52c099"
        >
          Entry level for these plans : 1 hour continuous running
        </div>
      </div>
    </div>
    <div
      class="
        q-gutter-y-xl q-gutter-md q-mb-xl
        box-wrap
        row
        justify-center
        text-center
        q-mx-xl
        desktop-only
      "
    >
      <div class="col-3 box-wrap q-px-md">
        <q-card class="box text-white">
          <q-card-section>
            <h4 class="text-secondary text-weight-bold">MARATHON</h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377;</span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="my-card box text-white">
          <q-card-section>
            <div class="text-secondary">
              <h4 class="text-weight-bold">25 KM</h4>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="my-card box text-white">
          <q-card-section>
            <h4 class="text-secondary q-pb-md text-weight-bold">
              HALF MARATHON
            </h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="box text-white">
          <q-card-section>
            <h4 class="text-secondary q-pb-md text-weight-bold">10 MILES</h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="my-card box text-white">
          <q-card-section>
            <h4 class="text-secondary q-pb-md text-weight-bold">10 KM</h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
    </div>
    <div
      class="
        q-gutter-y-md q-gutter-x-xs
        row
        justify-center
        text-center
        mobile-only
      "
    >
      <div class=".col">
        <q-card class="box1 text-white">
          <q-card-section>
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              MARATHON
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section>
            <div class="text-secondary">
              <h6 class="no-margin q-pt-sm text-weight-bold">25 KM</h6>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section class="no-padding">
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              HALF MARATHON
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="box1 text-white">
          <q-card-section class="no-padding">
            <h6
              class="no-margin q-pt-lg text-secondary q-pb-md text-weight-bold"
            >
              10 MILES
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section>
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              10 KM
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
    </div>
    <div class="row desktop-only justify-center q-py-xl">
      <div class="col-8 text-center q-pt-xl">
        <h3 class="titleFont no-margin text-uppercase">
          Newbies Up and Running/Racing Plans
        </h3>
        <div
          class="text-center text-uppercase text-h5 col-8"
          style="color: #2d6c8f"
        >
          To Run continuously upto 1 hour
        </div>
        <div
          class="text-center text-h6 col-8 q-mb-lg q-pb-xl"
          style="color: #52c099"
        >
          Entry level for these plans : 15 minutes continuous running
        </div>
      </div>
    </div>
    <div
      class="
        desktop-only
        q-gutter-y-xl q-mb-xl
        box-wrap
        row
        justify-center
        text-center
        q-mx-xl q-pb-lg
      "
    >
      <div class="col-3 box-wrap q-px-md">
        <q-card class="box text-white">
          <q-card-section>
            <h4 class="text-secondary text-weight-bold">10 KM</h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="box text-white">
          <q-card-section>
            <h4 class="text-secondary text-weight-bold">7 KM</h4>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
      <div class="col-3 box-wrap q-px-md">
        <q-card class="my-card box text-white">
          <q-card-section>
            <div class="text-secondary">
              <h4 class="text-weight-bold">5 KM</h4>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="lg" dense class="btn-grad">SELECT PLAN</q-btn>
          </q-card-actions>
          <span class="text-h5 money">&#8377; </span>
        </q-card>
      </div>
    </div>
    <div class="row mobile-only justify-center q-py-lg">
      <div class="col-11 text-center q-pt-xl">
        <h5 class="titleFont no-margin text-uppercase">
          Newbies Up and Running/Racing Plans
        </h5>
        <div
          class="
            text-center text-uppercase text-caption1 text-weight-medium
            q-pt-sm
          "
          style="color: #2d6c8f"
        >
          To Run continuously upto 1 hour
        </div>
        <div
          class="text-center text-caption1 text-weight-medium q-py-md"
          style="color: #52c099"
        >
          Entry level for these plans : 15 minutes continuous running
        </div>
      </div>
    </div>
    <div
      class="
        q-gutter-y-md q-gutter-x-xs
        row
        justify-center
        text-center
        mobile-only
      "
    >
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section>
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              10 KM
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section>
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              7 KM
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
      <div class=".col">
        <q-card class="my-card box1 text-white">
          <q-card-section>
            <h6 class="no-margin q-pt-sm text-secondary text-weight-bold">
              5 KM
            </h6>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn size="md" dense class="no-margin btn-grad"
              >SELECT PLAN</q-btn
            >
          </q-card-actions>
          <span class="text-h6 money">&#8377; </span>
        </q-card>
      </div>
    </div>
    <div class="row justify-center desktop-only q-pt-lg q-pb-xl" id="custom">
      <div class="col-8 text-center q-pb-lg q-mb-xl">
        <h3 class="desktop-only titleFont text-uppercase">
          IT'S CUSTOMISED AND INDIVIDUAL
        </h3>
        <p class="text-body1 text-left">
          Our training plans are customised and they adapt to your planned main
          competitions and competitions for preparation.
        </p>
        <p class="text-body1 text-left">
          Your running experience and your current capacity are considered for
          the generation of your individual schedule.
        </p>
        <p class="text-body1 text-left">
          After you having entered your basic information, you will get your
          trainings presented in a nicely structured way. The plan includes
          necessary information such as, distance,duration, pace,heartrate
          zone,effort level, as well as explanations on the goal and the purpose
          of a given session. Whether from the couch to 5k or on the way to your
          first marathon, EXPONENTIAL RUNNING will support you on your way to
          your goal.
        </p>
      </div>
    </div>

    <div class="row justify-center mobile-only q-pt-lg q-pb-xl" id="custom1">
      <div class="col-11 text-center q-pb-lg q-mb-xl">
        <h5 class="titleFont text-uppercase">IT'S CUSTOMISED AND INDIVIDUAL</h5>
        <p class="text-body2 text-left">
          Our training plans are customised and they adapt to your planned main
          competitions and competitions for preparation.
        </p>
        <p class="text-body2 text-left">
          Your running experience and your current capacity are considered for
          the generation of your individual schedule.
        </p>
        <p class="text-body2 text-left">
          After you having entered your basic information, you will get your
          trainings presented in a nicely structured way. The plan includes
          necessary information such as, distance,duration, pace,heartrate
          zone,effort level, as well as explanations on the goal and the purpose
          of a given session. Whether from the couch to 5k or on the way to your
          first marathon, EXPONENTIAL RUNNING will support you on your way to
          your goal.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      raceData: {
        vdot: [],
        mile: [],
        "5k": [],
        "10K": [],
        "10mile": [],
        halfMarathon: [],
        "25k": [],
        marathon: [],
      },
      autoplay: true,
      timeWithSeconds: "",
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
      distanceOptions: [
        "1 MILE",
        "5 KM",
        "10 KM",
        "10 MILES",
        "HALF MARATHON",
        "25 KM",
        "MARATHON",
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

    seedData() {
      let vdot = [];
      for (let i = 20; i < 85; i++) {
        for (let j = i + 0.1; j <= i + 1; j += 0.1) {
          vdot.push(Number(j.toFixed(1)));
        }
      }
      this.vdot = vdot;
      console.log(this.raceTimeData);
    },
  },
  computed: {
    ...mapGetters(["raceTimeData"]),
  },
  created() {
    this.seedData();
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

.cta-header {
  background: linear-gradient(
    273deg,
    rgba(17, 52, 72, 1) 19%,
    rgba(17, 52, 72, 1) 26%,
    rgba(17, 52, 72, 1) 32%,
    rgba(17, 52, 72, 1) 43%,
    rgba(17, 52, 72, 1) 59%,
    rgba(255, 255, 255, 0) 82%
  );
}

.cta-text {
  color: #2e7c61;
}

.money {
  color: white;
}

.vo2 > .q-field--auto-height.q-field--labeled .q-field__native {
  color: white;
}

.drp .q-icon {
  color: yellow;
}

.estimator {
  background: radial-gradient(circle, #3d7392 0%, #113448 100%);
}
</style>
