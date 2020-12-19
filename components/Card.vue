<template>
  <div :class="$style.card" v-bind:style="{ 'background-image': `${image}` }">
    <div :class="$style.header">
      <div :class="$style.rating">
        <img :class="$style.star" src="~/assets/icons/star.svg" alt="star" />
        <span :class="$style.points">4.5</span>
      </div>

      <img :class="$style.cart" src="~/assets/icons/cart.svg" alt="cart" />
    </div>

    <div :class="$style.description">
      <p :class="$style.name">Рюкзак Louis Vuitton Discovery</p>
      <p :class="$style.price">150 000 ₽</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style module lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 264px;
  height: 272px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 16px;

  .header {
    display: flex;
    justify-content: space-between;

    .rating {
      display: flex;
      width: 34px;
      height: 20px;
      justify-content: center;
      align-items: center;
      margin-top: 1px;

      .star {
        width: 20px;
        height: 20px;
      }

      .points {
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: #f2c94c;
      }
    }

    .cart {
      width: 16px;
      height: 16px;
      float: right;
    }
  }

  .description {
    float: bottom;
    font-size: 14px;
    line-height: 18px;
    .name {
      color: #59606d;
    }
    .price {
      font-weight: bold;
      color: #1f1f1f;
      margin-top: 6px;
    }
  }
}
</style>