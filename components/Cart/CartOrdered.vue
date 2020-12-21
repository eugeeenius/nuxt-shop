<template>
  <div :class="$style.ordered">
    <img :class="$style.ok" src="~assets/icons/ok.svg" alt="" />
    <div :class="$style.descr">
      <strong :class="$style.success">Заявка успешно отправлена</strong>
      <span :class="$style.contact">Вскоре наш менеджер свяжется с Вами</span>
    </div>
  </div>
</template>

<style module lang="scss">
.ordered {
  padding-top: 366px;
  font-size: 22px;
  line-height: 28px;
  font-size: 16px;
  line-height: 21px;
  color: #59606d;
  text-align: center;

  .descr {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    height: 54px;
    justify-content: space-between;
    .success {
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      color: #000;
    }

    .contact {
      // margin-top: 2px;
    }
  }
}
</style>