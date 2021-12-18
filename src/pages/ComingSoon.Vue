<template>
  <q-page>
    <div class="absolute-center">
      <h4>COMING SOON</h4>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "PageIndex",
  data() {
    return {
      new: true,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
