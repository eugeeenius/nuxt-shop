<template>
  <form :class="$style.form" @submit.prevent="checkForm">
    <div :class="$style.input">
      <input
        v-model.trim="name"
        id="name"
        type="text"
        :class="$style.input__item"
        placeholder="Ваше имя"
        :style="!isNameValid ? 'border: 2px solid red' : ''"
        @focus="removeBorder"
      />

      <input
        type="text"
        v-model="phone"
        :class="$style.input__item"
        placeholder="Телефон"
        v-mask="'+7(###)-###-##-##'"
        :style="!isPhoneValid ? 'border: 2px solid red' : ''"
        @focus="removeBorder"
      />
      <input
        v-model="address"
        type="text"
        :class="$style.input__item"
        placeholder="Адрес"
        :style="!isAddressValid ? 'border: 2px solid red' : ''"
        @focus="removeBorder"
      />
    </div>
    <CartButton :text="'Отправить'" :handler="() => {}" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      isNameValid: true,
      isPhoneValid: true,
      isAddressValid: true,
    };
  },
  methods: {
    checkForm() {
      if (this.name.length < 2) {
        this.isNameValid = false;
      }
      if (this.phone.length !== 17) {
        this.isPhoneValid = false;
      }
      if (this.address.length < 5) {
        this.isAddressValid = false;
      }

      if (this.isNameValid && this.isPhoneValid && this.isAddressValid) {
        this.$store.commit("cart/isValid");
      }
    },

    removeBorder(e) {
      e.target.style.border = "none";
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
    .invalid {
      border: 2px red solid;
    }
  }
}
</style>