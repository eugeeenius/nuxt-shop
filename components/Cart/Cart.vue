<template>
  <div v-if="isOpen">
    <div :class="$style.layout"></div>
    <div :class="$style.cart">
      <div :class="$style.header">
        <h1 :class="$style.title">Корзина</h1>

        <a href="#" @click.prevent="toggle">
          <img src="~/assets/icons/close.svg" alt="close" :class="$style.close"
        /></a>
      </div>
      <CartFull />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.getters["cart/isOpen"];
    },
  },
  methods: {
    toggle() {
      this.$store.commit("cart/toggleIsOpen");
    },
  },
};
</script>

<style module lang="scss">
.layout {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  opacity: 0.8;
  z-index: 9999;
}
.cart {
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100%;
  width: 460px;
  padding: 0 48px;
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  animation: translateX 200ms ease-in-out backwards;
  transform-origin: top right;

  @keyframes translateX {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .header {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      line-height: 41px;
    }

    .close {
      width: 24px;
      height: 24px;
      display: block;
    }
  }
}
</style>