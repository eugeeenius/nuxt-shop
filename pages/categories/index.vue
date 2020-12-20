<template>
  <Page />
</template>

<script>
export default {
  mounted() {
    this.$nuxt.$router.push({ path: "1" });
  },
};
</script>