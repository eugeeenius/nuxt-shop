<template>
  <div
    :class="$style.card"
    :style="{
      background: `url('https://frontend-test.idaproject.com${photo}') 64% 27%/cover no-repeat`,
      'background-size': '204px, 204px',
    }"
  >
    <div :class="$style.header">
      <div :class="$style.rating">
        <img :class="$style.star" src="~/assets/icons/star.svg" alt="star" />
        <span :class="$style.points">{{ rating }}</span>
      </div>

      <button :class="$style.btn">
        <img :class="$style.cart" src="~/assets/icons/cart.svg" alt="cart" />
      </button>
    </div>
    <div :class="$style.description">
      <p :class="$style.name">{{ name.toLowerCase() }}</p>
      <p :class="$style.price">
        {{
          // Форматируем цену
          price.toString().slice(0, 3) + " 000 ₽"
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
    },
    rating: { type: Number },
    name: { type: String },
    price: { type: Number },
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
  background-size: 100px, 100px;
  margin-bottom: 16px;

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
        margin-left: -8px;
        width: 20px;
        height: 20px;
      }

      .points {
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
        color: #f2c94c;
      }
    }

    .btn {
      border: none;
      cursor: pointer;
      width: 16px;
      height: 16px;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      z-index: 100;

      .cart {
        display: block;
        width: inherit;
        height: inherit;
        float: right;
      }
    }
  }
  .description {
    float: bottom;
    font-size: 14px;
    line-height: 18px;
    .name {
      color: #59606d;
      text-transform: lowercase;
      text-transform: capitalize;
    }
    .price {
      font-weight: bold;
      color: #1f1f1f;
      margin-top: 6px;
    }
  }
}
</style>