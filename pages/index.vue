<template></template>

<script>
export default {
  created() {
    this.$nuxt.$router.replace({ path: "categories/1" });
  },
};
</script>