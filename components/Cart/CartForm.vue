<template>
  <div :class="$style.form">
    <div :class="$style.input">
      <input type="text" :class="$style.input__item" placeholder="Ваше имя" />
      <input type="text" :class="$style.input__item" />
      <input type="text" :class="$style.input__item" />
    </div>
    <CartButton :text="'Отправить'" :handler="click" />
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      console.log("who ei you");
    },
  },
};
</script>

<style lang="scss" module>
.form {
  width: 364px;
  height: 256px;
  margin-top: 16px;

  .input {
    width: 364px;
    height: 182px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__item {
      padding-left: 14px;
      width: 364px;
      height: 50px;
      background: #f8f8f8;
      border-radius: 8px;
      border: none;
      outline: none;
      font-family: "PT Sans";
      font-size: 16px;
    }
  }
}
</style>