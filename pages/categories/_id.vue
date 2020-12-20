<template>
  <div :class="$style.wrapper" ref="wrap">
    <div v-for="product in products" :key="product.id">
      <Card
        :photo="product.photo"
        :rating="product.rating"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ store }) {
    // Фетчим в store товары
    if (store.getters["product/product"].length === 0) {
      await store.dispatch("product/getProducts");
    }
    // Фетчим в store категории
    if (store.getters["categories/categories"].length === 0) {
      await store.dispatch("categories/getCategories");
    }
  },
  computed: {
    ...mapGetters({
      product: "product/product",
      activeOptionId: "select/activeOptionId",
    }),
    products() {
      // Получаем id категории через динамический параметр страницы
      const category = parseInt(this.$route.params.id);

      // Фильтруем товары по категории
      let filtred = this.product.filter((el) => el.category === category);

      // Фильтруем товары в по цене
      if (this.activeOptionId === 1) {
        return filtred.sort((a, b) => (a.price > b.price ? 1 : -1));
      }

      return filtred;
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: -1;
  flex-shrink: 2;
}
</style>