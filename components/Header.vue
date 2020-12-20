<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <h1 :class="$style.title">TestList</h1>
      <CartIcon />
    </div>
  </header>
</template>

<script>
import CartIcon from "@/components/CartIcon.vue";
export default {
  components: { CartIcon },
};
</script>

<style module lang="scss">
.container {
  width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header {
  position: fixed;
  min-width: 100vw;
  height: 66px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  background: #fff;
  z-index: 9000;
}
.title {
  color: #59606d;
  font-weight: bold;
  font-size: 22px;
  margin-top: 18px;
  line-height: 28px;
}
</style>