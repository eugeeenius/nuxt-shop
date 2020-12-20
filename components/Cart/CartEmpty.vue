<template>
  <div :class="$style.empty">
    Пока что вы ничего не добавили <br />
    в корзину.
    <CartButton :text="'Перейти к выбору'" :handler="clickHandler" />
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      this.$store.commit("cart/toggleIsOpen");
    },
  },
};
</script>

<style module lang="scss">
.empty {
  font-size: 22px;
  line-height: 28px;
  margin-top: 24px;
}
</style>