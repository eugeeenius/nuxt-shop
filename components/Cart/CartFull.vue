<template>
  <div :class="$style.full">
    <span :class="[$style.title, $style.top]">Товары в корзине</span>
    <div :class="$style.wrap">
      <div v-for="c in this.cart" :key="c.timestamp">
        <CartItem :cart="c" />
      </div>
    </div>

    <span :class="[$style.title, $style.bottom]">Оформить заказ</span>
    <CartForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters("cart", ["cart"]),
};
</script>

<style lang="scss" module>
.full {
  .title {
    display: block;
    font-size: 18px;
    line-height: 23px;
    color: #59606d;

    &.top {
      margin-top: 24px;
    }

    &.bottom {
      margin-top: 32px;
    }
  }

  .wrap {
    padding-top: 4px;
  }
}
</style>