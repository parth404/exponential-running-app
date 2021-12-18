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
      <h4 class="text-uppercase text-weight-bold" style="letter-spacing: 4px">
        faq
      </h4>
    </q-banner>
    <q-banner class="mobile-only cta-header1 text-center" style="height: 12vh">
      <h6 class="no-margin text-uppercase text-weight-medium">faq</h6>
    </q-banner>
    <div class="row desktop-only text-center justify-center q-pb-xl">
      <div class="col-8">
        <h3 class="text-weight-regular text-uppercase titleFont">
          Frequently Asked Questions
        </h3>
        <div class="row text-left q-py-xl q-mt-xl">
          <div class="q-pa-md full-width">
            <q-list bordered>
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="How can EXPONENTIAL RUNNING plans help me train and race better?"
                default-opened
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    Our plans are hi tech have taken years of research,testing
                    and are scientifically proven to bring you for user friendly
                    experience. EXPONENTIAL RUNNING. plans gives you essential
                    specifics on how to do workouts at the right intensity for
                    the most beneficial training stimuli. Recovery running days
                    are extended and shortened appropriately to give you an
                    ideal boost in fitness. EXPONENTIAL RUNNING plans are
                    written carefully with minimizing risk of injury. Ofourse
                    its your responsibility to use it in a way that does not
                    derail your training. The training is structured to
                    <b>“Race your best on the day that counts”</b> by
                    progressing you through a series of phases.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What all I get when I buy the plan?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    When you buy the plan you will get a workout schedule sheet
                    for the number of weeks of your training periods. On your
                    sheet all the details will be mention like duration of
                    workout, pace,distance, heart-rate zone and RPE. Each
                    workout has a description to perform that particular run.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I don’t have a GPS watches or Heart-rate Monitors?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    If you don’t have GPS watches or Heart-rate Monitors No
                    problem. You can still train on our same plan with RPE (RATE
                    OF PERCEIVED EFFORT). Click here , The Art of feeling based
                    training is most trusted training indicators. “TRAIN INSIDE
                    OUT NOT OUTSIDE IN”
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if some kind of setback like injury or illness happens on my way of training? Can you give me refund?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    Once you buy the plan there is no refund for it. Our plans
                    are designed keeping in mind there is minimal setback like
                    injury or illness ,if you train it in a self responsible
                    way. There is lot of research done on it to keep you injury
                    and illness free. In special circumstances we are ready to
                    help you contact us.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I’ m Recreational runner and can only run 3 to 4 days a week of running will this plans still work for me ?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    Yes of course! Plans are designed to adapt all kind of
                    runners even who have limited time to train. You can opt for
                    4/5/6 days a week of training schedules. If you need to miss
                    days we have provided Priority Numbers to the weekly
                    workouts so that you can easily choose which one to skip and
                    still get the most from your schedule. Keep in mind that the
                    more often you run the better.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I miss 1 or 2 weeks of training due to injury or illness ? How can i restart the plan? "
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    Recovering from your setback is the priority. Gradually
                    build up with easy paces for few days and get comfortable
                    with your paces and reinstate the program at that point of
                    time.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />

              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I am training for FULL MARATHON and my Longest run is only 25 to 30 kms . How can I run the marathon race?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    All runs are scientifically design so that you recover well
                    before a Marathon Race. Long runs are based on time and not
                    distance. If you run 32kms at your pace you will be on your
                    feet for more then 4 hours or more. For slow runners and
                    beginners this can lead to tissue damage staying longer on
                    feet and high risk of body breakdown or injury. Recovering
                    from this kind of fatigue can take 8 to 12 days hence not
                    performing optimum workouts schedule for that week. Its not
                    that only one Long run will make you race better it’s the
                    course of whole program that makes you race ready.
                    <b>TRUST THE PLAN !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="Can I switch the workouts within a week?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    No. The workout has to be done in sequence as mentioned in
                    program for optimal result. The best way to change days is
                    to keep the pattern by shifting all your runs back a day.
                    Every run is design to avoid over-training and injury.
                    <b>Follow the Plan !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I miss any of my weekly runs?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    We have given priority numbers of each runs in a week. If
                    you want to skip any runs of a week you can select from the
                    it. Please note <b>MORE YOU RUN BETTER YOU RACE !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="Why are the paces and duration widely spread into the program?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    Paces are just the guidelines. If you feel its too slow you
                    can run at the top end of the pace range and vice versa if
                    you feel fast. Same with the duration. Run with the feel.
                    What happens is most of the times people who Train on our
                    program gets fitter within few weeks into the plan. They
                    start to feel workouts easier. But as you progress into the
                    program through phases the workout gets harder at that pace.
                    <b>RACE IS MORE THEN SOME OF ITS PART!</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-h6"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I like your training plans. I can train and  race even better if I opt for personalized training program. How can i contact you?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body1">
                    <b>You bet !</b> To run <b>EXPONENTIALLY</b> Contact us and
                    we will get back to you in 3 to 4 days.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
            </q-list>
          </div>
        </div>
      </div>
    </div>
    <div class="row mobile-only text-center justify-center q-pb-xl">
      <div class="col-11">
        <h5 class="text-weight-regular text-uppercase titleFont">
          Frequently Asked Questions
        </h5>
        <div class="row text-left">
          <div class="q-pa-xs full-width">
            <q-list bordered>
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="How can EXPONENTIAL RUNNING plans help me train and race better?"
                default-opened
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    Our plans are hi tech have taken years of research,testing
                    and are scientifically proven to bring you for user friendly
                    experience. EXPONENTIAL RUNNING plans gives you essential
                    specifics on how to do workouts at the right intensity for
                    the most beneficial training stimuli. Recovery running days
                    are extended and shortened appropriately to give you an
                    ideal boost in fitness. EXPONENTIAL RUNNING plans are
                    written carefully with minimizing risk of injury. Ofourse
                    its your responsibility to use it in a way that does not
                    derail your training. The training is structured to
                    <b>“Race your best on the day that counts”</b> by
                    progressing you through a series of phases.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What all I get when I buy the plan?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    When you buy the plan you will get a workout schedule sheet
                    for the number of weeks of your training periods. On your
                    sheet all the details will be mention like duration of
                    workout, pace,distance, heart-rate zone and RPE. Each
                    workout has a description to perform that particular run.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I don’t have a GPS watches or Heart-rate Monitors?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    If you don’t have GPS watches or Heart-rate Monitors No
                    problem. You can still train on our same plan with RPE (RATE
                    OF PERCEIVED EFFORT). Click here , The Art of feeling based
                    training is most trusted training indicators. “TRAIN INSIDE
                    OUT NOT OUTSIDE IN”
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if some kind of setback like injury or illness happens on my way of training? Can you give me refund?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    Once you buy the plan there is no refund for it. Our plans
                    are designed keeping in mind there is minimal setback like
                    injury or illness ,if you train it in a self responsible
                    way. There is lot of research done on it to keep you injury
                    and illness free. In special circumstances we are ready to
                    help you contact us.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I’ m Recreational runner and can only run 3 to 4 days a week of running will this plans still work for me ?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    Yes of course! Plans are designed to adapt all kind of
                    runners even who have limited time to train. You can opt for
                    4/5/6 days a week of training schedules. If you need to miss
                    days we have provided Priority Numbers to the weekly
                    workouts so that you can easily choose which one to skip and
                    still get the most from your schedule. Keep in mind that the
                    more often you run the better.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I miss 1 or 2 weeks of training due to injury or illness ? How can i restart the plan? "
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    Recovering from your setback is the priority. Gradually
                    build up with easy paces for few days and get comfortable
                    with your paces and reinstate the program at that point of
                    time.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />

              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I am training for FULL MARATHON and my Longest run is only 25 to 30 kms . How can I run the marathon race?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    All runs are scientifically design so that you recover well
                    before a Marathon Race. Long runs are based on time and not
                    distance. If you run 32kms at your pace you will be on your
                    feet for more then 4 hours or more. For slow runners and
                    beginners this can lead to tissue damage staying longer on
                    feet and high risk of body breakdown or injury. Recovering
                    from this kind of fatigue can take 8 to 12 days hence not
                    performing optimum workouts schedule for that week. Its not
                    that only one Long run will make you race better it’s the
                    course of whole program that makes you race ready.
                    <b>TRUST THE PLAN !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="Can I switch the workouts within a week?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    No. The workout has to be done in sequence as mentioned in
                    program for optimal result. The best way to change days is
                    to keep the pattern by shifting all your runs back a day.
                    Every run is design to avoid over-training and injury.
                    <b>Follow the Plan !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="What if I miss any of my weekly runs?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    We have given priority numbers of each runs in a week. If
                    you want to skip any runs of a week you can select from the
                    it. Please note <b>MORE YOU RUN BETTER YOU RACE !</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="Why are the paces and duration widely spread into the program?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    Paces are just the guidelines. If you feel its too slow you
                    can run at the top end of the pace range and vice versa if
                    you feel fast. Same with the duration. Run with the feel.
                    What happens is most of the times people who Train on our
                    program gets fitter within few weeks into the plan. They
                    start to feel workouts easier. But as you progress into the
                    program through phases the workout gets harder at that pace.
                    <b>RACE IS MORE THEN SOME OF ITS PART!</b>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
              <q-expansion-item
                class="text-body1"
                style="letter-spacing: 1px"
                group="somegroup"
                label="I like your training plans. I can train and  race even better if I opt for personalized training program. How can i contact you?"
                header-class="text-primary"
              >
                <q-card>
                  <q-card-section class="text-body2">
                    <b>You bet !</b> To run <b>EXPONENTIALLY</b> Contact us and
                    we will get back to you in 3 to 4 days.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator />
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Faq",
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
