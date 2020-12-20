<template>
  <div :class="$style.item"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.item {
  width: 364px;
  height: 120px;
  border-radius: 8px;
  background: #ffe9e9;
  margin-top: 12px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);

  &:first-child {
    margin-top: 16px;
  }
}
</style>