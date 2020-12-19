<template>
  <div :class="$style.container">
    <div>
      <h1 :class="$style.title">Каталог</h1>
      <div :class="$style.menu">
        <nuxt-link to="#" :class="$style.menu_item">Рюкзаки</nuxt-link>
        <nuxt-link to="#" :class="$style.menu_item">Футболки</nuxt-link>
        <nuxt-link to="#" :class="$style.menu_item">Рубашки</nuxt-link>
      </div>
    </div>
    <Select />
  </div>
</template>

<style module lang="scss">
.container {
  width: 1264px;
  margin: 0 auto;
  padding-left: 14px;
  display: flex;
  justify-content: space-between;
}
.title {
  margin-top: 32px;
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