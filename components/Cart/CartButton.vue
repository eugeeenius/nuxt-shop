<template>
  <button @click="handler" :class="$style.btn">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: { type: String },
    handler: { type: Function },
  },
};
</script>

<style module lang="scss">
.btn {
  width: 364px;
  height: 50px;
  color: #fff;
  background: #000;
  margin-top: 24px;
  border-radius: 8px;
  border: none;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  word-spacing: 0px;
  outline: none;
  cursor: pointer;
}
</style>