<template>
  <div :class="$style.container">
    <div>
      <h1 :class="$style.title">Каталог</h1>
      <div :class="$style.menu">
        <nuxt-link
          :class="$style.menu_item"
          :to="'/categories/' + category.id"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.name }}
        </nuxt-link>
      </div>
    </div>
    <Select />
  </div>
</template>

<script>
export default {
  computed: {
    // Получаем список категорий из store
    categories() {
      return this.$store.getters["categories/categories"];
    },
  },
};
</script>

<style module lang="scss">
.container {
  width: 1264px;
  margin: 0 auto;
  padding-top: 88px;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 32px;
  font-weight: bold;
  color: #1f1f1f;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95px;
  margin-top: 24px;
  &_item {
    text-decoration: none;
    font-size: 16px;
    color: #959dad;
    &:hover {
      color: #59606d;
    }
  }
}
</style>