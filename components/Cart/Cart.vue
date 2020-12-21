<template>
  <div v-if="isOpen">
    <div :class="$style.layout"></div>
    <div :class="$style.cart" ref="cart">
      <div :class="$style.header">
        <h1 :class="$style.title">Корзина</h1>

        <a href="#" @click.prevent="close">
          <img src="~/assets/icons/close.svg" alt="close" :class="$style.close"
        /></a>
      </div>
      <div v-if="isFormValid">
        <CartOrdered />
      </div>
      <div v-if="cart.length === 0">
        <CartEmpty />
      </div>
      <div v-if="cart.length !== 0 && !isFormValid">
        <CartFull />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isOpen: "cart/isOpen",
      cart: "cart/cart",
      isFormValid: "cart/isFormValid",
    }),
  },
  methods: {
    ...mapMutations({
      isValid: "cart/isValid",
      clearCart: "cart/clearCart",
    }),
    close() {
      this.$store.commit("cart/toggleIsOpen");

      // Если заказ успешно прошел – чистим корзину
      if (this.isFormValid) {
        this.isValid(), this.clearCart();
      }
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
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 10000;
  position: absolute;
  top: 0;
  right: 0;
  height: 1077px;
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
