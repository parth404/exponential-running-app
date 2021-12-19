<template>
  <q-page>
    <div class="absolute-center">
      <h4>COMING SOON</h4>
      <div>
        <q-btn size="lg" to="/" label="Back to Home" color="primary" />
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
