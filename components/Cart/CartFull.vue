<template>
  <div :class="$style.empty">
    <span :class="[$style.title, $style.top]">Товары в корзине</span>
    <div :class="$style.product">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.empty {
  .title {
    display: block;
    font-size: 18px;
    line-height: 23px;
    color: #59606d;

    &.top {
      margin-top: 24px;
    }
  }

  .product {
    width: 364px;
    max-height: 384px;
    overflow-y: auto;
  }
}
</style>
<CartButton :text="'Перейти к выбору'" :handler="() => console.log('yo')" />