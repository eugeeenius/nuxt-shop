<template>
  <div
    :style="{
      background: `url('https://frontend-test.idaproject.com${cart.photo}') 5% 68%/cover no-repeat`,
      'background-size': '100px, 100px',
    }"
    :class="$style.item"
  >
    <div :class="$style.content">
      <div :class="$style.content__descr">
        <div :class="$style.name">
          <p :class="$style.name__text">
            {{ cart.name.toLowerCase() }}
          </p>
        </div>

        <p :class="$style.price" ref="price"></p>

        <div :class="$style.rating">
          <img :class="$style.star" src="~/assets/icons/star.svg" alt="star" />
          <span :class="$style.points">{{ cart.rating }}</span>
        </div>
      </div>

      <CartTrashBtn :id="cart.id" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: { type: Object },
  },
  methods: {
    // Форматируем цену(1)
    format(price) {
      return this.$store.dispatch("product/formatPrice", price);
    },
    removeFromCart(id) {
      return this.$store.commit("product/formatPrice", id);
    },
  },
  async mounted() {
    // Форматируем цену(2)
    if (this.$refs.price) {
      this.$refs.price.innerHTML = await this.format(this.$props.cart.price);
    }
  },
};
</script>

<style lang="scss" module>
.item {
  width: 364px;
  height: 120px;
  border-radius: 8px;
  background: #fff;
  margin-top: 12px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 16px 12px 130px;

  .content {
    width: 218px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__descr {
      display: flex;
      flex-direction: column;

      .rating {
        display: flex;
        width: 34px;
        height: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 16px;

        .star {
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

      .name {
        font-size: 14px;
        width: 170px;
        line-height: 18px;
        height: 36px;
        &__text {
          color: #59606d;
          text-transform: lowercase;
          text-transform: capitalize;
        }
      }
      .price {
        font-size: 14px;
        font-weight: bold;
        color: #1f1f1f;
        margin-top: 6px;
      }
    }
  }
}
</style>